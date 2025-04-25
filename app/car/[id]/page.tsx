import { getCarById } from "@/lib/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { UserNav } from "@/components/user-nav"
import { BookingForm } from "@/components/booking-form"

interface CarDetailsPageProps {
  params: {
    id: string
  }
}

export default async function CarDetailsPage({ params }: CarDetailsPageProps) {
  const car = await getCarById(params.id)

  if (!car) {
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <a href="/dashboard" className="text-blue-600 hover:underline">
            &larr; Back to cars
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="relative h-64 sm:h-80 w-full">
                <Image
                  src={car.image || `/placeholder.svg?height=320&width=640`}
                  alt={car.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-3xl font-bold">{car.name}</h1>
                    <p className="text-gray-500">{car.type}</p>
                  </div>
                  <Badge variant={car.available ? "default" : "secondary"}>
                    {car.available ? "Available" : "Booked"}
                  </Badge>
                </div>

                <Separator className="my-6" />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Seats</p>
                    <p className="font-medium">{car.seats}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Transmission</p>
                    <p className="font-medium">{car.transmission}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Fuel</p>
                    <p className="font-medium">{car.fuel}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Year</p>
                    <p className="font-medium">{car.year}</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <div>
                  <h2 className="text-xl font-semibold mb-3">Description</h2>
                  <p className="text-gray-700">{car.description}</p>
                </div>

                <Separator className="my-6" />

                <div>
                  <h2 className="text-xl font-semibold mb-3">Features</h2>
                  <ul className="grid grid-cols-2 gap-2">
                    {car.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-green-500"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-6">
              <div className="mb-4">
                <p className="text-3xl font-bold">
                  ${car.pricePerDay} <span className="text-sm font-normal text-gray-500">/ day</span>
                </p>
              </div>

              <BookingForm car={car} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
