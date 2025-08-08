import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Truck, Ship, Plane, Package, MapPin, Clock, Shield, Globe } from 'lucide-react'

export default function LogisticsPage() {
  const services = [
    {
      title: "Freight Forwarding",
      description: "International and domestic freight forwarding services",
      icon: Truck
    },
    {
      title: "Customs Clearance",
      description: "Expert customs clearance and documentation services",
      icon: Package
    },
    {
      title: "Supply Chain Management",
      description: "End-to-end supply chain optimization and management",
      icon: Globe
    },
    {
      title: "Warehousing Solutions",
      description: "Secure storage and distribution facilities",
      icon: MapPin
    }
  ]

  const benefits = [
    "Extensive network across East Africa and international markets",
    "Expert customs clearance with government liaison services",
    "Real-time tracking and shipment monitoring systems",
    "Competitive pricing with transparent cost structures",
    "Specialized handling for various cargo types and industries",
    "24/7 customer support and emergency logistics services",
    "Insurance coverage and risk management solutions",
    "Integrated technology platforms for seamless operations",
    "Local expertise with international logistics standards",
    "Flexible solutions tailored to your specific requirements"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/logistics-freight.jpg"
            alt="Logistics & Freight Forwarding"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ababa-dark-blue/90 via-ababa-dark-blue/70 to-ababa-accent-blue/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Logistics & Freight Forwarding
            </h1>
            <p className="text-xl md:text-2xl text-ababa-off-white">
              Seamless cargo movement and supply chain solutions across East Africa and beyond
            </p>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Your Gateway to Global Markets
            </h2>
            <div className="text-lg text-gray-700 space-y-6">
              <p>
                In an interconnected global economy, efficient logistics and freight forwarding services are essential 
                for business success. Our comprehensive logistics solutions connect South Sudan to regional and 
                international markets, ensuring your goods move safely, efficiently, and cost-effectively. With extensive 
                experience in East African trade corridors and international shipping, we provide end-to-end logistics 
                services that eliminate the complexities of cargo movement and customs procedures.
              </p>
              <p>
                Our team of logistics professionals understands the unique challenges of operating in South Sudan and 
                the broader East African region. We leverage our strong relationships with shipping lines, airlines, 
                customs authorities, and local partners to provide seamless logistics solutions. From small parcels to 
                large industrial equipment, we handle all types of cargo with the same level of professionalism and 
                attention to detail, ensuring your shipments arrive on time and in perfect condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Logistics Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive logistics solutions for all your cargo movement needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-ababa-off-white rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-ababa-dark-blue" />
                  </div>
                  <CardTitle className="text-xl text-ababa-dark-blue">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/services/logistics-freight.jpg"
                alt="Logistics Solutions"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why Choose Our Logistics Services?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ababa-dark-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Streamline Your Logistics?
          </h2>
          <p className="text-xl text-ababa-off-white mb-8 max-w-3xl mx-auto">
            Let our logistics experts handle your cargo movement needs while you focus on growing your business. 
            Contact us today for a customized logistics solution.
          </p>
          <Button asChild size="lg" className="bg-ababa-gold text-ababa-dark-blue hover:bg-ababa-off-white text-lg px-8 py-3">
            <Link href="/contact">Get Your Logistics Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
