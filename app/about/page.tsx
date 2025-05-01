'use client';
import React from 'react';
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
            <Link href="/auctions" className="font-medium text-sm hover:underline underline-offset-4">
              拍賣會
            </Link>
            <Link href="/races" className="font-medium text-sm hover:underline underline-offset-4">
              比賽
            </Link>
            <Link href="/about" className="font-medium text-sm underline underline-offset-4">
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
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">關於臺灣賽鴿市集</h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">2024年創立最公開的平台，促進鴿會成長也讓鴿友不再受騙。</p>
                </div>
                <p className="text-gray-500">
                  臺灣賽鴿市集成立的使命很簡單：創建一個值得信賴的平台，讓賽鴿愛好者能夠連接、交易並分享他們對賽鴿的熱情。我們目標成為臺灣首屈一指的賽鴿交易平台，為全國的鴿友提供服務。
                </p>
              </div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="臺灣賽鴿市集團隊"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="our-story" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="our-story">我們的故事</TabsTrigger>
                <TabsTrigger value="mission">我們的使命</TabsTrigger>
                <TabsTrigger value="team">我們的團隊</TabsTrigger>
              </TabsList>
              <TabsContent value="our-story" className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">我們的故事</h2>
                  <p className="text-gray-500">
                    臺灣有著豐富的賽鴿歷史，可追溯到幾代人之前。一群熱情的賽鴿手認識到需要一個現代化、透明且公開的市場，讓鴿友能夠更有保障。
                  </p>
                  <p className="text-gray-500">
                    最初只是一個小小社群、臉書分享，如今我們立志已發展成為臺灣最大的專業賽鴿交易市場。甚至希望能夠像其他前輩舉辦拍賣會，並促成賽鴿界的產業推進及和諧。
                  </p>
                  <p className="text-gray-500">
                    希望我們的平台幫助臺灣的賽鴿獲得認可，我們市場上的鴿子在亞洲及其他地區的著名比賽中競爭並獲勝。
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>2010</CardTitle>
                      <CardDescription>成立</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">臺灣賽鴿市集成立為賽鴿愛好者的在線論壇。</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>2015</CardTitle>
                      <CardDescription>擴展</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">目前尚未設置拍賣中心，正在努力中。</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>2020</CardTitle>
                      <CardDescription>創新</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">引入只具有飛翔證明、各大拍賣網站血統書賽鴿。</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="mission" className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">我們的使命</h2>
                  <p className="text-gray-500">
                    在臺灣賽鴿市集，我們的使命是在臺灣及其他地區培養一個繁榮、透明和公平的賽鴿圈。
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>信任與透明</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        我們驗證所有賽鴿，並為我們平台上列出的每隻賽鴿提供全面的血統資料及飛翔證明。</p>

                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>全球連接</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        我們促進國際交流和合作，提升臺灣賽鴿社區在全球舞台上的地位。
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>傳統保存</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">我們記錄和保存臺灣獨特的賽鴿傳統和血統，為後代保留。</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="team" className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">我們的團隊</h2>
                  <p className="text-gray-500">
                    我們專業的團隊結合各地鴿友的賽鴿經驗和技術及客戶服務方面的專業知識。
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="黃儒鴻"
                      className="aspect-square w-full object-cover"
                    />
                    <CardHeader>
                      <CardTitle>黃儒鴻</CardTitle>
                      <CardDescription>創始人 & 執行長</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        第二代賽鴿手，儒鴻創立臺灣賽鴿市集，旨在使行業公開透明及現代化。
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Yos"
                      className="aspect-square w-full object-cover"
                    />
                    <CardHeader>
                      <CardTitle>Yos</CardTitle>
                      <CardDescription>營運總監</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        Yos負責所有市場運營，在開發我們的驗證和質量控制流程方面發揮了重要作用。
                      </p>
                    </CardContent>
                
                  
                      
                  </Card>
                  <Card>
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="peter"
                      className="aspect-square w-full object-cover"
                    />
                    <CardHeader>
                      <CardTitle>peter</CardTitle>
                      <CardDescription>技術總監</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        Peter領導我們的技術團隊，為我們的在線市場和拍賣系統開發創新解決方案。
                      </p>
                    </CardContent>
                  
                  </Card>
                  <Card>
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="XXX"
                      className="aspect-square w-full object-cover"
                    />
                    <CardHeader>
                      <CardTitle>XXX</CardTitle>
                      <CardDescription>國際關係</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        XXX管理我們的國際合作夥伴關係，幫助臺灣的育種者與全球賽鴿社區連接。
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">聯絡我們</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  有問題或需要協助？我們隨時為您提供幫助。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>聯絡我們</CardTitle>
                  <CardDescription>填寫表格，我們將盡快回覆您。</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          名字
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
                          姓氏
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
                        電子郵件
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
                        訊息
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <Button className="w-full">發送訊息</Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>訪問我們</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <p className="font-medium">總部</p>
                        <p className="text-sm text-gray-500">臉書搜尋臺灣賽鴿市集</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <p className="font-medium">拍賣中心</p>
                        <p className="text-sm text-gray-500">臺灣賽鴿路456號</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>聯絡資訊</CardTitle>
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
                    <CardTitle>營業時間</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">週一至週五</p>
                      <p className="text-sm">上午9:00 - 下午6:00</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">週六</p>
                      <p className="text-sm">上午10:00 - 下午4:00</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">週日</p>
                      <p className="text-sm">休息</p>
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
              <img src="/logo.png" alt="臺灣賽鴿市集標誌" className="h-8 w-8" />
              <span className="font-bold">臺灣賽鴿市集</span>
            </div>
            <p className="text-sm text-gray-500">自2024年起連接臺灣各地的賽鴿好手。</p>
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
          <div className="text-sm text-gray-500">© 2024 臺灣賽鴿市集。保留所有權利。</div>
        </div>
      </footer>
    </div>
  )
}
