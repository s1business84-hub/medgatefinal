import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { FAQ } from "@/components/sections/faq"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <FAQ />
      <Footer />
    </main>
  )
}