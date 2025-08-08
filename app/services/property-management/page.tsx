import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Home, Key, Wrench, DollarSign, Shield, Users, Calendar, FileText } from 'lucide-react'

export default function PropertyManagementPage() {
  const services = [
    {
      title: "Residential Management",
      description: "Comprehensive management of residential properties and complexes",
      icon: Home
    },
    {
      title: "Commercial Management",
      description: "Professional management of office buildings and retail spaces",
      icon: FileText
    },
    {
      title: "Maintenance Services",
      description: "Preventive and corrective maintenance for all property types",
      icon: Wrench
    },
    {
      title: "Tenant Relations",
      description: "Professional tenant screening, relations, and support services",
      icon: Users
    }
  ]

  const benefits = [
    "Professional property management with transparent reporting",
    "Comprehensive tenant screening and background verification",
    "24/7 emergency maintenance and repair services",
    "Regular property inspections and condition assessments",
    "Efficient rent collection and financial management",
    "Legal compliance and documentation management",
    "Marketing and leasing services for vacant properties",
    "Preventive maintenance programs to preserve property value",
    "Insurance coordination and claims management",
    "Detailed monthly and annual financial reporting"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/property-management.jpg"
            alt="Property Management"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ababa-dark-blue/90 via-ababa-dark-blue/70 to-ababa-accent-blue/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Property Management
            </h1>
            <p className="text-xl md:text-2xl text-ababa-off-white">
              Professional property management services that maximize value and minimize hassle
            </p>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Maximizing Your Property Investment
            </h2>
            <div className="text-lg text-gray-700 space-y-6">
              <p>
                Property ownership should be an investment that generates returns, not a source of constant stress and 
                management challenges. Our comprehensive property management services are designed to maximize the value 
                of your real estate investments while minimizing the time and effort required from you as the owner. 
                Whether you own residential apartments, commercial office buildings, or mixed-use developments, we provide 
                professional management services that ensure your properties are well-maintained, profitable, and compliant 
                with all relevant regulations.
              </p>
              <p>
                Our experienced property management team handles every aspect of property operations, from tenant relations 
                and rent collection to maintenance coordination and financial reporting. We understand the unique challenges 
                of managing properties in South Sudan's evolving real estate market and provide solutions that are both 
                practical and profitable. Through proactive management, regular maintenance, and professional tenant 
                relations, we help preserve and enhance the value of your property investments while providing you with 
                peace of mind and consistent returns.
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
              Our Property Management Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive property management solutions for all types of real estate
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
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why Choose Our Property Management?
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
            <div className="relative">
              <Image
                src="/images/services/property-management.jpg"
                alt="Property Management Solutions"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ababa-dark-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Maximize Your Property Value?
          </h2>
          <p className="text-xl text-ababa-off-white mb-8 max-w-3xl mx-auto">
            Let our property management experts take care of your real estate investments while you enjoy the returns. 
            Contact us today for a free property management consultation.
          </p>
          <Button asChild size="lg" className="bg-ababa-gold text-ababa-dark-blue hover:bg-ababa-off-white text-lg px-8 py-3">
            <Link href="/contact">Get Your Property Assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
