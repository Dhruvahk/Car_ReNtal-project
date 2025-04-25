import { format } from "date-fns"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Booking } from "@/lib/types"
import { CalendarDays, Clock, DollarSign } from "lucide-react"

interface BookingsListProps {
  bookings: Booking[]
}

export function BookingsList({ bookings }: BookingsListProps) {
  if (bookings.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium text-gray-900 mb-2">No bookings found</h3>
        <p className="text-gray-500 mb-6">You haven't made any car bookings yet.</p>
        <Button asChild>
          <Link href="/dashboard">Browse Cars</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {bookings.map((booking) => (
        <Card key={booking.id} className="overflow-hidden">
          <div className="sm:flex">
            <div className="relative h-48 sm:h-auto sm:w-48 flex-shrink-0">
              <Image
                src={booking.car.image || `/placeholder.svg?height=192&width=192`}
                alt={booking.car.name}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6 flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-xl">{booking.car.name}</h3>
                    <Badge>{booking.car.type}</Badge>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">Booking ID: {booking.id}</p>

                  <div className="grid gap-3">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-gray-500" />
                      <span>
                        {format(new Date(booking.startDate), "MMM d, yyyy")} -{" "}
                        {format(new Date(booking.endDate), "MMM d, yyyy")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>{booking.totalDays} days</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-4">
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-5 w-5 text-gray-700" />
                    <span className="text-2xl font-bold">{booking.totalPrice}</span>
                  </div>
                  <Badge variant={getStatusVariant(booking.status)}>{booking.status}</Badge>
                  <Button asChild size="sm">
                    <Link href={`/booking/confirmation/${booking.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  )
}

function getStatusVariant(status: string) {
  switch (status) {
    case "confirmed":
      return "default"
    case "completed":
      return "success"
    case "cancelled":
      return "destructive"
    default:
      return "secondary"
  }
}
