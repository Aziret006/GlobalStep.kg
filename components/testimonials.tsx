"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Айгуль Токтогулова",
    country: "США",
    university: "University of California",
    image: "/smiling-female-student.png",
    text: "GlobalStep помогли мне поступить в университет мечты! Весь процесс прошел гладко, от подачи документов до получения визы. Очень благодарна команде!",
    rating: 5,
  },
  {
    name: "Бекжан Асанов",
    country: "Италия",
    university: "Politecnico di Milano",
    image: "/male-student-happy.jpg",
    text: "Профессиональный подход и внимание к деталям. Получил стипендию благодаря их помощи в подготовке документов. Рекомендую всем!",
    rating: 5,
  },
  {
    name: "Нургуль Сыдыкова",
    country: "Чехия",
    university: "Charles University",
    image: "/female-student-graduation.png",
    text: "Отличная поддержка на всех этапах! Особенно помогли с подготовкой к собеседованию и оформлением визы. Теперь учусь в Праге!",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Отзывы наших студентов</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Узнайте, что говорят студенты, которые уже учатся за рубежом
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`p-8 md:p-12 transition-all duration-700 ${
                  index === currentIndex
                    ? "opacity-100 scale-100 relative"
                    : "opacity-0 scale-95 absolute inset-0 pointer-events-none"
                }`}
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <Avatar className="w-24 h-24 border-4 border-primary/20">
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-lg md:text-xl mb-6 leading-relaxed text-pretty">"{testimonial.text}"</p>
                    <div>
                      <div className="font-bold text-lg">{testimonial.name}</div>
                      <div className="text-muted-foreground">
                        {testimonial.university}, {testimonial.country}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-8" : "bg-muted"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
