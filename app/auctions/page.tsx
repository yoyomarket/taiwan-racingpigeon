import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AuctionsPage() {
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
            <Link href="/pigeons" className="font-medium text-sm hover:underline underline-offset-4">
              Pigeons
            </Link>
            <Link href="/auctions" className="font-medium text-sm underline underline-offset-4">
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
              <h1 className="text-3xl font-bold">Pigeon Auctions</h1>
              <p className="text-gray-500">Browse upcoming and ongoing auctions across Taiwan.</p>
            </div>
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
                <TabsTrigger value="past">Past</TabsTrigger>
              </TabsList>
              <TabsContent value="upcoming" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {upcomingAuctions.map((auction) => (
                    <Card key={auction.id} className="overflow-hidden">
                      <img
                        src={auction.image || "/placeholder.svg"}
                        alt={auction.title}
                        className="h-48 w-full object-cover"
                      />
                      <CardHeader>
                        <CardTitle>{auction.title}</CardTitle>
                        <CardDescription>Organized by {auction.organizer}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{auction.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{auction.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{auction.location}</span>
                          </div>
                          <p className="text-sm text-gray-500 pt-2">{auction.description}</p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">View Details</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="ongoing" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {ongoingAuctions.map((auction) => (
                    <Card key={auction.id} className="overflow-hidden">
                      <div className="relative">
                        <img
                          src={auction.image || "/placeholder.svg"}
                          alt={auction.title}
                          className="h-48 w-full object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                          Live Now
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle>{auction.title}</CardTitle>
                        <CardDescription>Organized by {auction.organizer}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{auction.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{auction.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{auction.location}</span>
                          </div>
                          <p className="text-sm text-gray-500 pt-2">{auction.description}</p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" variant="destructive">
                          Join Live Auction
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="past" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {pastAuctions.map((auction) => (
                    <Card key={auction.id} className="overflow-hidden">
                      <div className="relative">
                        <img
                          src={auction.image || "/placeholder.svg"}
                          alt={auction.title}
                          className="h-48 w-full object-cover opacity-80"
                        />
                        <div className="absolute top-2 right-2 bg-gray-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                          Completed
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle>{auction.title}</CardTitle>
                        <CardDescription>Organized by {auction.organizer}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{auction.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{auction.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{auction.location}</span>
                          </div>
                          <p className="text-sm text-gray-500 pt-2">{auction.description}</p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" variant="outline">
                          View Results
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
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

const upcomingAuctions = [
  {
    id: 1,
    title: "Taipei Champion Bloodlines Auction",
    organizer: "Taipei Pigeon Racing Association",
    date: "May 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Taipei Exhibition Center, Hall 3",
    description: "Exclusive auction featuring offspring from Taiwan's top racing champions of the last decade.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Kaohsiung Breeder's Special",
    organizer: "Southern Taiwan Pigeon Club",
    date: "June 2, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Kaohsiung Convention Center",
    description: "Southern Taiwan's largest pigeon auction with over 100 premium racing pigeons from top breeders.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "International Bloodlines Showcase",
    organizer: "Taiwan International Pigeon Association",
    date: "June 18, 2025",
    time: "11:00 AM - 5:00 PM",
    location: "Taichung Exhibition Hall",
    description: "Featuring imported bloodlines from Belgium, Netherlands, and Germany alongside Taiwan's finest.",
    image: "/placeholder.svg?height=200&width=400",
  },
]

const ongoingAuctions = [
  {
    id: 1,
    title: "Spring Champion Auction",
    organizer: "Taiwan Racing Pigeon Federation",
    date: "April 29, 2025",
    time: "Now - 8:00 PM",
    location: "Online & Taipei Pigeon Center",
    description: "Live auction featuring this season's top performers and their offspring.",
    image: "/placeholder.svg?height=200&width=400",
  },
]

const pastAuctions = [
  {
    id: 1,
    title: "Winter Elite Auction",
    organizer: "Taiwan Racing Pigeon Federation",
    date: "February 12, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Taipei Exhibition Center",
    description: "Featured the top winter racing champions and their offspring.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "New Year Special Auction",
    organizer: "Taiwan Pigeon Breeders Association",
    date: "January 5, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Taichung Convention Center",
    description: "New year special featuring promising young birds for the upcoming racing season.",
    image: "/placeholder.svg?height=200&width=400",
  },
]
