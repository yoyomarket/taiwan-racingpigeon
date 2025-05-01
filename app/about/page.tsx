import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
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
            <Link href="/auctions" className="font-medium text-sm hover:underline underline-offset-4">
              Auctions
            </Link>
            <Link href="/races" className="font-medium text-sm hover:underline underline-offset-4">
              Races
            </Link>
            <Link href="/about" className="font-medium text-sm underline underline-offset-4">
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
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Taiwan Racing Pigeon Market</h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Connecting pigeon racers and breeders across Taiwan since 2010.
                  </p>
                </div>
                <p className="text-gray-500">
                  Taiwan Racing Pigeon Market was founded with a simple mission: to create a trusted platform where
                  pigeon enthusiasts could connect, trade, and share their passion for racing pigeons. Over the years,
                  we've grown to become Taiwan's premier marketplace for racing pigeons, serving thousands of breeders
                  and racers across the country.
                </p>
              </div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Taiwan Racing Pigeon Market team"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="our-story" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="our-story">Our Story</TabsTrigger>
                <TabsTrigger value="mission">Our Mission</TabsTrigger>
                <TabsTrigger value="team">Our Team</TabsTrigger>
              </TabsList>
              <TabsContent value="our-story" className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Our Story</h2>
                  <p className="text-gray-500">
                    Taiwan has a rich history of pigeon racing dating back generations. In 2010, a group of passionate
                    pigeon racers recognized the need for a modern, transparent marketplace where enthusiasts could
                    connect and trade.
                  </p>
                  <p className="text-gray-500">
                    What began as a small online forum quickly grew into Taiwan's largest dedicated racing pigeon
                    marketplace. Today, we host hundreds of auctions annually and facilitate thousands of private sales
                    between breeders and racers.
                  </p>
                  <p className="text-gray-500">
                    Our platform has helped elevate Taiwan's racing pigeon community to international recognition, with
                    birds from our marketplace competing and winning in prestigious races across Asia and beyond.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>2010</CardTitle>
                      <CardDescription>Foundation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        Taiwan Racing Pigeon Market was founded as an online forum for pigeon enthusiasts.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>2015</CardTitle>
                      <CardDescription>Expansion</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        Launched our first physical auction center in Taipei and expanded online services.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>2020</CardTitle>
                      <CardDescription>Innovation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        Introduced live online auctions and comprehensive pedigree tracking system.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="mission" className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                  <p className="text-gray-500">
                    At Taiwan Racing Pigeon Market, our mission is to foster a thriving, transparent, and ethical racing
                    pigeon community in Taiwan and beyond. We are committed to:
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Trust & Transparency</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        We verify all breeders and provide comprehensive pedigree information for every pigeon listed on
                        our platform.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Education & Community</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        We host regular workshops, seminars, and community events to share knowledge and best practices
                        in pigeon racing and breeding.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Innovation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        We continuously improve our platform with new technologies to enhance the experience for
                        breeders and buyers alike.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Animal Welfare</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        We promote ethical breeding and racing practices, ensuring the health and wellbeing of all
                        pigeons in our community.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Global Connections</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        We facilitate international exchanges and partnerships to elevate Taiwan's racing pigeon
                        community on the global stage.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Heritage Preservation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        We document and preserve Taiwan's unique pigeon racing traditions and bloodlines for future
                        generations.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="team" className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Our Team</h2>
                  <p className="text-gray-500">
                    Our dedicated team combines decades of experience in pigeon racing with expertise in technology,
                    business, and customer service.
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Chen Wei-Ling"
                      className="aspect-square w-full object-cover"
                    />
                    <CardHeader>
                      <CardTitle>Chen Wei-Ling</CardTitle>
                      <CardDescription>Founder & CEO</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        A third-generation pigeon racer with over 30 years of experience. Wei-Ling founded Taiwan Racing
                        Pigeon Market to modernize the industry.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Lin Tzu-Wei"
                      className="aspect-square w-full object-cover"
                    />
                    <CardHeader>
                      <CardTitle>Lin Tzu-Wei</CardTitle>
                      <CardDescription>Chief Operations Officer</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        Tzu-Wei oversees all marketplace operations and has been instrumental in developing our
                        verification and quality control processes.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Huang Mei-Hua"
                      className="aspect-square w-full object-cover"
                    />
                    <CardHeader>
                      <CardTitle>Huang Mei-Hua</CardTitle>
                      <CardDescription>Veterinary Director</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        Dr. Huang leads our health certification program and provides expert guidance on pigeon health
                        and welfare to our community.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Chang Yi-Chen"
                      className="aspect-square w-full object-cover"
                    />
                    <CardHeader>
                      <CardTitle>Chang Yi-Chen</CardTitle>
                      <CardDescription>Technology Director</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        Yi-Chen leads our technology team, developing innovative solutions for our online marketplace
                        and auction systems.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Wu Jia-Ling"
                      className="aspect-square w-full object-cover"
                    />
                    <CardHeader>
                      <CardTitle>Wu Jia-Ling</CardTitle>
                      <CardDescription>Community Manager</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        Jia-Ling organizes our community events, educational programs, and maintains relationships with
                        pigeon racing clubs across Taiwan.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Lee Tsung-Dao"
                      className="aspect-square w-full object-cover"
                    />
                    <CardHeader>
                      <CardTitle>Lee Tsung-Dao</CardTitle>
                      <CardDescription>International Relations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        Tsung-Dao manages our international partnerships and helps Taiwan's breeders connect with the
                        global racing pigeon community.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions or need assistance? We're here to help.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>Fill out the form and we'll get back to you shortly.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          First name
                        </label>
                        <input
                          id="first-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Last name
                        </label>
                        <input
                          id="last-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <Button className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Visit Us</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Headquarters</p>
                        <p className="text-sm text-gray-500">123 Pigeon Lane, Taipei City, Taiwan</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Auction Center</p>
                        <p className="text-sm text-gray-500">456 Racing Road, Taichung City, Taiwan</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-gray-500" />
                      <p className="text-sm">+886 2 1234 5678</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-gray-500" />
                      <p className="text-sm">info@taiwanpigeonmarket.com</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Business Hours</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">Monday - Friday</p>
                      <p className="text-sm">9:00 AM - 6:00 PM</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">Saturday</p>
                      <p className="text-sm">10:00 AM - 4:00 PM</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">Sunday</p>
                      <p className="text-sm">Closed</p>
                    </div>
                  </CardContent>
                </Card>
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
