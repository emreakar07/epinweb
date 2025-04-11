import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ShoppingCart,
  Zap,
  Shield,
  MessageCircle,
  ChevronRight,
  Package,
  Gift,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container max-w-5xl mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">EpinAutomatorBot</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#products" className="text-sm font-medium hover:text-primary">
              Products
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="#payment" className="text-sm font-medium hover:text-primary">
              Payment
            </Link>
          </nav>
          <Button asChild>
            <Link href="https://t.me/EpinAutomatorBot" target="_blank">
              Start Now
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container max-w-5xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center gap-6 text-center max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Get Your Game Credits & Digital Codes in Seconds
              </h1>

              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                  💳 Instant Delivery
                </span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                  🔒 Secure Transactions
                </span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                  💬 Seamless Telegram Experience
                </span>
              </div>

              <div className="mt-2">
                <Link 
                  href="https://t.me/EpinAutomatorBot" 
                  target="_blank"
                >
                  <div className="bg-black/90 text-white py-3 px-6 rounded-lg flex items-center justify-between w-48 shadow-sm dark:bg-white dark:text-black">
                    <span className="font-medium">Start Now</span>
                    <span>&#x203A;</span>
                  </div>
                </Link>
              </div>

              <div className="w-full max-w-md h-px bg-border my-2"></div>

              <p className="text-muted-foreground md:text-lg">
                🎮 Get your favorite game credits, digital gift cards, and entertainment subscriptions within seconds.
                <br />⚡ Pay with TON or Stars and receive your codes instantly.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container max-w-5xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                🔥 Why Choose EpinAutomatorBot?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <Card className="bg-background shadow-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Zap className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Instant Delivery</h3>
                    <p className="text-muted-foreground">Get your codes immediately after purchase.</p>
                  </CardContent>
                </Card>
                <Card className="bg-background shadow-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <MessageCircle className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Seamless Shopping</h3>
                    <p className="text-muted-foreground">Order directly via Telegram, no additional apps required.</p>
                  </CardContent>
                </Card>
                <Card className="bg-background shadow-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Shield className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Easy Payment</h3>
                    <p className="text-muted-foreground">Pay securely with TON or Stars.</p>
                  </CardContent>
                </Card>
                <Card className="bg-background shadow-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Clock className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Order Tracking & Resumption</h3>
                    <p className="text-muted-foreground">View and continue unfinished orders anytime.</p>
                  </CardContent>
                </Card>
                <Card className="bg-background shadow-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Gift className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Exclusive Deals</h3>
                    <p className="text-muted-foreground">Special discounts & limited-time offers available.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="w-full py-12 md:py-24">
          <div className="container max-w-5xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8">
                🛒 Products Available
              </h2>

              <div className="space-y-12 w-full">
                {/* Game Credits */}
                <div className="bg-background rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-6">🎮 Game Credits</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="flex flex-col items-center">
                      <div className="h-20 w-full relative mb-3 flex items-center justify-center">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Riot_Games_2022.svg-kh1vqj03ax5lstFK8mPtrKIGXfOqjz.png"
                          alt="Riot Games"
                          width={100}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium">Riot Games</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-20 w-full relative mb-3 flex items-center justify-center">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/playstationlogo-freelogovectors.net_-3JXzKqDef3FoSH81WTYkp8ZcNBejwg.png"
                          alt="PlayStation"
                          width={100}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium">PlayStation</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-20 w-full relative mb-3 flex items-center justify-center">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/steam-GXkwejQVdExm7tpt2nYvusExqUaynb.svg"
                          alt="Steam"
                          width={100}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium">Steam</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-20 w-full relative mb-3 flex items-center justify-center">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pubg-1-logo-Gb5tOIh1IgLn3Dz0K9gBy6bxgFeSJ2.svg"
                          alt="PUBG"
                          width={100}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium">PUBG</span>
                    </div>
                  </div>
                </div>

                {/* Lottery & Special Services */}
                <div className="bg-background rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-6">🎟️ Lottery & Special Services</h3>
                  <div className="flex justify-center">
                    <div className="flex flex-col items-center">
                      <div className="h-20 w-full relative mb-3 flex items-center justify-center">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/milli-piyango-logo-E251DC7FC4-seeklogo.com-Lj3JkT4fXycLGSp2tPwmvTvjwHJTRu.png"
                          alt="Milli Piyango"
                          width={100}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium">Milli Piyango</span>
                    </div>
                  </div>
                </div>

                {/* Streaming & Entertainment */}
                <div className="bg-background rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-6">🎬 Streaming & Entertainment</h3>
                  <div className="flex justify-center">
                    <div className="flex flex-col items-center">
                      <div className="h-20 w-full relative mb-3 flex items-center justify-center">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Netflix_2015_logo.svg-6MD6Kekhn4wmtIZ26H4RB7Tvc9Q5cX.png"
                          alt="Netflix"
                          width={100}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium">Netflix</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container max-w-5xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">🔄 How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-primary text-primary-foreground h-12 w-12 flex items-center justify-center text-xl font-bold mb-4 shadow-sm">
                    1
                  </div>
                  <h3 className="text-lg font-bold mb-2">Start the Bot</h3>
                  <p className="text-muted-foreground">Click here to open EpinAutomatorBot.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-primary text-primary-foreground h-12 w-12 flex items-center justify-center text-xl font-bold mb-4 shadow-sm">
                    2
                  </div>
                  <h3 className="text-lg font-bold mb-2">Select Your Product</h3>
                  <p className="text-muted-foreground">Choose from a wide range of game credits & digital services.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-primary text-primary-foreground h-12 w-12 flex items-center justify-center text-xl font-bold mb-4 shadow-sm">
                    3
                  </div>
                  <h3 className="text-lg font-bold mb-2">Select Quantity</h3>
                  <p className="text-muted-foreground">Adjust how many codes you want to buy.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-primary text-primary-foreground h-12 w-12 flex items-center justify-center text-xl font-bold mb-4 shadow-sm">
                    4
                  </div>
                  <h3 className="text-lg font-bold mb-2">Pay Securely</h3>
                  <p className="text-muted-foreground">
                    Choose from:
                    <br />💎 Pay with TON
                    <br />⭐ Pay with Stars
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-primary text-primary-foreground h-12 w-12 flex items-center justify-center text-xl font-bold mb-4 shadow-sm">
                    5
                  </div>
                  <h3 className="text-lg font-bold mb-2">Receive Instantly</h3>
                  <p className="text-muted-foreground">Your code is delivered immediately upon successful payment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Methods Section */}
        <section id="payment" className="w-full py-12 md:py-24">
          <div className="container max-w-5xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">💳 Payment Methods</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <Card className="bg-background shadow-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="h-24 w-24 relative mb-4">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ton-3d-icon-download-in-png-blend-fbx-gltf-file-formats--bitcoin-logo-coin-cryptocurrency-symbol-crypto-currency-coins-vol2-pack-science-technology-icons-7947912-pPLPch2bExhUMbyoj0JqOPTN9mf5Rs.png"
                        alt="TON"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Pay with TON</h3>
                    <p className="text-muted-foreground">Use TON cryptocurrency for seamless transactions.</p>
                  </CardContent>
                </Card>
                <Card className="bg-background shadow-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="h-24 w-24 relative mb-4">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3307686-mXBafajrSsFgMy0fcwjjB60QoC47Mp.webp"
                        alt="Stars"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Pay with Stars</h3>
                    <p className="text-muted-foreground">
                      Pay directly with your EpinAutomator balance for a fast, hassle-free experience.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-lg font-medium mt-8">
                🚀 No credit card needed! Only secure crypto and balance payments.
              </p>
            </div>
          </div>
        </section>

        {/* Order Management Section */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container max-w-5xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                📦 Order Management & Tracking
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <Card className="bg-background shadow-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Clock className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Track Orders Anytime</h3>
                    <p className="text-muted-foreground">View all past & ongoing orders in "My Orders" menu.</p>
                  </CardContent>
                </Card>
                <Card className="bg-background shadow-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <ArrowRight className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Resume Unfinished Orders</h3>
                    <p className="text-muted-foreground">
                      If you leave an order halfway, you can continue where you left off.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-background shadow-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Shield className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Secure & Reliable</h3>
                    <p className="text-muted-foreground">
                      Every transaction is stored, ensuring transparency and easy dispute resolution.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Offers Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container max-w-5xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                🛍️ Exclusive Offers & Discounts
              </h2>
              <p className="text-xl font-medium mt-2">🎯 Special Deals Available:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-muted p-4 mb-4 shadow-sm">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Daily Deals</h3>
                  <p className="text-muted-foreground">Limited-time offers with huge discounts.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-muted p-4 mb-4 shadow-sm">
                    <Package className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Bundle Offers</h3>
                  <p className="text-muted-foreground">Get extra savings when purchasing multiple codes.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-muted p-4 mb-4 shadow-sm">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Flash Sales</h3>
                  <p className="text-muted-foreground">Surprise discounts on popular products.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-black text-primary-foreground dark:bg-primary-foreground dark:text-primary">
          <div className="container max-w-5xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl flex items-center justify-center gap-3">
                <span className="text-rose-500">🚀</span> Start Shopping Now!
              </h2>
              <p className="text-xl mt-4 text-white">Click to launch 👉 EpinAutomatorBot</p>
              <div className="mt-6 flex items-center justify-center">
                <Link 
                  href="https://t.me/EpinAutomatorBot" 
                  target="_blank"
                >
                  <div className="bg-white/90 text-black py-3 px-6 rounded-lg flex items-center justify-between w-48 shadow-sm">
                    <span className="font-medium">Launch Bot</span>
                    <span>&#x203A;</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container max-w-5xl mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} EpinAutomatorBot. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
