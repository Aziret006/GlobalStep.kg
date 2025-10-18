"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"

const destinations = [
  {
    country: "США",
    flag: "🇺🇸",
    description: "Престижные университеты и широкие возможности для карьеры",
    image: "/american-university-campus-with-students.jpg",
    programs: "200+ программ",
    slug: "usa",
  },
  {
    country: "Италия",
    flag: "🇮🇹",
    description: "Европейское образование с богатой культурой и историей",
    image: "/italian-university-architecture-historic-building.jpg",
    programs: "150+ программ",
    slug: "italy",
  },
  {
    country: "Чехия",
    flag: "🇨🇿",
    description: "Доступное качественное образование в центре Европы",
    image: "/prague-university-building-charles-bridge.jpg",
    programs: "100+ программ",
    slug: "czechia",
  },
  {
    country: "Китай",
    flag: "🇨🇳",
    description: "Современные технологии и перспективы в Азии",
    image: "/modern-chinese-university-campus-technology.jpg",
    programs: "180+ программ",
    slug: "china",
  },
  {
    country: "Кипр",
    flag: "🇨🇾",
    description: "Средиземноморский климат и европейские стандарты",
    image: "/cyprus-university-by-mediterranean-sea.jpg",
    programs: "80+ программ",
    slug: "cyprus",
  },
  {
    country: "Корея",
    flag: "🇰🇷",
    description: "Инновации, технологии и динамичная культура",
    image: "/korean-university-modern-campus-seoul.jpg",
    programs: "120+ программ",
    slug: "korea",
  },
]

export function PopularDestinations() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % destinations.length)
      }, 4000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % destinations.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section id="destinations" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Популярные направления</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Выберите страну для обучения из наших проверенных программ
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {destinations.map((destination, index) => (
                <div key={index} className="min-w-full px-4">
                  <Card className="overflow-hidden border-0 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative h-80 md:h-auto overflow-hidden">
                        <img
                          src={destination.image || "/placeholder.svg"}
                          alt={destination.country}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-6 right-6 text-7xl drop-shadow-lg">{destination.flag}</div>
                        <div className="absolute bottom-6 left-6">
                          <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white font-medium">
                            {destination.programs}
                          </div>
                        </div>
                      </div>
                      <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">{destination.country}</h3>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{destination.description}</p>
                        <div className="space-y-4">
                          <Link href={`/countries/${destination.slug}`}>
                            <Button size="lg" className="w-full md:w-auto group">
                              Узнать подробнее
                              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                          <Button size="lg" variant="outline" className="w-full md:w-auto bg-transparent">
                            Получить консультацию
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-xl rounded-full p-3 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-xl rounded-full p-3 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-3 mt-8">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "bg-primary w-12 h-3"
                    : "bg-muted-foreground/30 w-3 h-3 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16 max-w-6xl mx-auto">
          {destinations.map((destination, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`p-4 rounded-xl transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-secondary/50 hover:bg-secondary hover:scale-105"
              }`}
            >
              <div className="text-4xl mb-2">{destination.flag}</div>
              <div className="font-semibold text-sm">{destination.country}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
