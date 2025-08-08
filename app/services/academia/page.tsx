import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, GraduationCap, BookOpen, Users, Award } from 'lucide-react'

export default function AcademiaPage() {
  const services = [
    {
      title: "Educational Consulting",
      description: "Strategic planning and development for educational institutions",
      icon: GraduationCap,
      image: "/images/services/academia-education.jpg"
    },
    {
      title: "Training Programs",
      description: "Professional development and capacity building initiatives",
      icon: BookOpen,
      image: "/images/services/academia-education.jpg"
    },
    {
      title: "Academic Development",
      description: "Curriculum development and educational resource creation",
      icon: Award,
      image: "/images/services/academia-education.jpg"
    },
    {
      title: "Institutional Support",
      description: "Comprehensive support for schools and educational organizations",
      icon: Users,
      image: "/images/services/academia-education.jpg"
    }
  ]

  const benefits = [
    "Experienced educational consultants with local and international expertise",
    "Customized training programs tailored to specific institutional needs",
    "Modern teaching methodologies and educational best practices",
    "Comprehensive curriculum development and assessment tools",
    "Ongoing support and mentorship for educational leaders",
    "Technology integration for enhanced learning experiences"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ababa-dark-blue to-ababa-accent-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Education—Building Tomorrow's Leaders
            </h1>
            <p className="text-xl text-ababa-off-white mb-8">
              Comprehensive educational services and training programs that transform learning experiences and build capacity across South Sudan
            </p>
            <Button asChild size="lg" className="bg-ababa-gold text-ababa-dark-blue hover:bg-ababa-off-white text-lg px-8 py-3">
              <Link href="/contact">Start Your Educational Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transforming Education in South Sudan
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Education is the foundation of progress. We understand the unique challenges facing educational institutions 
              in South Sudan and provide tailored solutions that enhance learning outcomes, build capacity, and create 
              sustainable educational systems that serve communities for generations.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <p className="text-xl font-semibold text-ababa-dark-blue">
                "Investing in education today builds the leaders of tomorrow."
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
              Our Educational Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive educational solutions designed to enhance learning outcomes and institutional effectiveness
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
              Why Choose Our Educational Services?
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

      {/* Impact Section */}
      <section className="py-16 bg-ababa-dark-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Creating Educational Impact
          </h2>
          <p className="text-xl text-ababa-off-white mb-8 max-w-4xl mx-auto">
            Our educational initiatives have reached thousands of students and educators across South Sudan, 
            providing quality training, resources, and support that enhance learning outcomes and build 
            sustainable educational systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-ababa-off-white">Educators Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-ababa-off-white">Institutions Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-ababa-off-white">Students Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Education?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's discuss your educational goals and develop a customized program that meets your institution's needs. 
            Contact us today for a free consultation.
          </p>
          <Button asChild size="lg" className="bg-ababa-dark-blue hover:bg-ababa-accent-blue text-lg px-8 py-3">
            <Link href="/contact">Start Your Educational Journey</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
