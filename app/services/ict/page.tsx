import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Computer, Wifi, Shield, Smartphone, Monitor, Database, Cloud } from 'lucide-react'

export default function ICTPage() {
  const services = [
    {
      title: "Network Infrastructure",
      description: "Design and implementation of robust network systems",
      icon: Wifi
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security systems to protect your digital assets",
      icon: Shield
    },
    {
      title: "Digital Transformation",
      description: "Modernize your business processes with cutting-edge technology",
      icon: Smartphone
    },
    {
      title: "System Integration",
      description: "Seamless integration of various technology platforms",
      icon: Monitor
    }
  ]

  const benefits = [
    "24/7 technical support and maintenance services",
    "Scalable solutions that grow with your business needs",
    "Latest technology implementations and upgrades",
    "Comprehensive staff training and knowledge transfer",
    "Cost-effective solutions with transparent pricing",
    "Local expertise with international technology standards",
    "Custom software development and automation solutions",
    "Cloud migration and data backup services"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/ict-automation.png"
            alt="ICT & Office Automation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ababa-dark-blue/90 via-ababa-dark-blue/70 to-ababa-accent-blue/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              ICT & Office Automation
            </h1>
            <p className="text-xl md:text-2xl text-ababa-off-white">
              Transforming businesses through innovative technology solutions and digital automation
            </p>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Modernize Your Business Operations
            </h2>
            <div className="text-lg text-gray-700 space-y-6">
              <p>
                In today's digital age, technology is the backbone of successful businesses. Our ICT & Office Automation 
                services provide comprehensive technology solutions that streamline operations, enhance productivity, and 
                position your organization for sustainable growth. From network infrastructure to digital transformation 
                initiatives, we deliver cutting-edge solutions tailored to meet the unique needs of South Sudanese businesses.
              </p>
              <p>
                Our team of certified technology professionals combines international expertise with deep understanding 
                of local business environments. We provide end-to-end ICT services including system design, implementation, 
                training, and ongoing support. Whether you're looking to upgrade your current systems, implement new 
                technologies, or completely transform your digital infrastructure, we have the expertise and experience 
                to deliver results that exceed expectations.
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
              Our ICT Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to enhance your business efficiency
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
                Why Choose Our ICT Services?
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
                src="/images/services/ict-automation.png"
                alt="ICT Solutions"
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-ababa-off-white mb-8 max-w-3xl mx-auto">
            Let our ICT experts assess your current systems and provide tailored solutions that drive efficiency and growth. 
            Contact us today for a free technology consultation.
          </p>
          <Button asChild size="lg" className="bg-ababa-gold text-ababa-dark-blue hover:bg-ababa-off-white text-lg px-8 py-3">
            <Link href="/contact">Get Your Free ICT Assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
