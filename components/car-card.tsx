"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Car } from "@/lib/types"

interface CarCardProps {
  car: Car
}

export function CarCard({ car }: CarCardProps) {
  const router = useRouter()

  const handleRentNow = () => {
    router.push(`/car/${car.id}`)
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={car.image || `/placeholder.svg?height=192&width=384`}
          alt={car.name}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg">{car.name}</h3>
            <p className="text-sm text-gray-500">{car.type}</p>
          </div>
          <Badge variant={car.available ? "default" : "secondary"}>{car.available ? "Available" : "Booked"}</Badge>
        </div>

        <div className="grid grid-cols-2 gap-2 my-3 text-sm">
          <div className="flex items-center gap-1">
            <span className="text-gray-500">Seats:</span> {car.seats}
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-500">Transmission:</span> {car.transmission}
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-500">Fuel:</span> {car.fuel}
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-500">Year:</span> {car.year}
          </div>
        </div>

        <div className="mt-2">
          <p className="text-xl font-bold">
            ${car.pricePerDay} <span className="text-sm font-normal text-gray-500">/ day</span>
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleRentNow} className="w-full" disabled={!car.available}>
          {car.available ? "Rent Now" : "Not Available"}
        </Button>
      </CardFooter>
    </Card>
  )
}
