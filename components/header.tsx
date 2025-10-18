"use client"

import { Button } from "@/components/ui/button"
import { GraduationCap, Menu, X, Phone } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { label: "Главная", href: "#" },
    { label: "Страны", href: "#destinations" },
    { label: "О нас", href: "#about" },
    { label: "Отзывы", href: "#testimonials" },
    { label: "Контакты", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div
              className={`p-2 rounded-xl transition-all duration-300 ${
                isScrolled ? "bg-primary" : "bg-white/10 backdrop-blur-sm"
              }`}
            >
              <GraduationCap className={`w-8 h-8 ${isScrolled ? "text-white" : "text-white"}`} />
            </div>
            <div>
              <div className={`text-xl font-bold transition-colors ${isScrolled ? "text-primary" : "text-white"}`}>
                GlobalStep
              </div>
              <div className={`text-xs transition-colors ${isScrolled ? "text-muted-foreground" : "text-white/80"}`}>
                Образование за рубежом
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+996509400080" className="flex items-center gap-2">
              <Button
                variant={isScrolled ? "outline" : "secondary"}
                size="sm"
                className={
                  isScrolled ? "" : "bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20"
                }
              >
                <Phone className="w-4 h-4" />
                +996 509 400 080
              </Button>
            </a>
            <Button size="sm" className={isScrolled ? "" : "bg-white text-primary hover:bg-white/90"}>
              Консультация
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden py-4 border-t border-border/10 ${
              isScrolled ? "" : "bg-[#0056FF] rounded-2xl px-4"
            }`}
          >
            <nav className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`font-medium transition-colors hover:text-primary ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border/10">
                <a href="tel:+996509400080">
                  <Button
                    variant="outline"
                    size="sm"
                    className={`w-full ${
                      isScrolled
                        ? "bg-transparent text-foreground"
                        : "bg-transparent text-white border-white"
                    }`}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    +996 509 400 080
                  </Button>
                </a>
                <Button
                  size="sm"
                  className={`w-full ${isScrolled ? "" : "bg-white text-[#0056FF]"}`}
                >
                  Консультация
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
