import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-ababa-dark-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">ABABA GROUP LIMITED</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner in Construction, ICT, Logistics, Agribusiness & More. 
              Powering progress across South Sudan & East Africa.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">White House – Kabu South, Luri Highway</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+211 912 347 777</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">info@ababagrouplimited.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Started</h4>
            <Button asChild className="w-full bg-ababa-gold hover:bg-ababa-accent-blue text-ababa-dark-blue">
              <Link href="/contact">Request a Free Site Audit</Link>
            </Button>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://web.facebook.com/people/Ababa-Group-Limited/61576955272381/?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <Twitter className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">© 2025 ABABA GROUP LIMITED. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
