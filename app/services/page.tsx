import Link from 'next/link'
import { Button } from '@/components/ui/button'
import ServiceCard from '@/components/ServiceCard'
import { Building2, Computer, Truck, GraduationCap, Wheat, Hotel, Home, Users } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      title: "Construction & Real Estate",
      description: "Turnkey construction solutions, civil works, and real estate development for residential and commercial projects.",
      icon: Building2,
      image: "/images/services/construction-real-estate.jpg",
      href: "/services/construction"
    },
    {
      title: "ICT & Office Automation",
      description: "Modern technology solutions, network infrastructure, and digital transformation services for businesses.",
      icon: Computer,
      image: "/images/services/ict-automation.png",
      href: "/services/ict"
    },
    {
      title: "Logistics & Freight Forwarding",
      description: "Comprehensive logistics solutions, customs clearance, and freight forwarding services across East Africa.",
      icon: Truck,
      image: "/images/services/logistics-freight.jpg",
      href: "/services/logistics"
    },
    {
      title: "Academia",
      description: "Educational services, training programs, capacity building, and academic development initiatives for institutions and individuals.",
      icon: GraduationCap,
      image: "/images/services/academia-education.jpg",
      href: "/services/academia"
    },
    {
      title: "Agribusiness & Agro-processing",
      description: "Agricultural solutions, agro-processing services, and food security initiatives to boost local production.",
      icon: Wheat,
      image: "/images/services/agribusiness.png",
      href: "/services/agribusiness"
    },
    {
      title: "Hospitality & Tourism",
      description: "Tourism development, hospitality services, and destination management showcasing South Sudan's potential.",
      icon: Hotel,
      image: "/images/services/hospitality-tourism.jpg",
      href: "/services/hospitality"
    },
    {
      title: "Property Management",
      description: "Professional property management services for residential, commercial, and industrial properties.",
      icon: Home,
      image: "/images/services/property-management.jpg",
      href: "/services/property-management"
    },
    {
      title: "Technical Manpower Supply",
      description: "Skilled technical professionals and workforce solutions for projects across multiple industries.",
      icon: Users,
      image: "/images/services/technical-manpower.jpg",
      href: "/services/technical-manpower"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ababa-dark-blue to-ababa-accent-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Multi-Sector Services. One Reliable Partner.
          </h1>
          <p className="text-xl text-ababa-off-white max-w-4xl mx-auto">
            From freight to fiber optics to full-scale construction—ABABA GROUP LIMITED delivers 
            high-impact solutions with consistency and care.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* CTA Section */}
      <section className="py-16 bg-ababa-dark-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-ababa-off-white max-w-3xl mx-auto">
            Let our experts assess your needs and provide tailored solutions that drive results. 
            Book your free consultation today.
          </p>
          <Button asChild size="lg" className="bg-ababa-gold text-ababa-dark-blue hover:bg-ababa-off-white text-lg px-8 py-3">
            <Link href="/contact">Book a Free Assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
