"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "general"
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById("contact")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      subtitle: "Available 24/7"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@luxuriaestate.com", "sales@luxuriaestate.com"],
      subtitle: "Quick response guaranteed"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Madison Avenue", "New York, NY 10075"],
      subtitle: "By appointment only"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon-Fri: 9AM-7PM", "Sat-Sun: 10AM-5PM"],
      subtitle: "Extended hours available"
    }
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-luxury-navy dark:text-luxury-dark-off-white">
            Let's Start Your 
            <span className="luxury-text-gradient"> Journey</span>
          </h2>
          <p className="text-xl text-luxury-charcoal/80 dark:text-luxury-dark-off-white/80 max-w-3xl mx-auto">
            Ready to discover your dream home? Our dedicated team of luxury real estate experts 
            is here to guide you through every step of your journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className={`lg:col-span-1 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-luxury-gold/10 dark:bg-luxury-dark-gold/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <info.icon className="h-6 w-6 text-luxury-gold dark:text-luxury-dark-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-luxury-navy dark:text-luxury-dark-off-white mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-luxury-charcoal/80 dark:text-luxury-dark-off-white/80 mb-1">
                            {detail}
                          </p>
                        ))}
                        <p className="text-sm text-luxury-charcoal/60 dark:text-luxury-dark-off-white/60">
                          {info.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Contact */}
            <Card className="mt-8 luxury-gradient text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-playfair font-bold mb-2">
                  Need Immediate Assistance?
                </h3>
                <p className="mb-4 text-white/90">
                  Call our luxury concierge line
                </p>
                <Button 
                  variant="outline" 
                  className="border-white/50 text-white hover:bg-white hover:text-luxury-navy"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  (555) 123-LUXURY
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}>
            <Card className="shadow-2xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-luxury-navy dark:text-luxury-dark-off-white">
                  Send Us a Message
                </CardTitle>
                <p className="text-luxury-charcoal/70 dark:text-luxury-dark-off-white/70">
                  Share your preferences and we'll curate the perfect properties for you.
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="border-luxury-gold/30 focus:border-luxury-gold dark:border-luxury-dark-gold/30 dark:focus:border-luxury-dark-gold"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="border-luxury-gold/30 focus:border-luxury-gold dark:border-luxury-dark-gold/30 dark:focus:border-luxury-dark-gold"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-luxury-gold/30 focus:border-luxury-gold dark:border-luxury-dark-gold/30 dark:focus:border-luxury-dark-gold"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interest">I'm Interested In</Label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-luxury-gold/30 rounded-md focus:outline-none focus:border-luxury-gold dark:border-luxury-dark-gold/30 dark:focus:border-luxury-dark-gold dark:bg-background"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="buying">Buying Property</option>
                        <option value="selling">Selling Property</option>
                        <option value="renting">Luxury Rentals</option>
                        <option value="investment">Investment Opportunities</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your dream property, budget range, preferred location, or any specific requirements..."
                      className="border-luxury-gold/30 focus:border-luxury-gold dark:border-luxury-dark-gold/30 dark:focus:border-luxury-dark-gold resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full luxury-gradient hover:shadow-xl transition-all group"
                  >
                    <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>

                  <p className="text-sm text-luxury-charcoal/60 dark:text-luxury-dark-off-white/60">
                    By submitting this form, you agree to our privacy policy and consent to be contacted 
                    by our luxury real estate specialists.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}