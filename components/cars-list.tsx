import { getCars } from "@/lib/data"
import { CarCard } from "@/components/car-card"

export async function CarsList() {
  const cars = await getCars()

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Available Cars</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  )
}
