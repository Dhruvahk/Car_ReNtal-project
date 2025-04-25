"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import type { BookingFormData } from "./types"

// Simulated database operations
// In a real application, these would interact with a database

export async function loginUser(email: string, password: string) {
  // Simulate authentication
  // In a real app, you would validate credentials against a database

  if (email && password) {
    // Set a cookie to simulate authentication
    cookies().set("user_session", JSON.stringify({ id: "user123", email }), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    })

    return { success: true }
  }

  return { success: false, error: "Invalid credentials" }
}

export async function logoutUser() {
  cookies().delete("user_session")
  return { success: true }
}

export async function createBooking(data: BookingFormData) {
  try {
    // Generate a booking ID
    const bookingId = `booking_${Date.now()}`

    // Calculate total days
    const diffTime = Math.abs(data.endDate.getTime() - data.startDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1

    // In a real app with Supabase, you would insert into the database like this:
    // const { data: bookingData, error } = await supabase
    //   .from('bookings')
    //   .insert({
    //     id: bookingId,
    //     car_id: data.carId,
    //     user_id: 'user123', // Get from authenticated user
    //     start_date: data.startDate,
    //     end_date: data.endDate,
    //     total_price: data.totalPrice,
    //     total_days: diffDays,
    //     status: 'confirmed',
    //     created_at: new Date()
    //   })
    //   .select()
    //
    // if (error) throw error;

    // For demo purposes, we'll just return success
    revalidatePath("/dashboard")
    revalidatePath("/bookings")

    return { success: true, bookingId }
  } catch (error) {
    console.error("Error creating booking:", error)
    return { success: false, error: "Failed to create booking" }
  }
}
