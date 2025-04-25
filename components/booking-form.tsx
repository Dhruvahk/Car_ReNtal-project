"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Car } from "@/lib/types"
import { createBooking } from "@/lib/actions"

interface BookingFormProps {
  car: Car
}

export function BookingForm({ car }: BookingFormProps) {
  const router = useRouter()
  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const calculateTotalDays = () => {
    if (!startDate || !endDate) return 0
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays || 1 // Minimum 1 day
  }

  const calculateTotalPrice = () => {
    const days = calculateTotalDays()
    return days * car.pricePerDay
  }

  const handleBooking = async () => {
    if (!startDate || !endDate) {
      setError("Please select pickup and return dates")
      return
    }

    if (startDate > endDate) {
      setError("Return date must be after pickup date")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const result = await createBooking({
        carId: car.id,
        startDate,
        endDate,
        totalPrice: calculateTotalPrice(),
      })

      if (result.success) {
        router.push(`/booking/confirmation/${result.bookingId}`)
      } else {
        setError(result.error || "Failed to create booking")
      }
    } catch (err) {
      setError("An unexpected error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Pickup Date</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn("w-full justify-start text-left font-normal", !startDate && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {startDate ? format(startDate, "PPP") : "Select date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={setStartDate}
              initialFocus
              disabled={(date) => date < new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Return Date</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn("w-full justify-start text-left font-normal", !endDate && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {endDate ? format(endDate, "PPP") : "Select date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={endDate}
              onSelect={setEndDate}
              initialFocus
              disabled={(date) => date < (startDate || new Date())}
            />
          </PopoverContent>
        </Popover>
      </div>

      {startDate && endDate && (
        <div className="pt-4 border-t">
          <div className="flex justify-between mb-2">
            <span>Days</span>
            <span>{calculateTotalDays()}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Price per day</span>
            <span>${car.pricePerDay}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${calculateTotalPrice()}</span>
          </div>
        </div>
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}

      <Button
        onClick={handleBooking}
        className="w-full"
        disabled={!car.available || isLoading || !startDate || !endDate}
      >
        {isLoading ? "Processing..." : "Book Now"}
      </Button>
    </div>
  )
}
