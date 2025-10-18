"use client"

import { Card } from "@/components/ui/card"
import { MessageCircle, Search, FileCheck, Plane, CheckCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const steps = [
  {
    icon: MessageCircle,
    title: "Консультация",
    description: "Бесплатная консультация по выбору страны и программы обучения",
  },
  {
    icon: Search,
    title: "Подбор университета",
    description: "Подбираем идеальный университет под ваши цели и бюджет",
  },
  {
    icon: FileCheck,
    title: "Подача документов",
    description: "Помогаем собрать и подать все необходимые документы",
  },
  {
    icon: CheckCircle,
    title: "Получение визы",
    description: "Полное сопровождение процесса получения студенческой визы",
  },
  {
    icon: Plane,
    title: "Отъезд",
    description: "Помощь с переездом и адаптацией в новой стране",
  },
]

export function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((_, index) => {
              setTimeout(() => {
                setActiveStep(index)
              }, index * 800)
            })
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-2 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Как проходит процесс поступления</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Простой и понятный путь к образованию за рубежом
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop view */}
          <div className="hidden md:block relative">
            {/* Progress line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-border">
              <div
                className="h-full bg-primary transition-all duration-1000 ease-out"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              />
            </div>

            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isActive = index <= activeStep
                return (
                  <div key={index} className="relative">
                    <Card
                      className={`p-6 text-center transition-all duration-700 ${
                        isActive ? "bg-primary text-primary-foreground shadow-xl scale-105" : "bg-card opacity-50"
                      }`}
                    >
                      <div className="flex justify-center mb-4">
                        <div
                          className={`w-16 h-16 rounded-full flex items-center justify-center ${
                            isActive ? "bg-white/20" : "bg-muted"
                          }`}
                        >
                          <Icon className="w-8 h-8" />
                        </div>
                      </div>
                      <div className="text-4xl font-bold mb-2">{index + 1}</div>
                      <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                      <p className={`text-sm ${isActive ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                        {step.description}
                      </p>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mobile view */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = index <= activeStep
              return (
                <Card
                  key={index}
                  className={`p-6 transition-all duration-700 ${
                    isActive ? "bg-primary text-primary-foreground shadow-xl" : "bg-card opacity-50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isActive ? "bg-white/20" : "bg-muted"
                      }`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <div className="text-3xl font-bold mb-2">{index + 1}</div>
                      <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                      <p className={`${isActive ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
