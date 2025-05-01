import Link from "next/link"
import { ArrowRight, Award, Calendar, DollarSign } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Taiwan Racing Pigeon Market Logo" className="h-10 w-10" />
            <span className="font-bold text-xl">Taiwan Racing Pigeon Market</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="font-medium text-sm hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/pigeons" className="font-medium text-sm hover:underline underline-offset-4">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Taiwan's Premier Racing Pigeon Marketplace
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Buy, sell, and auction champion racing pigeons. Connect with top breeders and racing enthusiasts
                    across Taiwan.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Browse Pigeons <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Upcoming Auctions
                  </Button>
                </div>
              </div>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Champion racing pigeons"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Pigeons</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover champion bloodlines and top performers from Taiwan's most respected breeders.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {featuredPigeons.map((pigeon) => (
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
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4 text-blue-500" />
                        <span>{pigeon.achievements} wins</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4 text-green-500" />
                        <span>NT${pigeon.price.toLocaleString()}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Button variant="outline" size="lg">
                View All Pigeons
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upcoming Events</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay updated with the latest auctions, races, and exhibitions across Taiwan.
                </p>
              </div>
            </div>
            <Tabs defaultValue="auctions" className="mx-auto max-w-4xl py-12">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="auctions">Auctions</TabsTrigger>
                <TabsTrigger value="races">Races</TabsTrigger>
                <TabsTrigger value="exhibitions">Exhibitions</TabsTrigger>
              </TabsList>
              <TabsContent value="auctions" className="pt-6">
                <div className="grid gap-6">
                  {upcomingAuctions.map((auction) => (
                    <Card key={auction.id}>
                      <CardHeader>
                        <CardTitle>{auction.title}</CardTitle>
                        <CardDescription>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{auction.date}</span>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500">{auction.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="races" className="pt-6">
                <div className="grid gap-6">
                  {upcomingRaces.map((race) => (
                    <Card key={race.id}>
                      <CardHeader>
                        <CardTitle>{race.title}</CardTitle>
                        <CardDescription>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{race.date}</span>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500">{race.description}</p>
                        <p className="mt-2 text-sm font-medium">Distance: {race.distance}km</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="exhibitions" className="pt-6">
                <div className="grid gap-6">
                  {upcomingExhibitions.map((exhibition) => (
                    <Card key={exhibition.id}>
                      <CardHeader>
                        <CardTitle>{exhibition.title}</CardTitle>
                        <CardDescription>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{exhibition.date}</span>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500">{exhibition.description}</p>
                        <p className="mt-2 text-sm font-medium">Location: {exhibition.location}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Why Choose Us</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Taiwan's Most Trusted Racing Pigeon Marketplace
                </h2>
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      1
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Verified Breeders</h3>
                      <p className="text-sm text-gray-500">
                        All breeders on our platform are verified and have proven track records in the racing pigeon
                        community.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      2
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Secure Transactions</h3>
                      <p className="text-sm text-gray-500">
                        Our platform ensures secure transactions with escrow services and buyer protection policies.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      3
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Comprehensive Pedigrees</h3>
                      <p className="text-sm text-gray-500">
                        Access detailed pedigree information and racing history for all pigeons listed on our platform.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Taiwan Racing Pigeon Market features"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>
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

const featuredPigeons = [
  {
    id: 1,
    name: "Blue Champion",
    ring: "TPF-2023-1234",
    image: "/placeholder.svg?height=300&width=300",
    achievements: 12,
    price: 250000,
  },
  {
    id: 2,
    name: "Speed Racer",
    ring: "TPF-2022-5678",
    image: "/placeholder.svg?height=300&width=300",
    achievements: 8,
    price: 180000,
  },
  {
    id: 3,
    name: "Golden Wing",
    ring: "TPF-2023-9012",
    image: "/placeholder.svg?height=300&width=300",
    achievements: 15,
    price: 320000,
  },
]

const upcomingAuctions = [
  {
    id: 1,
    title: "Taipei Champion Bloodlines Auction",
    date: "May 15, 2025",
    description: "Exclusive auction featuring offspring from Taiwan's top racing champions of the last decade.",
  },
  {
    id: 2,
    title: "Kaohsiung Breeder's Special",
    date: "June 2, 2025",
    description: "Southern Taiwan's largest pigeon auction with over 100 premium racing pigeons from top breeders.",
  },
]

const upcomingRaces = [
  {
    id: 1,
    title: "Taiwan North Coast Classic",
    date: "May 20, 2025",
    description: "Annual race along Taiwan's scenic northern coastline.",
    distance: 350,
  },
  {
    id: 2,
    title: "Cross-Island Challenge",
    date: "June 10, 2025",
    description: "Prestigious race crossing from east to west Taiwan through challenging mountain terrain.",
    distance: 420,
  },
]

const upcomingExhibitions = [
  {
    id: 1,
    title: "Taipei International Pigeon Expo",
    date: "July 5-7, 2025",
    description: "Taiwan's largest pigeon exhibition featuring breeders from across Asia.",
    location: "Taipei Exhibition Center",
  },
  {
    id: 2,
    title: "Taichung Breeding Techniques Showcase",
    date: "August 12, 2025",
    description: "Educational exhibition focused on advanced breeding techniques and pigeon health.",
    location: "Taichung Convention Hall",
  },
]
