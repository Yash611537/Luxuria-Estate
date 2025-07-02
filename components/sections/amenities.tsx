"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Waves, 
  Dumbbell, 
  Car, 
  Shield, 
  Wifi, 
  Coffee,
  TreePine,
  Users,
  Wine,
  Utensils,
  Sparkles,
  Building
} from "lucide-react"

export function Amenities() {
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

    const element = document.getElementById("amenities")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const amenities = [
    {
      icon: Waves,
      title: "Infinity Pool",
      description: "Rooftop infinity pool with panoramic city views"
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "State-of-the-art gym with personal training"
    },
    {
      icon: Car,
      title: "Valet Parking",
      description: "24/7 valet service with covered parking"
    },
    {
      icon: Shield,
      title: "Concierge",
      description: "Professional concierge service available"
    },
    {
      icon: TreePine,
      title: "Garden Terrace",
      description: "Beautifully landscaped outdoor spaces"
    },
    {
      icon: Users,
      title: "Private Lounge",
      description: "Exclusive resident lounge and meeting rooms"
    },
    {
      icon: Wine,
      title: "Wine Cellar",
      description: "Climate-controlled wine storage facility"
    },
    {
      icon: Utensils,
      title: "Gourmet Kitchen",
      description: "Professional-grade kitchen facilities"
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Gigabit internet throughout the building"
    },
    {
      icon: Coffee,
      title: "Café & Bar",
      description: "On-site café and cocktail bar"
    },
    {
      icon: Sparkles,
      title: "Spa Services",
      description: "Full-service spa and wellness center"
    },
    {
      icon: Building,
      title: "Business Center",
      description: "Modern co-working and conference spaces"
    }
  ]

  return (
    <section id="amenities" className="section-padding">
      <div className="container-max">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-luxury-navy dark:text-luxury-dark-off-white">
            World-Class 
            <span className="luxury-text-gradient"> Amenities</span>
          </h2>
          <p className="text-xl text-luxury-charcoal/80 dark:text-luxury-dark-off-white/80 max-w-3xl mx-auto">
            Experience resort-style living with our comprehensive collection of premium amenities 
            designed to enhance every aspect of your lifestyle.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-500 hover:scale-105 border-0 shadow-lg ${
                isVisible ? "opacity-100 animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 bg-luxury-gold/10 dark:bg-luxury-dark-gold/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <amenity.icon className="h-8 w-8 text-luxury-gold dark:text-luxury-dark-gold" />
                </div>
                
                <h3 className="text-xl font-playfair font-semibold mb-3 text-luxury-navy dark:text-luxury-dark-off-white">
                  {amenity.title}
                </h3>
                
                <p className="text-luxury-charcoal/70 dark:text-luxury-dark-off-white/70 leading-relaxed">
                  {amenity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="bg-gradient-to-r from-luxury-gold/10 to-luxury-navy/10 dark:from-luxury-dark-gold/10 dark:to-luxury-dark-blue/20 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-playfair font-bold mb-4 text-luxury-navy dark:text-luxury-dark-off-white">
              Ready to Experience Luxury Living?
            </h3>
            <p className="text-lg text-luxury-charcoal/80 dark:text-luxury-dark-off-white/80 mb-6 max-w-2xl mx-auto">
              Schedule a private tour and discover how our amenities can transform your daily routine into 
              an extraordinary lifestyle experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}