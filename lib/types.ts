export interface Car {
  id: string
  name: string
  type: string
  image?: string
  description: string
  pricePerDay: number
  available: boolean
  seats: number
  transmission: string
  fuel: string
  year: number
  features: string[]
}

export interface Booking {
  id: string
  carId: string
  userId: string
  startDate: Date
  endDate: Date
  totalPrice: number
  totalDays: number
  status: "confirmed" | "cancelled" | "completed"
  createdAt: Date
  car: Car
}

export interface User {
  id: string
  email: string
  name: string
}

export interface BookingFormData {
  carId: string
  startDate: Date
  endDate: Date
  totalPrice: number
}
