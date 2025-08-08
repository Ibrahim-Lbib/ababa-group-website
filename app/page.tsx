import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import ServiceCard from '@/components/ServiceCard'
import TestimonialSlider from '@/components/TestimonialSlider'
import HeroSlideshow from '@/components/HeroSlideshow'
import { Building2, Computer, Truck, GraduationCap, Wheat, Hotel, Home, Users, CheckCircle, Globe, Zap, ArrowRight } from 'lucide-react'

export default function HomePage() {
  const services = [
    {
      title: "Construction & Real Estate",
      description: "Turnkey construction solutions and real estate development across South Sudan.",
      icon: Building2,
      image: "/images/services/construction-real-estate.jpg",
      href: "/services/construction"
    },
    {
      title: "ICT & Office Automation",
      description: "Modern technology solutions to digitize and streamline your business operations.",
      icon: Computer,
      image: "/images/services/ict-automation.png",
      href: "/services/ict"
    },
    {
      title: "Logistics & Clearance",
      description: "Efficient freight forwarding and customs clearance services throughout East Africa.",
      icon: Truck,
      image: "/images/services/logistics-freight.jpg",
      href: "/services/logistics"
    },
    {
      title: "Academia",
      description: "Educational services, training programs, and academic development initiatives.",
      icon: GraduationCap,
      image: "/images/services/academia-education.jpg",
      href: "/services/academia"
    },
    {
      title: "Agribusiness",
      description: "Agricultural solutions and agro-processing services to boost food security.",
      icon: Wheat,
      image: "/images/services/agribusiness.png",
      href: "/services/agribusiness"
    },
    {
      title: "Hospitality",
      description: "Tourism and hospitality services that showcase the best of South Sudan.",
      icon: Hotel,
      image: "/images/services/hospitality-tourism.jpg",
      href: "/services/hospitality"
    },
    {
      title: "Property Management",
      description: "Professional property management services for residential and commercial properties.",
      icon: Home,
      image: "/images/services/property-management.jpg",
      href: "/services/property-management"
    },
    {
      title: "Technical Manpower Supply",
      description: "Skilled technical professionals for your projects and operations.",
      icon: Users,
      image: "/images/services/technical-manpower.jpg",
      href: "/services/technical-manpower"
    }
  ]

  const whyChooseUs = [
    {
      title: "Locally Owned, Globally Driven",
      description: "100% South Sudanese-owned with international standards and best practices.",
      icon: Globe
    },
    {
      title: "Multi-Sector Expertise",
      description: "Comprehensive solutions across 8 different industry sectors under one roof.",
      icon: CheckCircle
    },
    {
      title: "Fast Execution, Transparent Pricing",
      description: "Quick project delivery with honest, upfront pricing and no hidden costs.",
      icon: Zap
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section with Slideshow */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Hero Slideshow Background */}
        <HeroSlideshow />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
              Leading Progress Across
              <span className="block text-ababa-gold">South Sudan & East Africa</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-ababa-off-white max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in Construction, ICT, Logistics, Academia & More. 
              Building the future with integrity, innovation, and excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-ababa-gold text-ababa-dark-blue hover:bg-ababa-off-white text-lg px-8 py-4 font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                <Link href="/contact" className="flex items-center">
                  Request a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-2 border-white hover:bg-white hover:text-ababa-dark-blue text-lg px-8 py-4 font-semibold rounded-lg backdrop-blur-sm transition-all duration-300 text-ababa-gold">
                <Link href="/about">Learn Our Story</Link>
              </Button>
            </div>
            
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center opacity-0">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose ABABA GROUP LIMITED?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine local knowledge with global expertise to deliver exceptional results across multiple industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-ababa-gold to-ababa-accent-blue rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-ababa-dark-blue">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg leading-relaxed">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive business solutions across multiple sectors to meet all your enterprise needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                image={service.image}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-ababa-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by businesses across South Sudan and East Africa
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-ababa-dark-blue to-ababa-accent-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's Build Something Impactful Together
          </h2>
          <p className="text-xl mb-10 text-ababa-off-white max-w-3xl mx-auto">
            Ready to take your business to the next level? Let's discuss your project today and discover how we can help you achieve your goals.
          </p>
          <Button asChild size="lg" className="bg-ababa-gold text-ababa-dark-blue hover:bg-ababa-off-white text-lg px-10 py-4 font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
