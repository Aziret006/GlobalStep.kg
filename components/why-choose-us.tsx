"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2, DollarSign, Globe, FileText, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: CheckCircle2,
    title: "Гарантированное поступление",
    description: "Мы гарантируем ваше поступление в выбранный университет",
  },
  {
    icon: DollarSign,
    title: "Возврат денег при отказе",
    description: "100% возврат средств, если получите отказ в визе",
  },
  {
    icon: Globe,
    title: "Более 15 стран",
    description: "США, Италия, Чехия, Китай, Кипр, Корея и другие страны",
  },
  {
    icon: FileText,
    title: "Полное сопровождение",
    description: "От выбора университета до получения визы и отъезда",
  },
  {
    icon: Users,
    title: "2000+ довольных студентов",
    description: "Тысячи студентов уже учатся за рубежом благодаря нам",
  },
]

export function WhyChooseUs() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Почему выбирают нас</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Мы предоставляем полный спектр услуг для обучения за рубежом
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className={`p-8 hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/50 hover:-translate-y-2 ${
                  visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
