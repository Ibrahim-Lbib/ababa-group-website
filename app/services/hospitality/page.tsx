import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Hotel, Camera, Map, Users, Star, Compass, Mountain, Calendar } from 'lucide-react'

export default function HospitalityPage() {
  const services = [
    {
      title: "Tourism Development",
      description: "Destination development and tourism infrastructure planning",
      icon: Mountain
    },
    {
      title: "Hospitality Management",
      description: "Professional hotel and accommodation management services",
      icon: Hotel
    },
    {
      title: "Cultural Tourism",
      description: "Authentic cultural experiences and community-based tourism",
      icon: Users
    },
    {
      title: "Event Management",
      description: "Corporate events, conferences, and special occasion planning",
      icon: Calendar
    }
  ]

  const benefits = [
    "Expert knowledge of South Sudan's unique cultural heritage and attractions",
    "Professional hospitality management with international standards",
    "Sustainable tourism practices that benefit local communities",
    "Comprehensive event planning and management services",
    "Marketing and promotion of South Sudan as a tourism destination",
    "Training programs for hospitality and tourism professionals",
    "Partnership development with international tourism operators",
    "Safety and security protocols for tourist activities",
    "Customized tour packages for different market segments",
    "Infrastructure development consulting for tourism projects"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/hospitality-tourism.jpg"
            alt="Hospitality & Tourism"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ababa-dark-blue/90 via-ababa-dark-blue/70 to-ababa-accent-blue/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Hospitality & Tourism
            </h1>
            <p className="text-xl md:text-2xl text-ababa-off-white">
              Showcasing South Sudan's rich culture and natural beauty to the world
            </p>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Unlocking South Sudan's Tourism Potential
            </h2>
            <div className="text-lg text-gray-700 space-y-6">
              <p>
                South Sudan is a land of incredible natural beauty, rich cultural heritage, and warm hospitality that 
                offers unique experiences for visitors from around the world. Our hospitality and tourism services are 
                designed to showcase the best of what South Sudan has to offer while developing sustainable tourism 
                infrastructure that benefits local communities. From the vast wetlands of the Sudd to the vibrant 
                cultural traditions of our diverse ethnic groups, we create authentic experiences that leave lasting 
                impressions on visitors while contributing to economic development.
              </p>
              <p>
                Our comprehensive approach to hospitality and tourism development includes destination marketing, 
                infrastructure development, capacity building, and service delivery that meets international standards. 
                We work with government agencies, private sector partners, and local communities to develop tourism 
                products that are both economically viable and culturally authentic. Through professional hospitality 
                management and innovative tourism programming, we are positioning South Sudan as an emerging destination 
                for adventure tourism, cultural experiences, and business travel.
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
              Our Hospitality & Tourism Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive tourism development and hospitality management solutions
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
                src="/images/services/hospitality-tourism.jpg"
                alt="Hospitality & Tourism Solutions"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why Choose Our Tourism Services?
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
            Ready to Develop Your Tourism Project?
          </h2>
          <p className="text-xl text-ababa-off-white mb-8 max-w-3xl mx-auto">
            Let our tourism experts help you create memorable experiences and develop sustainable tourism initiatives. 
            Contact us today to discuss your hospitality and tourism needs.
          </p>
          <Button asChild size="lg" className="bg-ababa-gold text-ababa-dark-blue hover:bg-ababa-off-white text-lg px-8 py-3">
            <Link href="/contact">Start Your Tourism Journey</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
