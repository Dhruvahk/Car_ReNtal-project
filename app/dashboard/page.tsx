import { Suspense } from "react"
import { CarsList } from "@/components/cars-list"
import { SearchBar } from "@/components/search-bar"
import { UserNav } from "@/components/user-nav"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">DriveEasy</h1>
          <UserNav />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Ride</h2>
          <SearchBar />
        </div>

        <Suspense fallback={<div>Loading cars...</div>}>
          <CarsList />
        </Suspense>
      </main>
    </div>
  )
}
