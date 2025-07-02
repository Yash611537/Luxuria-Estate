"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      
      {/* Content */}
      <div className={`relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
          Luxury Living
          <br />
          <span className="luxury-text-gradient">Redefined</span>
        </h1>
        
        <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed">
          Discover exceptional properties where elegance meets innovation. 
          Your dream home awaits in our exclusive collection.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="luxury-gradient hover:shadow-2xl hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold"
          >
            Explore Properties
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/50 text-white hover:bg-white hover:text-luxury-navy transition-all duration-300 px-8 py-6 text-lg backdrop-blur-sm"
          >
            Schedule Tour
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/70" />
      </div>
    </section>
  )
}