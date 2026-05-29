import { Quote, Star } from 'lucide-react'
import { testimonials } from '#/data/content'
import { Reveal } from '#/components/ui/reveal'

export function Testimonials() {
  return (
    <section id="yorumlar" className="py-24 md:py-32">
      <div className="mx-auto w-[min(1240px,calc(100%-2rem))]">
        <Reveal className="flex flex-col gap-5">
          <span className="island-kicker">Müşteri Yorumları</span>
          <h2 className="display-title text-4xl text-ink md:text-[3rem]">
            Misafirlerimiz <em>ne diyor?</em>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              as="article"
              delay={i * 90}
              className="flex h-full flex-col bg-paper p-8 sm:p-10"
            >
              <Quote className="size-7 text-stone" aria-hidden />
              <p className="mt-5 flex-1 text-[1.05rem] leading-relaxed text-ink">
                “{t.quote}”
              </p>
              <div
                className="mt-6 flex gap-0.5"
                aria-label={`${t.rating} yıldız`}
              >
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="size-3.5 fill-ink text-ink" />
                ))}
              </div>
              <div className="mt-5 border-t border-line pt-4">
                <p className="font-serif text-lg text-ink">{t.name}</p>
                <p className="text-[0.7rem] uppercase tracking-[0.16em] text-ink-faint">
                  {t.treatment}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
