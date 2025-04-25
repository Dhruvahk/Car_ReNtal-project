import { getUserBookings } from "@/lib/data"
import { UserNav } from "@/components/user-nav"
import { BookingsList } from "@/components/bookings-list"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function BookingsPage() {
  const bookings = await getUserBookings()

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">DriveEasy</h1>
          <UserNav />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">My Bookings</h2>
          <Button asChild variant="outline">
            <Link href="/dashboard">Browse Cars</Link>
          </Button>
        </div>

        <BookingsList bookings={bookings} />
      </main>
    </div>
  )
}
