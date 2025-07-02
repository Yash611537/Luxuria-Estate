"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Car, Train, Plane, ShoppingBag, Utensils, TreePine } from "lucide-react"

export function Location() {
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

    const element = document.getElementById("location")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const locationFeatures = [
    {
      icon: ShoppingBag,
      title: "Premium Shopping",
      description: "5-minute walk to luxury boutiques and flagship stores",
      distance: "0.3 miles"
    },
    {
      icon: Utensils,
      title: "Fine Dining",
      description: "World-class restaurants and rooftop bars nearby",
      distance: "0.2 miles"
    },
    {
      icon: Train,
      title: "Public Transit",
      description: "Direct access to subway and bus lines",
      distance: "0.1 miles"
    },
    {
      icon: Car,
      title: "Highway Access",
      description: "Easy connection to major highways and bridges",
      distance: "0.5 miles"
    },
    {
      icon: Plane,
      title: "Airports",
      description: "Quick access to international airports",
      distance: "25 minutes"
    },
    {
      icon: TreePine,
      title: "Central Park",
      description: "Beautiful green spaces and recreational areas",
      distance: "0.4 miles"
    }
  ]

  return (
    <section id="location" className="section-padding bg-luxury-grey dark:bg-luxury-dark-blue/20">
      <div className="container-max">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-luxury-navy dark:text-luxury-dark-off-white">
            Prime 
            <span className="luxury-text-gradient"> Location</span>
          </h2>
          <p className="text-xl text-luxury-charcoal/80 dark:text-luxury-dark-off-white/80 max-w-3xl mx-auto">
            Positioned in the heart of the city's most prestigious district, offering unparalleled 
            access to culture, commerce, and convenience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}>
            <Card className="overflow-hidden shadow-2xl border-0">
              <div className="relative h-[500px] bg-gradient-to-br from-luxury-gold/20 to-luxury-navy/20 dark:from-luxury-dark-gold/20 dark:to-luxury-dark-blue/20">
                {/* Map Placeholder - Replace with actual map integration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-luxury-gold dark:text-luxury-dark-gold mx-auto mb-4" />
                    <h3 className="text-2xl font-playfair font-bold text-luxury-navy dark:text-luxury-dark-off-white mb-2">
                      Madison Avenue
                    </h3>
                    <p className="text-luxury-charcoal/70 dark:text-luxury-dark-off-white/70">
                      New York, NY 10075
                    </p>
                  </div>
                </div>
                
                {/* Interactive elements placeholder */}
                <div className="absolute top-4 right-4">
                  <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm">
                    View Larger Map
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Location Features */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}>
            <div className="space-y-6">
              <div className="mb-8">
                <h3 className="text-3xl font-playfair font-bold mb-4 text-luxury-navy dark:text-luxury-dark-off-white">
                  Everything You Need
                  <span className="luxury-text-gradient block">Within Reach</span>
                </h3>
                <p className="text-lg text-luxury-charcoal/80 dark:text-luxury-dark-off-white/80">
                  Our prime location puts the best of the city at your doorstep, from world-class 
                  dining to cultural landmarks and business districts.
                </p>
              </div>

              {locationFeatures.map((feature, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 border-luxury-gold/20 dark:border-luxury-dark-gold/20"
                >
                  <CardContent className="p-4 flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-luxury-gold/10 dark:bg-luxury-dark-gold/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="h-6 w-6 text-luxury-gold dark:text-luxury-dark-gold" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-luxury-navy dark:text-luxury-dark-off-white">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-luxury-charcoal/70 dark:text-luxury-dark-off-white/70">
                        {feature.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <div className="text-sm font-medium text-luxury-gold dark:text-luxury-dark-gold">
                        {feature.distance}
                      </div>
                      <div className="text-xs text-luxury-charcoal/50 dark:text-luxury-dark-off-white/50">
                        away
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Transportation Info */}
            <Card className="mt-8 luxury-gradient text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="h-5 w-5" />
                  <h4 className="font-semibold">Commute Times</h4>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>Financial District: 15 min</div>
                  <div>Midtown: 8 min</div>
                  <div>Brooklyn: 20 min</div>
                  <div>JFK Airport: 45 min</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}