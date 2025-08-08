"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'

const heroImages = [
  {
    src: '/images/construction-hero.png',
    alt: 'Construction site with tower cranes at sunset'
  },
  {
    src: '/images/hero-2.jpg',
    alt: 'Modern residential building with solar panels'
  },
  {
    src: '/images/hero-3.jpg',
    alt: 'Professional office building with landscaping'
  }
]

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover transform scale-105"
            style={{
              filter: 'brightness(1.1) contrast(1.1) saturate(1.2)',
            }}
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-ababa-dark-blue/85 via-ababa-dark-blue/70 to-ababa-accent-blue/75"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-ababa-gold shadow-lg' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
