import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, GraduationCap, DollarSign, FileText, Clock, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ItalyPage() {
  const universities = [
    "Università di Bologna",
    "Politecnico di Milano",
    "Sapienza University of Rome",
    "University of Padua",
    "University of Milan",
    "University of Florence",
  ]

  const programs = [
    "Бакалавриат (3 года)",
    "Магистратура (2 года)",
    "Искусство и дизайн",
    "Архитектура",
    "Мода и стиль",
    "Кулинарное искусство",
  ]

  const requirements = [
    "Аттестат о среднем образовании",
    "Знание итальянского/английского языка",
    "Декларация о ценности диплома",
    "Мотивационное письмо",
    "Портфолио (для творческих специальностей)",
    "Медицинская страховка",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/italian-university-architecture-historic-building.jpg"
            alt="Италия"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="text-8xl mb-6">🇮🇹</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Обучение в Италии</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto text-pretty">
            Европейское образование с богатой культурой, искусством и историей
          </p>
        </div>
      </section>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/#destinations">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Назад к направлениям
          </Button>
        </Link>
      </div>

      {/* Overview */}
      <section className="py-12 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Почему Италия?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Италия - это колыбель европейской культуры и образования. Итальянские университеты предлагают качественное
            образование по доступным ценам, особенно в области искусства, дизайна, архитектуры и моды. Обучение в Италии
            дает возможность погрузиться в богатую культурную среду и получить европейский диплом.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <GraduationCap className="w-12 h-12 mx-auto mb-4 text-primary" />
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Программ обучения</div>
            </Card>
            <Card className="p-6 text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-primary" />
              <div className="text-3xl font-bold mb-2">€900-4K</div>
              <div className="text-sm text-muted-foreground">Стоимость в год</div>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
              <div className="text-3xl font-bold mb-2">3 года</div>
              <div className="text-sm text-muted-foreground">Бакалавриат</div>
            </Card>
            <Card className="p-6 text-center">
              <FileText className="w-12 h-12 mx-auto mb-4 text-primary" />
              <div className="text-3xl font-bold mb-2">Type D</div>
              <div className="text-sm text-muted-foreground">Студенческая виза</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Топ университеты</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {universities.map((uni, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {index + 1}
                    </div>
                    <div className="font-semibold text-lg">{uni}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Доступные программы</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {programs.map((program, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div className="font-medium text-lg">{program}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Требования для поступления</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {requirements.map((req, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <div className="font-medium">{req}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-12 text-center bg-gradient-to-br from-primary/10 to-accent/10">
            <h2 className="text-4xl font-bold mb-4">Готовы начать обучение в Италии?</h2>
            <p className="text-lg text-muted-foreground mb-8">Получите бесплатную консультацию от наших экспертов</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                Скачать брошюру
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
