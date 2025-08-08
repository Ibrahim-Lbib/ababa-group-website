import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Wheat, Tractor, Leaf, Factory, Droplets, Sun, Truck, Users } from 'lucide-react'

export default function AgribusinessPage() {
  const services = [
    {
      title: "Crop Production",
      description: "Modern farming techniques and crop management solutions",
      icon: Wheat
    },
    {
      title: "Agro-processing",
      description: "Value addition through processing and packaging services",
      icon: Factory
    },
    {
      title: "Agricultural Training",
      description: "Capacity building for farmers and agricultural professionals",
      icon: Users
    },
    {
      title: "Supply Chain Solutions",
      description: "Farm-to-market logistics and distribution networks",
      icon: Truck
    }
  ]

  const benefits = [
    "Modern farming techniques that increase crop yields and quality",
    "Access to high-quality seeds, fertilizers, and agricultural inputs",
    "Training programs for farmers on best agricultural practices",
    "Post-harvest handling and storage solutions to reduce losses",
    "Market linkage services connecting farmers to buyers",
    "Value addition through processing and packaging services",
    "Sustainable farming practices that protect the environment",
    "Financial advisory services and access to agricultural credit",
    "Weather monitoring and climate-smart agriculture solutions",
    "Mechanization services and equipment rental programs"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/agribusiness.png"
            alt="Agribusiness & Agro-processing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ababa-dark-blue/90 via-ababa-dark-blue/70 to-ababa-accent-blue/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Agribusiness & Agro-processing
            </h1>
            <p className="text-xl md:text-2xl text-ababa-off-white">
              Transforming agriculture through modern techniques and sustainable farming solutions
            </p>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Cultivating Food Security and Economic Growth
            </h2>
            <div className="text-lg text-gray-700 space-y-6">
              <p>
                Agriculture is the backbone of South Sudan's economy and the foundation of food security for millions 
                of people. Our comprehensive agribusiness services are designed to transform traditional farming practices 
                through modern techniques, technology integration, and sustainable approaches that increase productivity 
                while protecting the environment. We work with smallholder farmers, commercial agricultural enterprises, 
                and government institutions to build a robust agricultural sector that drives economic growth and ensures 
                food security for all South Sudanese.
              </p>
              <p>
                Our agribusiness solutions span the entire agricultural value chain, from pre-production planning and 
                input supply to post-harvest processing and market linkage. We provide technical expertise, training, 
                and support services that enable farmers to adopt best practices, increase yields, and access profitable 
                markets. Through our agro-processing initiatives, we help add value to agricultural products, create 
                employment opportunities, and reduce post-harvest losses that have historically plagued the sector.
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
              Our Agribusiness Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive agricultural solutions from farm to market
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
                Why Choose Our Agribusiness Services?
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
                src="/images/services/agribusiness.png"
                alt="Agribusiness Solutions"
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
            Ready to Transform Your Agricultural Operations?
          </h2>
          <p className="text-xl text-ababa-off-white mb-8 max-w-3xl mx-auto">
            Let our agricultural experts help you increase productivity, improve quality, and access profitable markets. 
            Contact us today to discuss your agribusiness needs.
          </p>
          <Button asChild size="lg" className="bg-ababa-gold text-ababa-dark-blue hover:bg-ababa-off-white text-lg px-8 py-3">
            <Link href="/contact">Start Your Agricultural Journey</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
