import { createFileRoute } from '@tanstack/react-router'
import { SiteHeader } from '#/components/site-header'
import { Hero } from '#/components/hero'
import { Services } from '#/components/services'
import { HoursBand } from '#/components/hours-band'
import { Gallery } from '#/components/gallery'
import { BrandBanner } from '#/components/brand-banner'
import { Products } from '#/components/products'
import { Testimonials } from '#/components/testimonials'
import { Team } from '#/components/team'
import { Pricing } from '#/components/pricing'
import { Faq } from '#/components/faq'
import { Contact } from '#/components/contact'
import { SiteFooter } from '#/components/site-footer'
import { FloatingContact } from '#/components/floating-contact'
import { Figure } from '#/components/ui/figure'
import { contactImage } from '#/data/content'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <span id="top" aria-hidden />
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <HoursBand />
        <Gallery />
        <BrandBanner />
        <Products />
        <Testimonials />
        <Team />
        <Pricing />
        <Faq />
        <section className="w-full">
          <Figure
            src={contactImage}
            alt="Belle Güzellik'te saç bakımı"
            className="h-[42vh] w-full md:h-[56vh]"
            imgClassName="grayscale"
          />
        </section>
        <Contact />
      </main>
      <SiteFooter />
      <FloatingContact />
    </>
  )
}
