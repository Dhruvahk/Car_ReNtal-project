// Simulated database queries
// In a real application, these would fetch data from a database

import type { Car, Booking } from "./types"

// Sample car data
const carsData: Car[] = [
  {
    id: "car1",
    name: "Toyota Camry",
    type: "Sedan",
    description:
      "The Toyota Camry is a comfortable and reliable sedan, perfect for city driving and long trips. It offers excellent fuel economy and a smooth ride.",
    pricePerDay: 45,
    available: true,
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    year: 2022,
    features: ["Bluetooth", "Backup Camera", "Cruise Control", "USB Port", "Navigation"],
  },
  {
    id: "car2",
    name: "Honda CR-V",
    type: "SUV",
    description:
      "The Honda CR-V is a versatile SUV with ample cargo space and comfortable seating for five. It's perfect for family trips and outdoor adventures.",
    pricePerDay: 55,
    available: true,
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    year: 2021,
    features: ["Bluetooth", "Backup Camera", "Cruise Control", "Heated Seats", "Sunroof"],
  },
  {
    id: "car3",
    name: "BMW 3 Series",
    type: "Luxury",
    description:
      "The BMW 3 Series combines luxury, performance, and handling in a sleek package. It's perfect for those who want a premium driving experience.",
    pricePerDay: 85,
    available: true,
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    year: 2023,
    features: ["Leather Seats", "Premium Sound System", "Navigation", "Heated Seats", "Parking Sensors"],
  },
  {
    id: "car4",
    name: "Ford Mustang",
    type: "Sports",
    description:
      "The Ford Mustang is an iconic American sports car with powerful performance and head-turning style. It's perfect for those who want excitement on the road.",
    pricePerDay: 95,
    available: true,
    seats: 4,
    transmission: "Manual",
    fuel: "Gasoline",
    year: 2022,
    features: ["Leather Seats", "Premium Sound System", "Backup Camera", "Bluetooth", "Keyless Entry"],
  },
  {
    id: "car5",
    name: "Chevrolet Spark",
    type: "Compact",
    description:
      "The Chevrolet Spark is a compact and fuel-efficient car, perfect for city driving and tight parking spaces. It's economical and easy to maneuver.",
    pricePerDay: 35,
    available: true,
    seats: 4,
    transmission: "Automatic",
    fuel: "Gasoline",
    year: 2021,
    features: ["Bluetooth", "Backup Camera", "USB Port", "Air Conditioning", "Keyless Entry"],
  },
  {
    id: "car6",
    name: "Jeep Wrangler",
    type: "SUV",
    description:
      "The Jeep Wrangler is a rugged SUV built for off-road adventures. It's perfect for those who want to explore beyond the pavement.",
    pricePerDay: 75,
    available: true,
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    year: 2022,
    features: ["4x4", "Removable Top", "Bluetooth", "Navigation", "Tow Package"],
  },
  {
    id: "car7",
    name: "Tesla Model 3",
    type: "Electric",
    description:
      "The Tesla Model 3 is an all-electric sedan with impressive range and performance. It's perfect for those who want a sustainable and high-tech driving experience.",
    pricePerDay: 90,
    available: true,
    seats: 5,
    transmission: "Automatic",
    fuel: "Electric",
    year: 2023,
    features: ["Autopilot", "Premium Sound System", "Navigation", "Heated Seats", "Glass Roof"],
  },
  {
    id: "car8",
    name: "Hyundai Tucson",
    type: "SUV",
    description:
      "The Hyundai Tucson is a stylish and practical SUV with modern features and comfortable seating. It's perfect for daily commutes and weekend getaways.",
    pricePerDay: 50,
    available: true,
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    year: 2022,
    features: ["Bluetooth", "Backup Camera", "Apple CarPlay", "Android Auto", "Keyless Entry"],
  },
  {
    id: "car9",
    name: "Audi A4",
    type: "Luxury",
    description:
      "The Audi A4 is a premium sedan with sophisticated design and advanced technology. It's perfect for those who want luxury and performance.",
    pricePerDay: 80,
    available: true,
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    year: 2023,
    features: ["Leather Seats", "Premium Sound System", "Navigation", "Heated Seats", "Parking Sensors"],
  },
  {
    id: "car10",
    name: "Nissan Altima",
    type: "Sedan",
    description:
      "The Nissan Altima is a reliable and fuel-efficient sedan with a comfortable interior. It's perfect for daily commutes and long trips.",
    pricePerDay: 45,
    available: true,
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    year: 2021,
    features: ["Bluetooth", "Backup Camera", "Cruise Control", "USB Port", "Keyless Entry"],
  },
  {
    id: "car11",
    name: "Mazda CX-5",
    type: "SUV",
    description:
      "The Mazda CX-5 is a stylish and fun-to-drive SUV with upscale features. It's perfect for those who want a premium feel without the premium price.",
    pricePerDay: 55,
    available: true,
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    year: 2022,
    features: ["Leather Seats", "Bluetooth", "Backup Camera", "Navigation", "Sunroof"],
  },
  {
    id: "car12",
    name: "Volkswagen Golf",
    type: "Compact",
    description:
      "The Volkswagen Golf is a versatile hatchback with European styling and solid performance. It's perfect for those who want practicality with a touch of sophistication.",
    pricePerDay: 40,
    available: true,
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    year: 2021,
    features: ["Bluetooth", "Backup Camera", "Apple CarPlay", "Android Auto", "Heated Seats"],
  },
  {
    id: "car13",
    name: "Dodge Challenger",
    type: "Sports",
    description:
      "The Dodge Challenger is a powerful American muscle car with bold styling. It's perfect for those who want to make a statement on the road.",
    pricePerDay: 90,
    available: true,
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    year: 2022,
    features: ["Leather Seats", "Premium Sound System", "Backup Camera", "Bluetooth", "Keyless Entry"],
  },
  {
    id: "car14",
    name: "Kia Sorento",
    type: "SUV",
    description:
      "The Kia Sorento is a spacious and feature-packed SUV with three rows of seating. It's perfect for families and group trips.",
    pricePerDay: 60,
    available: true,
    seats: 7,
    transmission: "Automatic",
    fuel: "Gasoline",
    year: 2022,
    features: ["Third Row Seating", "Bluetooth", "Backup Camera", "Apple CarPlay", "Android Auto"],
  },
  {
    id: "car15",
    name: "Lexus ES",
    type: "Luxury",
    description:
      "The Lexus ES is a refined luxury sedan with a smooth ride and premium features. It's perfect for those who prioritize comfort and quality.",
    pricePerDay: 85,
    available: true,
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    year: 2023,
    features: ["Leather Seats", "Premium Sound System", "Navigation", "Heated and Ventilated Seats", "Parking Sensors"],
  },
  {
    id: "car16",
    name: "Subaru Outback",
    type: "Wagon",
    description:
      "The Subaru Outback is a versatile wagon with standard all-wheel drive and rugged capability. It's perfect for outdoor enthusiasts and adventure seekers.",
    pricePerDay: 55,
    available: true,
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    year: 2022,
    features: ["All-Wheel Drive", "Roof Rails", "Bluetooth", "Backup Camera", "Apple CarPlay"],
  },
  {
    id: "car17",
    name: "Mini Cooper",
    type: "Compact",
    description:
      "The Mini Cooper is a fun and iconic compact car with distinctive styling and nimble handling. It's perfect for those who want a unique driving experience.",
    pricePerDay: 50,
    available: true,
    seats: 4,
    transmission: "Automatic",
    fuel: "Gasoline",
    year: 2021,
    features: ["Panoramic Sunroof", "Bluetooth", "Backup Camera", "Heated Seats", "Keyless Entry"],
  },
  {
    id: "car18",
    name: "Cadillac Escalade",
    type: "Luxury SUV",
    description:
      "The Cadillac Escalade is a full-size luxury SUV with imposing presence and premium amenities. It's perfect for those who want space and luxury.",
    pricePerDay: 120,
    available: true,
    seats: 7,
    transmission: "Automatic",
    fuel: "Gasoline",
    year: 2023,
    features: [
      "Leather Seats",
      "Premium Sound System",
      "Navigation",
      "Heated and Ventilated Seats",
      "360-Degree Camera",
    ],
  },
  {
    id: "car19",
    name: "Honda Civic",
    type: "Sedan",
    description:
      "The Honda Civic is a reliable and efficient compact sedan with modern features. It's perfect for daily commutes and city driving.",
    pricePerDay: 40,
    available: true,
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    year: 2022,
    features: ["Bluetooth", "Backup Camera", "Apple CarPlay", "Android Auto", "Keyless Entry"],
  },
  {
    id: "car20",
    name: "Ford F-150",
    type: "Truck",
    description:
      "The Ford F-150 is a capable and versatile pickup truck with impressive towing capacity. It's perfect for those who need utility and power.",
    pricePerDay: 80,
    available: true,
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    year: 2022,
    features: ["Tow Package", "Bluetooth", "Backup Camera", "Navigation", "Bed Liner"],
  },
]

// Sample bookings data
const bookingsData: Booking[] = []

export async function getCars() {
  // Simulate fetching cars from a database
  // In a real app, you would query a database
  return carsData
}

export async function getCarById(id: string) {
  // Simulate fetching a car by ID from a database
  // In a real app, you would query a database
  return carsData.find((car) => car.id === id)
}

export async function getBookingById(id: string) {
  // Simulate fetching a booking by ID from a database
  // In a real app, you would query a database
  const booking = bookingsData.find((booking) => booking.id === id)

  if (!booking) {
    // For demo purposes, create a fake booking if not found
    const car = carsData[0]
    const startDate = new Date()
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + 3)

    return {
      id,
      carId: car.id,
      userId: "user123",
      startDate,
      endDate,
      totalPrice: car.pricePerDay * 3,
      totalDays: 3,
      status: "confirmed" as const,
      createdAt: new Date(),
      car,
    }
  }

  return {
    ...booking,
    car: carsData.find((car) => car.id === booking.carId)!,
  }
}

// Add this function after the getBookingById function

export async function getUserBookings() {
  // In a real app with Supabase, you would query the database like this:
  // const { data } = await supabase
  //   .from('bookings')
  //   .select('*, car:cars(*)')
  //   .eq('userId', 'user123')
  //   .order('createdAt', { ascending: false })

  // For demo purposes, create some sample bookings
  const sampleBookings = [
    {
      id: "booking_1",
      carId: "car1",
      userId: "user123",
      startDate: new Date(Date.now()),
      endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      totalPrice: 135,
      totalDays: 3,
      status: "confirmed" as const,
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      car: carsData.find((car) => car.id === "car1")!,
    },
    {
      id: "booking_2",
      carId: "car7",
      userId: "user123",
      startDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
      endDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      totalPrice: 270,
      totalDays: 3,
      status: "completed" as const,
      createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
      car: carsData.find((car) => car.id === "car7")!,
    },
  ]

  return sampleBookings
}
