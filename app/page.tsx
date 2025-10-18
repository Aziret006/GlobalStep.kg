import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyChooseUs } from "@/components/why-choose-us"
import { PopularDestinations } from "@/components/popular-destinations"
import { Testimonials } from "@/components/testimonials"
import { ProcessSteps } from "@/components/process-steps"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhyChooseUs />
      <PopularDestinations />
      <Testimonials />
      <ProcessSteps />
      <ContactForm />
      <Footer />
    </main>
  )
}
