-- Add a function to check for booking conflicts
CREATE OR REPLACE FUNCTION check_car_availability(
  car_id UUID,
  start_date TIMESTAMP WITH TIME ZONE,
  end_date TIMESTAMP WITH TIME ZONE,
  exclude_booking_id UUID DEFAULT NULL
) RETURNS BOOLEAN AS $$
DECLARE
  conflicts INTEGER;
BEGIN
  SELECT COUNT(*) INTO conflicts
  FROM bookings
  WHERE bookings.car_id = check_car_availability.car_id
    AND bookings.status = 'confirmed'
    AND (exclude_booking_id IS NULL OR bookings.id != exclude_booking_id)
    AND (
      (bookings.start_date <= check_car_availability.end_date AND bookings.end_date >= check_car_availability.start_date)
    );
  
  RETURN conflicts = 0;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to update car availability when bookings change
CREATE OR REPLACE FUNCTION update_car_availability() RETURNS TRIGGER AS $$
BEGIN
  -- For new bookings or status changes
  IF (TG_OP = 'INSERT' OR (TG_OP = 'UPDATE' AND OLD.status != NEW.status)) THEN
    -- If booking is confirmed, check if we need to update car availability
    IF NEW.status = 'confirmed' THEN
      -- Update car availability based on booking dates
      UPDATE cars
      SET available = FALSE
      WHERE id = NEW.car_id;
    END IF;
    
    -- If booking is cancelled, check if car can be made available again
    IF NEW.status = 'cancelled' AND OLD.status = 'confirmed' THEN
      -- Check if there are other active bookings for this car
      IF check_car_availability(NEW.car_id, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) THEN
        UPDATE cars
        SET available = TRUE
        WHERE id = NEW.car_id;
      END IF;
    END IF;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create the trigger on the bookings table
DROP TRIGGER IF EXISTS update_car_availability_trigger ON bookings;
CREATE TRIGGER update_car_availability_trigger
AFTER INSERT OR UPDATE OF status ON bookings
FOR EACH ROW
EXECUTE FUNCTION update_car_availability();
