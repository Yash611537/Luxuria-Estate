import Link from "next/link"
import { Crown, Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const footerLinks = {
    "Properties": [
      "Luxury Condos",
      "Penthouses", 
      "Townhouses",
      "Commercial"
    ],
    "Services": [
      "Property Management",
      "Investment Advisory",
      "Interior Design",
      "Concierge"
    ],
    "Company": [
      "About Us",
      "Our Team",
      "Careers",
      "Press"
    ],
    "Resources": [
      "Market Reports",
      "Buying Guide",
      "Selling Guide",
      "Legal"
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ]

  return (
    <footer className="bg-luxury-navy dark:bg-luxury-dark-black text-white">
      <div className="container-max section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Crown className="h-8 w-8 text-luxury-gold dark:text-luxury-dark-gold" />
              <span className="text-2xl font-playfair font-bold">
                Luxuria Estate
              </span>
            </Link>
            <p className="text-white/80 mb-6 leading-relaxed">
              Defining luxury real estate for over 25 years. We specialize in connecting 
              discerning clients with extraordinary properties that exceed expectations.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold dark:hover:bg-luxury-dark-gold transition-colors group"
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-playfair font-semibold text-lg mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href="#" 
                      className="text-white/70 hover:text-luxury-gold dark:hover:text-luxury-dark-gold transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info Bar */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-luxury-gold dark:text-luxury-dark-gold" />
              <div>
                <div className="font-semibold">Call Us</div>
                <div className="text-white/70 text-sm">+1 (555) 123-LUXURY</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-luxury-gold dark:text-luxury-dark-gold" />
              <div>
                <div className="font-semibold">Email Us</div>
                <div className="text-white/70 text-sm">info@luxuriaestate.com</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-luxury-gold dark:text-luxury-dark-gold" />
              <div>
                <div className="font-semibold">Visit Us</div>
                <div className="text-white/70 text-sm">123 Madison Ave, NYC</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © 2025 Luxuria Estate. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}