"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You would typically send this data to your backend
    alert('Thank you for your inquiry! We will contact you within 24 hours.')
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const services = [
    "Construction & Real Estate",
    "ICT & Office Automation",
    "Logistics & Freight Forwarding",
    "Academia",
    "Agribusiness & Agro-processing",
    "Hospitality & Tourism",
    "Property Management",
    "Technical Manpower Supply"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ababa-dark-blue to-ababa-accent-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Talk — We're Ready When You Are
          </h1>
          <p className="text-xl text-ababa-off-white max-w-3xl mx-auto">
            Get in touch with our team to discuss your project requirements and discover how we can help your business grow.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+211 XXX XXX XXX"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service">What service are you interested in? *</Label>
                      <Select onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your project requirements..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-ababa-dark-blue hover:bg-ababa-accent-blue text-lg py-3">
                      Submit Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Company Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  <CardDescription>
                    Multiple ways to reach our team for immediate assistance.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-ababa-dark-blue mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Our Location</h3>
                      <p className="text-gray-600">White House – Kabu South, Luri Highway</p>
                      <p className="text-gray-600">Juba, South Sudan</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-ababa-dark-blue mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+211 912 347 777</p>
                      <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-ababa-dark-blue mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@ababagrouplimited.com</p>
                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-ababa-dark-blue mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-ababa-off-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-ababa-dark-blue mb-4">
                    Why Choose ABABA GROUP?
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 100% South Sudanese-owned enterprise</li>
                    <li>• Multi-sector expertise under one roof</li>
                    <li>• Proven track record with 50+ completed projects</li>
                    <li>• Transparent pricing with no hidden costs</li>
                    <li>• Fast execution and reliable delivery</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600">
              Located in the heart of Juba, easily accessible from all major areas
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7567890123456!2d31.469282!3d4.8652291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1712878f048c668d%3A0xb782c71471384796!2sAbaba%20Group%20Limited!5e0!3m2!1sen!2sss!4v1234567890123"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ABABA GROUP LIMITED Location - White House, Kabu South, Luri Highway"
              className="w-full"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://www.google.com/maps/place/Ababa+Group+Limited/@4.8652291,31.469282,17z/data=!3m1!4b1!4m6!3m5!1s0x1712878f048c668d:0xb782c71471384796!8m2!3d4.8652291!4d31.469282!16s%2Fg%2F11xs1n_qn2?entry=ttu&g_ep=EgoyMDI1MDgwNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-ababa-dark-blue text-white rounded-lg hover:bg-ababa-accent-blue transition-colors"
            >
              <MapPin className="h-5 w-5 mr-2" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
