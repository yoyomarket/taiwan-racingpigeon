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
            <Link href="/pigeons" className="font-medium text-sm underline underline-offset-4">
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
        <div className="container py-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">賽鴿</h1>
              <p className="text-gray-500">瀏覽來自臺灣頂級育種者的優質賽鴿。</p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="搜尋賽鴿..."
                  className="w-full bg-white pl-8 md:w-[300px] lg:w-[400px]"
                />
              </div>
              <div className="flex items-center gap-2">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="h-9 gap-1">
                      <Filter className="h-4 w-4" />
                      篩選
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>篩選賽鴿</SheetTitle>
                      <SheetDescription>使用以下篩選條件精確搜尋。</SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-6 py-6">
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">價格範圍 (NT$)</h3>
                        <Slider defaultValue={[50000, 300000]} max={500000} step={10000} />
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">NT$50,000</span>
                          <span className="text-xs text-gray-500">NT$300,000</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">年齡</h3>
                        <div className="grid grid-cols-2 gap-2">
                          <Button variant="outline" size="sm">
                            幼鴿
                          </Button>
                          <Button variant="outline" size="sm">
                            一歲鴿
                          </Button>
                          <Button variant="outline" size="sm">
                            2-3歲
                          </Button>
                          <Button variant="outline" size="sm">
                            4歲以上
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">顏色</h3>
                        <div className="grid grid-cols-2 gap-2">
                          <Button variant="outline" size="sm">
                            藍色
                          </Button>
                          <Button variant="outline" size="sm">
                            紅色
                          </Button>
                          <Button variant="outline" size="sm">
                            黑色
                          </Button>
                          <Button variant="outline" size="sm">
                            灰色
                          </Button>
                          <Button variant="outline" size="sm">
                            花色
                          </Button>
                          <Button variant="outline" size="sm">
                            其他
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">性別</h3>
                        <div className="grid grid-cols-2 gap-2">
                          <Button variant="outline" size="sm">
                            公鴿
                          </Button>
                          <Button variant="outline" size="sm">
                            母鴿
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">比賽成績</h3>
                        <div className="grid grid-cols-2 gap-2">
                          <Button variant="outline" size="sm">
                            比賽冠軍
                          </Button>
                          <Button variant="outline" size="sm">
                            前10名
                          </Button>
                          <Button variant="outline" size="sm">
                            前100名
                          </Button>
                          <Button variant="outline" size="sm">
                            無比賽記錄
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button variant="outline">重置</Button>
                        <Button>應用篩選</Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
                <div className="flex items-center gap-1.5">
                  <SortAsc className="h-4 w-4" />
                  <Select defaultValue="newest">
                    <SelectTrigger className="h-9 w-[130px]">
                      <SelectValue placeholder="排序方式" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">最新</SelectItem>
                      <SelectItem value="price-high">價格: 高至低</SelectItem>
                      <SelectItem value="price-low">價格: 低至高</SelectItem>
                      <SelectItem value="achievements">最多成就</SelectItem>
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
                    <CardDescription>環號: {pigeon.ring}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">價格:</span>
                        <span className="text-sm">NT${pigeon.price.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">年齡:</span>
                        <span className="text-sm">{pigeon.age}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">性別:</span>
                        <span className="text-sm">{pigeon.gender}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">顏色:</span>
                        <span className="text-sm">{pigeon.color}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">成就:</span>
                        <span className="text-sm">{pigeon.achievements} 勝</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">查看詳情</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center gap-2 py-8">
              <Button variant="outline" size="sm">
                上一頁
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
                下一頁
              </Button>
            </div>
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

const pigeons = [
  {
    id: 1,
    name: "藍冠軍",
    ring: "TPF-2023-1234",
    image: "/placeholder.svg?height=300&width=300",
    price: 250000,
    age: "2歲",
    gender: "公鴿",
    color: "藍條紋",
    achievements: 12,
  },
  {
    id: 2,
    name: "速度賽手",
    ring: "TPF-2022-5678",
    image: "/placeholder.svg?height=300&width=300",
    price: 180000,
    age: "3歲",
    gender: "母鴿",
    color: "藍格",
    achievements: 8,
  },
  {
    id: 3,
    name: "金翼",
    ring: "TPF-2023-9012",
    image: "/placeholder.svg?height=300&width=300",
    price: 320000,
    age: "1歲",
    gender: "公鴿",
    color: "紅灰",
    achievements: 15,
  },
  {
    id: 4,
    name: "銀箭",
    ring: "TPF-2022-3456",
    image: "/placeholder.svg?height=300&width=300",
    price: 210000,
    age: "2歲",
    gender: "母鴿",
    color: "銀色",
    achievements: 10,
  },
  {
    id: 5,
    name: "雷霆",
    ring: "TPF-2023-7890",
    image: "/placeholder.svg?height=300&width=300",
    price: 280000,
    age: "1歲",
    gender: "公鴿",
    color: "黑色",
    achievements: 6,
  },
  {
    id: 6,
    name: "天空舞者",
    ring: "TPF-2021-2345",
    image: "/placeholder.svg?height=300&width=300",
    price: 195000,
    age: "4歲",
    gender: "母鴿",
    color: "藍花",
    achievements: 18,
  },
  {
    id: 7,
    name: "山之王",
    ring: "TPF-2022-6789",
    image: "/placeholder.svg?height=300&width=300",
    price: 350000,
    age: "3歲",
    gender: "公鴿",
    color: "深格",
    achievements: 22,
  },
  {
    id: 8,
    name: "海洋微風",
    ring: "TPF-2023-1357",
    image: "/placeholder.svg?height=300&width=300",
    price: 230000,
    age: "1歲",
    gender: "母鴿",
    color: "藍條紋",
    achievements: 4,
  },
]
