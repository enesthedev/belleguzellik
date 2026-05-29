import { createFileRoute } from '@tanstack/react-router'
import { SiteHeader } from '#/components/site-header'
import { Hero } from '#/components/hero'
import { StatsBar } from '#/components/stats-bar'
import { Services } from '#/components/services'
import { Features } from '#/components/features'
import { Gallery } from '#/components/gallery'
import { About } from '#/components/about'
import { Testimonials } from '#/components/testimonials'
import { Faq } from '#/components/faq'
import { CtaSection } from '#/components/cta-section'
import { SiteFooter } from '#/components/site-footer'
import { FloatingContact } from '#/components/floating-contact'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <span id="top" aria-hidden />
      <SiteHeader />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <Features />
        <Gallery />
        <About />
        <Testimonials />
        <Faq />
        <CtaSection />
      </main>
      <SiteFooter />
      <FloatingContact />
    </>
  )
}
