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
              <img src="/logo.png" alt="臺灣賽鴿市集標誌" className="h-10 w-10" />
            </Link>
            <Link href="/">
              <span className="font-bold text-xl">臺灣賽鴿市集</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="font-medium text-sm hover:underline underline-offset-4">
              首頁
            </Link>
            <Link href="/pigeons" className="font-medium text-sm hover:underline underline-offset-4">
              賽鴿
            </Link>
            <Link href="/auctions" className="font-medium text-sm underline underline-offset-4">
              拍賣會
            </Link>
            <Link href="/races" className="font-medium text-sm hover:underline underline-offset-4">
              比賽
            </Link>
            <Link href="/about" className="font-medium text-sm hover:underline underline-offset-4">
              關於我們
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              登入
            </Button>
            <Button>註冊</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">賽鴿拍賣會</h1>
              <p className="text-gray-500">瀏覽臺灣各地即將舉行和正在進行的拍賣會。</p>
            </div>
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="upcoming">即將舉行</TabsTrigger>
                <TabsTrigger value="ongoing">正在進行</TabsTrigger>
                <TabsTrigger value="past">已結束</TabsTrigger>
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
                        <CardDescription>主辦方: {auction.organizer}</CardDescription>
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
                        <Button className="w-full">查看詳情</Button>
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
                          正在直播
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle>{auction.title}</CardTitle>
                        <CardDescription>主辦方: {auction.organizer}</CardDescription>
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
                          加入直播拍賣
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
                          已結束
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle>{auction.title}</CardTitle>
                        <CardDescription>主辦方: {auction.organizer}</CardDescription>
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
                          查看結果
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
              <img src="/logo.png" alt="臺灣賽鴿市集標誌" className="h-8 w-8" />
              <span className="font-bold">臺灣賽鴿市集</span>
            </div>
            <p className="text-sm text-gray-500">自2010年起連接臺灣各地的賽鴿手和育種者。</p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              服務條款
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              隱私政策
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              聯絡我們
            </Link>
          </div>
          <div className="text-sm text-gray-500">© 2025 臺灣賽鴿市集。保留所有權利。</div>
        </div>
      </footer>
    </div>
  )
}

const upcomingAuctions = [
  {
    id: 1,
    title: "冠軍血統拍賣會",
    organizer: "XXX協會",
    date: "敬請期待",
    time: "敬請期待",
    location: "敬請期待",
    description: "敬請期待",
    image: "hero.png",
  },
  {
    id: 2,
    title: "高雄育種者特別拍賣會",
    organizer: "南臺灣賽鴿俱樂部",
    date: "敬請期待",
    time: "敬請期待",
    location: "敬請期待",
    description: "敬請期待。",
    image: "hero.png",
  },
  
]

const ongoingAuctions = [
  {
    id: 1,
    title: "敬請期待",
    organizer: "臺灣賽鴿聯盟",
    date: "2敬請期待",
    time: "敬請期待",
    location: "敬請期待",
    description: "敬請期待",
    image: "hero.png",
  },
]
  const pastAuctions = [
    {
      id: 1,
      title: "",
      organizer: "",
      date: "",
      time: "",
      location: "",
      description: "",
      image: "",
    },
]
