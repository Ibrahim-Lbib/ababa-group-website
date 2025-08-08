"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    name: "John Makuei",
    company: "Juba Construction Ltd",
    content: "ABABA GROUP delivered our office complex on time and within budget. Their professionalism and attention to detail exceeded our expectations.",
    rating: 5
  },
  {
    name: "Sarah Nyong",
    company: "East Africa Logistics",
    content: "Their logistics and clearance services have streamlined our operations significantly. We've saved both time and money working with ABABA GROUP.",
    rating: 5
  },
  {
    name: "Michael Deng",
    company: "Nile Tech Solutions",
    content: "The ICT infrastructure they installed has transformed our business operations. Excellent technical expertise and ongoing support.",
    rating: 5
  }
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="bg-ababa-off-white">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-lg text-gray-700 mb-6 italic">
            "{testimonials[currentIndex].content}"
          </blockquote>
          <div>
            <p className="font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
            <p className="text-gray-600">{testimonials[currentIndex].company}</p>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-center space-x-4 mt-6">
        <Button variant="outline" size="icon" onClick={prevTestimonial}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={nextTestimonial}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex justify-center space-x-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-ababa-dark-blue' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
