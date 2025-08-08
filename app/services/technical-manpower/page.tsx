import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Users, HardHat, Wrench, Zap, Cog, Award, Clock, Shield } from 'lucide-react'

export default function TechnicalManpowerPage() {
  const services = [
    {
      title: "Skilled Technicians",
      description: "Certified technical professionals for various industries",
      icon: Wrench
    },
    {
      title: "Engineering Support",
      description: "Qualified engineers for project implementation and oversight",
      icon: Cog
    },
    {
      title: "Safety Specialists",
      description: "Health and safety professionals for workplace compliance",
      icon: Shield
    },
    {
      title: "Project Teams",
      description: "Complete technical teams for large-scale projects",
      icon: Users
    }
  ]

  const benefits = [
    "Rigorous screening and qualification verification processes",
    "Skilled professionals with relevant certifications and experience",
    "Flexible staffing solutions for short-term and long-term projects",
    "Comprehensive insurance coverage for all supplied personnel",
    "Ongoing training and professional development programs",
    "24/7 support and replacement services when needed",
    "Competitive rates with transparent pricing structures",
    "Local and international talent pool access",
    "Specialized expertise across multiple technical disciplines",
    "Quality assurance and performance monitoring systems"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/technical-manpower.jpg"
            alt="Technical Manpower Supply"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ababa-dark-blue/90 via-ababa-dark-blue/70 to-ababa-accent-blue/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Technical Manpower Supply
            </h1>
            <p className="text-xl md:text-2xl text-ababa-off-white">
              Skilled technical professionals to power your projects and operations
            </p>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              The Right Skills for Every Project
            </h2>
            <div className="text-lg text-gray-700 space-y-6">
              <p>
                In today's competitive business environment, having access to skilled technical professionals is crucial 
                for project success and operational efficiency. Our technical manpower supply services provide you with 
                qualified, experienced professionals who can seamlessly integrate into your projects and operations. 
                Whether you need specialized technicians for a short-term project or a complete technical team for 
                long-term operations, we have the expertise and network to meet your staffing requirements with 
                professionals who deliver results.
              </p>
              <p>
                Our comprehensive approach to technical manpower supply includes rigorous screening, skills assessment, 
                and ongoing support to ensure that the professionals we provide meet your specific requirements and 
                maintain the highest standards of performance. We understand that different projects require different 
                skill sets, and our diverse talent pool includes professionals from various technical disciplines, 
                all with proven track records and relevant certifications. From construction and engineering to ICT 
                and specialized industrial applications, we provide the technical expertise you need to achieve your goals.
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
              Our Technical Staffing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive technical staffing solutions for all your project needs
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
                src="/images/services/technical-manpower.jpg"
                alt="Technical Manpower Solutions"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why Choose Our Technical Staffing?
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
            Ready to Build Your Technical Team?
          </h2>
          <p className="text-xl text-ababa-off-white mb-8 max-w-3xl mx-auto">
            Let our staffing experts help you find the right technical professionals for your projects. 
            Contact us today to discuss your technical manpower requirements.
          </p>
          <Button asChild size="lg" className="bg-ababa-gold text-ababa-dark-blue hover:bg-ababa-off-white text-lg px-8 py-3">
            <Link href="/contact">Find Your Technical Team</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
