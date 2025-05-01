import Link from "next/link"
import { Filter, Search, SortAsc } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"

export default function PigeonsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <img src="/logo.png" alt="Taiwan Racing Pigeon Market Logo" className="h-10 w-10" />
            </Link>
            <Link href="/">
              <span className="font-bold text-xl">Taiwan Racing Pigeon Market</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="font-medium text-sm hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/pigeons" className="font-medium text-sm underline underline-offset-4">
              Pigeons
            </Link>
            <Link href="/auctions" className="font-medium text-sm hover:underline underline-offset-4">
              Auctions
            </Link>
            <Link href="/races" className="font-medium text-sm hover:underline underline-offset-4">
              Races
            </Link>
            <Link href="/about" className="font-medium text-sm hover:underline underline-offset-4">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Sign In
            </Button>
            <Button>Register</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Racing Pigeons</h1>
              <p className="text-gray-500">Browse our selection of premium racing pigeons from top Taiwan breeders.</p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search pigeons..."
                  className="w-full bg-white pl-8 md:w-[300px] lg:w-[400px]"
                />
              </div>
              <div className="flex items-center gap-2">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="h-9 gap-1">
                      <Filter className="h-4 w-4" />
                      Filter
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Filter Pigeons</SheetTitle>
                      <SheetDescription>Refine your search with the following filters.</SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-6 py-6">
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">Price Range (NT$)</h3>
                        <Slider defaultValue={[50000, 300000]} max={500000} step={10000} />
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">NT$50,000</span>
                          <span className="text-xs text-gray-500">NT$300,000</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">Age</h3>
                        <div className="grid grid-cols-2 gap-2">
                          <Button variant="outline" size="sm">
                            Young Birds
                          </Button>
                          <Button variant="outline" size="sm">
                            Yearlings
                          </Button>
                          <Button variant="outline" size="sm">
                            2-3 Years
                          </Button>
                          <Button variant="outline" size="sm">
                            4+ Years
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">Color</h3>
                        <div className="grid grid-cols-2 gap-2">
                          <Button variant="outline" size="sm">
                            Blue
                          </Button>
                          <Button variant="outline" size="sm">
                            Red
                          </Button>
                          <Button variant="outline" size="sm">
                            Black
                          </Button>
                          <Button variant="outline" size="sm">
                            Grizzle
                          </Button>
                          <Button variant="outline" size="sm">
                            Pied
                          </Button>
                          <Button variant="outline" size="sm">
                            Other
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">Gender</h3>
                        <div className="grid grid-cols-2 gap-2">
                          <Button variant="outline" size="sm">
                            Male
                          </Button>
                          <Button variant="outline" size="sm">
                            Female
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">Race Achievements</h3>
                        <div className="grid grid-cols-2 gap-2">
                          <Button variant="outline" size="sm">
                            Race Winners
                          </Button>
                          <Button variant="outline" size="sm">
                            Top 10 Placings
                          </Button>
                          <Button variant="outline" size="sm">
                            Top 100 Placings
                          </Button>
                          <Button variant="outline" size="sm">
                            No Race History
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button variant="outline">Reset</Button>
                        <Button>Apply Filters</Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
                <div className="flex items-center gap-1.5">
                  <SortAsc className="h-4 w-4" />
                  <Select defaultValue="newest">
                    <SelectTrigger className="h-9 w-[130px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="achievements">Most Achievements</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {pigeons.map((pigeon) => (
                <Card key={pigeon.id} className="overflow-hidden">
                  <img
                    src={pigeon.image || "/placeholder.svg"}
                    alt={pigeon.name}
                    className="aspect-square w-full object-cover object-center"
                  />
                  <CardHeader>
                    <CardTitle>{pigeon.name}</CardTitle>
                    <CardDescription>Ring: {pigeon.ring}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Price:</span>
                        <span className="text-sm">NT${pigeon.price.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Age:</span>
                        <span className="text-sm">{pigeon.age}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Gender:</span>
                        <span className="text-sm">{pigeon.gender}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Color:</span>
                        <span className="text-sm">{pigeon.color}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Achievements:</span>
                        <span className="text-sm">{pigeon.achievements} wins</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center gap-2 py-8">
              <Button variant="outline" size="sm">
                Previous
              </Button>
              <Button variant="outline" size="sm">
                1
              </Button>
              <Button size="sm">2</Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                4
              </Button>
              <Button variant="outline" size="sm">
                5
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t bg-gray-50">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Taiwan Racing Pigeon Market Logo" className="h-8 w-8" />
              <span className="font-bold">Taiwan Racing Pigeon Market</span>
            </div>
            <p className="text-sm text-gray-500">Connecting pigeon racers and breeders across Taiwan since 2010.</p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Contact Us
            </Link>
          </div>
          <div className="text-sm text-gray-500">© 2025 Taiwan Racing Pigeon Market. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

const pigeons = [
  {
    id: 1,
    name: "Blue Champion",
    ring: "TPF-2023-1234",
    image: "/placeholder.svg?height=300&width=300",
    price: 250000,
    age: "2 years",
    gender: "Male",
    color: "Blue Bar",
    achievements: 12,
  },
  {
    id: 2,
    name: "Speed Racer",
    ring: "TPF-2022-5678",
    image: "/placeholder.svg?height=300&width=300",
    price: 180000,
    age: "3 years",
    gender: "Female",
    color: "Blue Check",
    achievements: 8,
  },
  {
    id: 3,
    name: "Golden Wing",
    ring: "TPF-2023-9012",
    image: "/placeholder.svg?height=300&width=300",
    price: 320000,
    age: "1 year",
    gender: "Male",
    color: "Red Grizzle",
    achievements: 15,
  },
  {
    id: 4,
    name: "Silver Arrow",
    ring: "TPF-2022-3456",
    image: "/placeholder.svg?height=300&width=300",
    price: 210000,
    age: "2 years",
    gender: "Female",
    color: "Silver",
    achievements: 10,
  },
  {
    id: 5,
    name: "Thunder Bolt",
    ring: "TPF-2023-7890",
    image: "/placeholder.svg?height=300&width=300",
    price: 280000,
    age: "1 year",
    gender: "Male",
    color: "Black",
    achievements: 6,
  },
  {
    id: 6,
    name: "Sky Dancer",
    ring: "TPF-2021-2345",
    image: "/placeholder.svg?height=300&width=300",
    price: 195000,
    age: "4 years",
    gender: "Female",
    color: "Blue Pied",
    achievements: 18,
  },
  {
    id: 7,
    name: "Mountain King",
    ring: "TPF-2022-6789",
    image: "/placeholder.svg?height=300&width=300",
    price: 350000,
    age: "3 years",
    gender: "Male",
    color: "Dark Check",
    achievements: 22,
  },
  {
    id: 8,
    name: "Ocean Breeze",
    ring: "TPF-2023-1357",
    image: "/placeholder.svg?height=300&width=300",
    price: 230000,
    age: "1 year",
    gender: "Female",
    color: "Blue Bar",
    achievements: 4,
  },
]
