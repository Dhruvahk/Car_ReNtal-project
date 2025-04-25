import { getBookingById } from "@/lib/data"
import { notFound } from "next/navigation"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { UserNav } from "@/components/user-nav"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

interface BookingConfirmationPageProps {
  params: {
    id: string
  }
}

export default async function BookingConfirmationPage({ params }: BookingConfirmationPageProps) {
  const booking = await getBookingById(params.id)

  if (!booking) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">DriveEasy</h1>
          <UserNav />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Booking Confirmed!</h1>
          <p className="text-gray-600 mt-2">Your booking has been successfully confirmed.</p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Booking Details</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Booking ID</span>
                <span className="font-medium">{booking.id}</span>
              </div>

              <Separator />

              <div className="flex justify-between">
                <span className="text-gray-600">Car</span>
                <span className="font-medium">{booking.car.name}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Pickup Date</span>
                <span className="font-medium">{format(new Date(booking.startDate), "PPP")}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Return Date</span>
                <span className="font-medium">{format(new Date(booking.endDate), "PPP")}</span>
              </div>

              <Separator />

              <div className="flex justify-between">
                <span className="text-gray-600">Total Days</span>
                <span className="font-medium">{booking.totalDays}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Price per Day</span>
                <span className="font-medium">${booking.car.pricePerDay}</span>
              </div>

              <Separator />

              <div className="flex justify-between text-lg font-bold">
                <span>Total Amount</span>
                <span>${booking.totalPrice}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/dashboard">Browse More Cars</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/bookings">View My Bookings</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
