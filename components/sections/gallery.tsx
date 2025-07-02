"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Maximize } from "lucide-react"

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById("gallery")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const images = [
    {
      url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      title: "Grand Living Room",
      category: "Interior"
    },
    {
      url: "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      title: "Master Bedroom",
      category: "Interior"
    },
    {
      url: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      title: "Gourmet Kitchen",
      category: "Interior"
    },
    {
      url: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      title: "Elegant Bathroom",
      category: "Interior"
    },
    {
      url: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      title: "Luxury Exterior",
      category: "Exterior"
    },
    {
      url: "https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      title: "Private Terrace",
      category: "Exterior"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, images.length - 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, images.length - 2)) % Math.max(1, images.length - 2))
  }

  return (
    <section id="gallery" className="section-padding bg-luxury-grey dark:bg-luxury-dark-blue/20">
      <div className="container-max">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-luxury-navy dark:text-luxury-dark-off-white">
            Visual 
            <span className="luxury-text-gradient"> Gallery</span>
          </h2>
          <p className="text-xl text-luxury-charcoal/80 dark:text-luxury-dark-off-white/80 max-w-3xl mx-auto">
            Step inside our exquisite properties and experience the artistry of luxury living through 
            our carefully curated image collection.
          </p>
        </div>

        {/* Gallery Container */}
        <div className={`relative transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {/* Main Gallery */}
          <div className="relative overflow-hidden rounded-2xl mb-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="min-w-full relative">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-[60vh] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <Badge className="mb-2 luxury-gradient text-white">
                      {image.category}
                    </Badge>
                    <h3 className="text-2xl font-playfair font-bold text-white">
                      {image.title}
                    </h3>
                  </div>
                  <button className="absolute top-6 right-6 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <Maximize className="h-5 w-5 text-white" />
                  </button>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {images.map((image, index) => (
              <Card
                key={index}
                className={`overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 ${
                  index === currentIndex ? "ring-2 ring-luxury-gold dark:ring-luxury-dark-gold" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-20 object-cover"
                />
              </Card>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex 
                    ? "bg-luxury-gold dark:bg-luxury-dark-gold" 
                    : "bg-luxury-gold/30 dark:bg-luxury-dark-gold/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}