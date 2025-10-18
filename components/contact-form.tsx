"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle, Send } from "lucide-react"
import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    country: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - integrate with WhatsApp API
    const message = `Здравствуйте! Меня зовут ${formData.name}. Интересует обучение в ${formData.country}. Мой телефон: ${formData.phone}`
    const whatsappUrl = `https://wa.me/996509400080?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-2xl border-2">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Получите бесплатную консультацию</h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Оставьте заявку, и мы свяжемся с вами в течение 15 минут
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input
                    id="name"
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+996 XXX XXX XXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Страна интереса</Label>
                <Select
                  value={formData.country}
                  onValueChange={(value) => setFormData({ ...formData, country: value })}
                  required
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Выберите страну" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="США">США</SelectItem>
                    <SelectItem value="Италия">Италия</SelectItem>
                    <SelectItem value="Чехия">Чехия</SelectItem>
                    <SelectItem value="Китай">Китай</SelectItem>
                    <SelectItem value="Кипр">Кипр</SelectItem>
                    <SelectItem value="Корея">Корея</SelectItem>
                    <SelectItem value="Другая">Другая страна</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" size="lg" className="flex-1 h-14 text-lg">
                  <Send className="mr-2 w-5 h-5" />
                  Отправить заявку
                </Button>
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  className="flex-1 h-14 text-lg bg-transparent"
                  onClick={() => window.open("https://wa.me/996509400080", "_blank")}
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Написать в WhatsApp
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
