"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bed, Bath, Square, Eye } from "lucide-react"

export function FloorPlans() {
  const [activeTab, setActiveTab] = useState(0)
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

    const element = document.getElementById("floor-plans")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const floorPlans = [
    {
      name: "Signature Suite",
      type: "Penthouse",
      bedrooms: 3,
      bathrooms: 4,
      area: 3200,
      price: "$2.8M",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Private Terrace", "City Views", "Smart Home", "Wine Cellar"]
    },
    {
      name: "Executive Residence",
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 3,
      area: 2400,
      price: "$1.9M",
      image: "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["High Ceilings", "Premium Finishes", "Balcony", "Storage"]
    },
    {
      name: "Urban Sanctuary",
      type: "Loft",
      bedrooms: 1,
      bathrooms: 2,
      area: 1800,
      price: "$1.2M",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Open Concept", "Industrial Design", "Skylight", "Hardwood"]
    }
  ]

  return (
    <section id="floor-plans" className="section-padding">
      <div className="container-max">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-luxury-navy dark:text-luxury-dark-off-white">
            Exceptional 
            <span className="luxury-text-gradient"> Floor Plans</span>
          </h2>
          <p className="text-xl text-luxury-charcoal/80 dark:text-luxury-dark-off-white/80 max-w-3xl mx-auto">
            Each residence is thoughtfully designed to maximize space, light, and luxury. 
            Discover layouts that perfectly complement your lifestyle.
          </p>
        </div>

        {/* Floor Plan Tabs */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {floorPlans.map((plan, index) => (
            <Button
              key={index}
              variant={activeTab === index ? "default" : "outline"}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 ${activeTab === index 
                ? "luxury-gradient text-white" 
                : "border-luxury-gold/30 text-luxury-charcoal dark:text-luxury-dark-off-white hover:border-luxury-gold dark:border-luxury-dark-gold/30 dark:hover:border-luxury-dark-gold"
              }`}
            >
              {plan.name}
            </Button>
          ))}
        </div>

        {/* Active Floor Plan */}
        <div className={`transition-all duration-1000 delay-400 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <Card className="overflow-hidden shadow-2xl border-0">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-[400px] lg:h-[600px]">
                <img
                  src={floorPlans[activeTab].image}
                  alt={floorPlans[activeTab].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <Badge className="absolute top-4 left-4 luxury-gradient text-white">
                  {floorPlans[activeTab].type}
                </Badge>
              </div>

              {/* Content */}
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-playfair font-bold mb-4 text-luxury-navy dark:text-luxury-dark-off-white">
                  {floorPlans[activeTab].name}
                </h3>
                
                <div className="text-2xl font-bold mb-6 luxury-text-gradient">
                  {floorPlans[activeTab].price}
                </div>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <Bed className="h-6 w-6 text-luxury-gold dark:text-luxury-dark-gold mx-auto mb-2" />
                    <div className="font-semibold text-luxury-navy dark:text-luxury-dark-off-white">
                      {floorPlans[activeTab].bedrooms}
                    </div>
                    <div className="text-sm text-luxury-charcoal/70 dark:text-luxury-dark-off-white/70">
                      Bedrooms
                    </div>
                  </div>
                  <div className="text-center">
                    <Bath className="h-6 w-6 text-luxury-gold dark:text-luxury-dark-gold mx-auto mb-2" />
                    <div className="font-semibold text-luxury-navy dark:text-luxury-dark-off-white">
                      {floorPlans[activeTab].bathrooms}
                    </div>
                    <div className="text-sm text-luxury-charcoal/70 dark:text-luxury-dark-off-white/70">
                      Bathrooms
                    </div>
                  </div>
                  <div className="text-center">
                    <Square className="h-6 w-6 text-luxury-gold dark:text-luxury-dark-gold mx-auto mb-2" />
                    <div className="font-semibold text-luxury-navy dark:text-luxury-dark-off-white">
                      {floorPlans[activeTab].area}
                    </div>
                    <div className="text-sm text-luxury-charcoal/70 dark:text-luxury-dark-off-white/70">
                      Sq Ft
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold mb-4 text-luxury-navy dark:text-luxury-dark-off-white">
                    Premium Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {floorPlans[activeTab].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-luxury-gold dark:bg-luxury-dark-gold rounded-full" />
                        <span className="text-sm text-luxury-charcoal/80 dark:text-luxury-dark-off-white/80">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="luxury-gradient hover:shadow-xl transition-all group">
                  <Eye className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  Schedule Viewing
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}