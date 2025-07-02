import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { FloorPlans } from "@/components/sections/floor-plans"
import { Gallery } from "@/components/sections/gallery"
import { Amenities } from "@/components/sections/amenities"
import { Location } from "@/components/sections/location"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <FloorPlans />
      <Gallery />
      <Amenities />
      <Location />
      <Contact />
      <Footer />
    </main>
  )
}