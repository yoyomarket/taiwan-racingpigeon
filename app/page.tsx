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
            <img src="/logo.png" alt="臺灣賽鴿市集標誌" className="h-10 w-10" />
            <span className="font-bold text-xl">臺灣賽鴿市集</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="font-medium text-sm hover:underline underline-offset-4">
              首頁
            </Link>
            <Link href="/pigeons" className="font-medium text-sm hover:underline underline-offset-4">
              賽鴿
            </Link>
            <Link href="/auctions" className="font-medium text-sm hover:underline underline-offset-4">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    臺灣最誠信賽鴿交易平台
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    拍賣具有血統書、比賽證明、飛翔紀錄、入賞成績的賽鴿
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    瀏覽賽鴿 <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    即將舉行的拍賣會
                  </Button>
                </div>
              </div>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="冠軍賽鴿"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">精選賽鴿</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  發現來自臺灣各地鴿友所提供之精選賽鴿、給予再次飛翔的機會
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
                    <CardDescription>環號: {pigeon.ring}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4 text-blue-500" />
                        <span>{pigeon.achievements} 勝</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4 text-green-500" />
                        <span>NT${pigeon.price.toLocaleString()}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">查看詳情</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Button variant="outline" size="lg">
                查看所有賽鴿
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">即將舉行的活動</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  了解臺灣各地最新的拍賣會、比賽和展覽。
                </p>
              </div>
            </div>
            <Tabs defaultValue="auctions" className="mx-auto max-w-4xl py-12">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="auctions">拍賣會</TabsTrigger>
                <TabsTrigger value="races">比賽</TabsTrigger>
                <TabsTrigger value="exhibitions">展覽</TabsTrigger>
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
                          查看詳情
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
                        <p className="mt-2 text-sm font-medium">距離: {race.distance}公里</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          查看詳情
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
                        <p className="mt-2 text-sm font-medium">地點: {exhibition.location}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          查看詳情
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
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">為何選擇我們</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">臺灣最值得信賴的賽鴿交易平台</h2>
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      1
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">經過驗證的育種者</h3>
                      <p className="text-sm text-gray-500">
                        我們平台上的所有育種者都經過驗證，並在賽鴿社區中擁有良好的記錄。
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      2
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">安全交易</h3>
                      <p className="text-sm text-gray-500">我們的平台通過託管服務和買家保護政策確保交易安全。</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      3
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">完整的血統資料</h3>
                      <p className="text-sm text-gray-500">獲取我們平台上所有賽鴿的詳細血統資料和比賽歷史。</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="臺灣賽鴿市場特色"
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

const featuredPigeons = [
  {
    id: 1,
    name: "藍冠軍",
    ring: "TPF-2023-1234",
    image: "/placeholder.svg?height=300&width=300",
    achievements: 12,
    price: 250000,
  },
  {
    id: 2,
    name: "速度賽手",
    ring: "TPF-2022-5678",
    image: "/placeholder.svg?height=300&width=300",
    achievements: 8,
    price: 180000,
  },
  {
    id: 3,
    name: "金翼",
    ring: "TPF-2023-9012",
    image: "/placeholder.svg?height=300&width=300",
    achievements: 15,
    price: 320000,
  },
]

const upcomingAuctions = [
  {
    id: 1,
    title: "台北冠軍血統拍賣會",
    date: "2025年5月15日",
    description: "獨家拍賣臺灣過去十年頂級賽鴿冠軍的後代。",
  },
  {
    id: 2,
    title: "高雄育種者特別拍賣會",
    date: "2025年6月2日",
    description: "南臺灣最大的賽鴿拍賣會，來自頂級育種者的100多隻優質賽鴿。",
  },
]

const upcomingRaces = [
  {
    id: 1,
    title: "臺灣北海岸經典賽",
    date: "2025年5月20日",
    description: "沿著臺灣風景優美的北部海岸線的年度比賽。",
    distance: 350,
  },
  {
    id: 2,
    title: "橫貫島嶼挑戰賽",
    date: "2025年6月10日",
    description: "穿越臺灣東西部具有挑戰性的山地地形的著名比賽。",
    distance: 420,
  },
]

const upcomingExhibitions = [
  {
    id: 1,
    title: "台北國際賽鴿博覽會",
    date: "2025年7月5-7日",
    description: "臺灣最大的賽鴿展覽，匯集來自亞洲各地的育種者。",
    location: "台北展覽中心",
  },
  {
    id: 2,
    title: "台中育種技術展示會",
    date: "2025年8月12日",
    description: "專注於先進育種技術和賽鴿健康的教育展覽。",
    location: "台中會議廳",
  },
]
