"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export function SearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [query, setQuery] = useState(searchParams.get("query") || "")
  const [carType, setCarType] = useState(searchParams.get("type") || "")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams()
    if (query) params.set("query", query)
    if (carType) params.set("type", carType)

    router.push(`/dashboard?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <Input
          placeholder="Search by car model, brand..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full"
        />
      </div>

      <Select value={carType} onValueChange={setCarType}>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Car Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="sedan">Sedan</SelectItem>
          <SelectItem value="suv">SUV</SelectItem>
          <SelectItem value="luxury">Luxury</SelectItem>
          <SelectItem value="sports">Sports</SelectItem>
          <SelectItem value="compact">Compact</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit">
        <Search className="mr-2 h-4 w-4" />
        Search
      </Button>
    </form>
  )
}
