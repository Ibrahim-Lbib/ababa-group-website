import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Lightbulb, HardHat, TrendingUp, MapPin, Users, Building, Award, Target } from 'lucide-react'

export default function AboutPage() {
  const coreValues = [
    {
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices in all our dealings.",
      icon: Shield
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and creative solutions to deliver cutting-edge results.",
      icon: Lightbulb
    },
    {
      title: "Safety",
      description: "We prioritize the safety of our team, clients, and communities in every project we undertake.",
      icon: HardHat
    },
    {
      title: "Growth",
      description: "We are committed to sustainable growth that benefits our clients, employees, and communities.",
      icon: TrendingUp
    }
  ]

  const fastFacts = [
    {
      title: "HQ: Kabu South",
      description: "White House – Kabu South, Luri Highway",
      icon: MapPin
    },
    {
      title: "50+ Completed Projects",
      description: "Successfully delivered across multiple sectors",
      icon: Building
    },
    {
      title: "7 Service Sectors",
      description: "Comprehensive multi-industry expertise",
      icon: Award
    },
    {
      title: "30+ Happy Clients",
      description: "Trusted partnerships across East Africa",
      icon: Users
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-ababa-dark-blue to-ababa-accent-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Rooted in South Sudan. Reaching East Africa.
          </h1>
          <p className="text-xl text-ababa-off-white max-w-3xl mx-auto">
            Discover the story behind South Sudan's most trusted multi-sector business partner
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              About ABABA GROUP LIMITED
            </h2>
            <div className="text-lg text-gray-700 space-y-6">
              <p>
                ABABA GROUP LIMITED is a 100% South Sudanese-owned enterprise that has established itself as a leading 
                multi-sector business partner across South Sudan and East Africa. Since our inception, we have been 
                committed to powering progress through innovative solutions and exceptional service delivery.
              </p>
              <p>
                Our comprehensive portfolio spans eight key sectors: Construction & Real Estate, ICT & Office Automation, 
                Logistics & Clearance, Procurement, Agribusiness, Hospitality, Property Management, and Technical Manpower Supply. 
                This diverse expertise allows us to serve as a one-stop solution for businesses and organizations seeking 
                reliable, professional services.
              </p>
              <p>
                With our headquarters strategically located in Kabu South and operations extending throughout the region, 
                we combine deep local knowledge with international best practices to deliver results that exceed expectations. 
                Our team of skilled professionals is dedicated to building lasting partnerships and contributing to the 
                economic development of South Sudan and the broader East African region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-ababa-off-white rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-ababa-dark-blue" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-ababa-gold to-ababa-accent-blue rounded-full mb-6">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-ababa-dark-blue mb-6">
                Our Mission
              </h2>
            </div>
            
            <div className="bg-gradient-to-br from-ababa-off-white to-white rounded-2xl p-8 md:p-12 border border-ababa-gold/20 shadow-none border-none opacity-100 bg-transparent text-transparent">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-semibold text-ababa-dark-blue mb-6 italic leading-relaxed">
                  "To empower businesses and communities across South Sudan and East Africa through innovative, 
                  reliable, and sustainable multi-sector solutions that drive economic growth and social development."
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-ababa-dark-blue mb-4">What We Do</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We deliver comprehensive business solutions across construction, technology, logistics, 
                      agriculture, and more, ensuring our clients have access to world-class services that 
                      meet international standards while understanding local needs.
                    </p>
                  </div>
                  
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-ababa-dark-blue mb-4">How We Do It</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Through strategic partnerships, continuous innovation, skilled professionals, and 
                      unwavering commitment to quality, we transform challenges into opportunities and 
                      visions into reality for our clients and communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-ababa-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Vision
            </h2>
            <div className="rounded-lg p-8 shadow-none">
              <p className="text-2xl text-ababa-dark-blue font-semibold italic">
                "To become East Africa's most trusted multi-sector business partner."
              </p>
              <p className="text-lg text-gray-700 mt-6">
                We envision a future where ABABA GROUP LIMITED is synonymous with excellence, reliability, and innovation 
                across all sectors we serve. Our goal is to be the first choice for businesses and organizations seeking 
                comprehensive solutions that drive growth and create lasting value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fast Facts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ababa-dark-blue mb-4">
              Fast Facts
            </h2>
            <p className="text-lg text-gray-600">
              Key highlights that demonstrate our growth and impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fastFacts.map((fact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-ababa-off-white rounded-full flex items-center justify-center mb-4">
                    <fact.icon className="h-8 w-8 text-ababa-dark-blue" />
                  </div>
                  <CardTitle className="text-xl text-ababa-dark-blue">{fact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{fact.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
