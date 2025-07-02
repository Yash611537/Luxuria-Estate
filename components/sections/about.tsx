"use client"

import { useEffect, useState } from "react"
import { Award, Users, Home, Trophy } from "lucide-react"

export function About() {
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

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: Home, value: "500+", label: "Properties Sold" },
    { icon: Users, value: "1000+", label: "Happy Clients" },
    { icon: Award, value: "25+", label: "Years Experience" },
    { icon: Trophy, value: "50+", label: "Awards Won" },
  ]

  return (
    <section id="about" className="section-padding bg-luxury-grey dark:bg-luxury-dark-blue/20">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}>
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-luxury-navy dark:text-luxury-dark-off-white">
              Crafting Dreams Into
              <span className="luxury-text-gradient block">Reality</span>
            </h2>
            
            <p className="text-lg text-luxury-charcoal/80 dark:text-luxury-dark-off-white/80 mb-8 leading-relaxed">
              For over two decades, Luxuria Estate has been the premier destination for luxury real estate. 
              We understand that a home is more than just a property—it's where life's most precious moments unfold.
            </p>
            
            <p className="text-lg text-luxury-charcoal/80 dark:text-luxury-dark-off-white/80 mb-8 leading-relaxed">
              Our curated collection features the finest properties, each selected for its exceptional design, 
              prime location, and uncompromising quality. From contemporary penthouses to classical estates, 
              we offer residences that reflect your sophisticated taste.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4">
                  <stat.icon className="h-8 w-8 text-luxury-gold dark:text-luxury-dark-gold mx-auto mb-2" />
                  <div className="text-2xl font-playfair font-bold text-luxury-navy dark:text-luxury-dark-off-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-luxury-charcoal/70 dark:text-luxury-dark-off-white/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Luxury Interior"
                className="rounded-2xl shadow-2xl w-full object-cover h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-gold/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}