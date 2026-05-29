import { Quote, Star } from 'lucide-react'
import { testimonials } from '#/data/content'
import { SectionHeading } from '#/components/section-heading'
import { Reveal } from '#/components/ui/reveal'

export function Testimonials() {
  return (
    <section id="yorumlar" className="py-20 md:py-28">
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
        <SectionHeading
          kicker="Müşteri Yorumları"
          title={
            <>
              Misafirlerimiz <em>ne diyor?</em>
            </>
          }
          subtitle="Belle Güzellik’i tercih eden misafirlerimizin deneyimleri."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              as="article"
              delay={i * 90}
              className="feature-card flex h-full flex-col rounded-2xl p-7"
            >
              <Quote className="size-8 text-gold/50" aria-hidden />
              <p className="mt-4 flex-1 text-[0.97rem] leading-relaxed text-ink">
                “{t.quote}”
              </p>
              <div className="mt-6 flex" aria-label={`${t.rating} yıldız`}>
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="size-4 fill-gold text-gold" />
                ))}
              </div>
              <div className="mt-4 border-t border-line pt-4">
                <p className="font-serif text-lg text-ink">{t.name}</p>
                <p className="text-sm text-ink-soft">{t.treatment}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
