import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Building2, Home, Factory, Wrench } from 'lucide-react'

export default function ConstructionPage() {
  const services = [
    {
      title: "Turnkey Construction",
      description: "Complete project management from design to completion",
      icon: Building2,
      image: "/images/construction/turnkey-construction.jpg"
    },
    {
      title: "Civil Works",
      description: "Infrastructure development and civil engineering projects",
      icon: Wrench,
      image: "/images/construction/civil-works.jpg"
    },
    {
      title: "Real Estate Development",
      description: "Residential and commercial property development",
      icon: Home,
      image: "/images/construction/real-estate-development.jpg"
    },
    {
      title: "Industrial Projects",
      description: "Manufacturing facilities and industrial construction",
      icon: Factory,
      image: "/images/construction/industrial-projects.jpg"
    }
  ]

  const benefits = [
    "On-time project delivery with strict adherence to schedules",
    "Transparent pricing with no hidden costs or surprise charges",
    "Quality materials sourced from trusted suppliers",
    "Experienced project managers and skilled craftsmen",
    "Comprehensive project documentation and reporting",
    "Post-completion support and maintenance services"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ababa-dark-blue to-ababa-accent-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              From Concept to Concrete—We Build With Purpose
            </h1>
            <p className="text-xl text-ababa-off-white mb-8">
              Professional construction and real estate services that transform visions into reality
            </p>
            <Button asChild size="lg" className="bg-ababa-gold text-ababa-dark-blue hover:bg-ababa-off-white text-lg px-8 py-3">
              <Link href="/contact">Start Your Project Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tired of Construction Headaches?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Tired of delays, excuses, and cost overruns? Our project delivery is fast, honest, and professional. 
              We understand the frustration of working with unreliable contractors, which is why we've built our 
              reputation on transparency, quality, and timely completion.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <p className="text-xl font-semibold text-ababa-dark-blue">
                "No more surprises. No more delays. Just results you can count on."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive construction services tailored to meet your specific needs and budget
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-ababa-off-white rounded-full flex items-center justify-center mb-4 shadow-md">
                    <service.icon className="h-8 w-8 text-ababa-dark-blue" />
                  </div>
                  <CardTitle className="text-xl text-ababa-dark-blue">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Our Construction Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proof Point */}
      <section className="py-16 bg-ababa-dark-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Proven Track Record
          </h2>
          <p className="text-xl text-ababa-off-white mb-8 max-w-4xl mx-auto">
            Delivered 50+ projects in Juba and surrounding areas on time and within budget. 
            Our portfolio includes office complexes, residential developments, industrial facilities, 
            and infrastructure projects that stand the test of time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-ababa-off-white">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-ababa-off-white">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-ababa-off-white">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Build Your Vision?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's discuss your construction project and provide you with a detailed proposal. 
            Contact us today for a free consultation and site assessment.
          </p>
          <Button asChild size="lg" className="bg-ababa-dark-blue hover:bg-ababa-accent-blue text-lg px-8 py-3">
            <Link href="/contact">Start Your Project Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
