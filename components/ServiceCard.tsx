import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { TypeIcon as type, LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  image?: string
  href?: string
}

export default function ServiceCard({ title, description, icon: Icon, image, href }: ServiceCardProps) {
  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      )}
      <CardHeader className="text-center">
        <div className="mx-auto w-12 h-12 bg-ababa-off-white rounded-lg flex items-center justify-center mb-4 shadow-md">
          <Icon className="h-6 w-6 text-ababa-dark-blue" />
        </div>
        <CardTitle className="text-xl text-ababa-dark-blue">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <CardDescription className="mb-4 text-gray-600">{description}</CardDescription>
        {href && (
          <Button asChild variant="outline" className="w-full border-ababa-dark-blue text-ababa-dark-blue hover:bg-ababa-dark-blue hover:text-white transition-colors">
            <Link href={href}>Learn More</Link>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
