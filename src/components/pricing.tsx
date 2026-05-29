import { pricing } from '#/data/pricing'
import { Reveal } from '#/components/ui/reveal'

export function Pricing() {
  return (
    <section id="fiyatlar" className="py-24 md:py-32">
      <div className="mx-auto grid w-[min(1240px,calc(100%-2rem))] gap-12 lg:grid-cols-[0.85fr_1.4fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-16 lg:self-start">
          <span className="island-kicker">Fiyatlar</span>
          <h2 className="display-title mt-5 text-4xl text-ink md:text-[3rem]">
            Hizmet <em>fiyatları</em>
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-soft">
            Fiyatlar saç uzunluğu ve uygulama detayına göre değişebilir; net
            bilgi için randevu sırasında sizi bilgilendiriyoruz.
          </p>
        </Reveal>

        <ul>
          {pricing.map((item, i) => (
            <Reveal
              key={item.name}
              as="li"
              delay={(i % 2) * 70}
              className="flex items-baseline justify-between gap-6 border-t border-line py-5 last:border-b"
            >
              <div>
                <h3 className="font-serif text-lg text-ink">{item.name}</h3>
                <p className="mt-1 text-sm text-ink-soft">{item.desc}</p>
              </div>
              <span className="font-serif text-xl text-ink">{item.price}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
