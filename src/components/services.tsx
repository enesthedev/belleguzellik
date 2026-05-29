import { services } from '#/data/content'
import { Reveal } from '#/components/ui/reveal'

export function Services() {
  return (
    <section id="hizmetler" className="py-24 md:py-32">
      <div className="mx-auto grid w-[min(1240px,calc(100%-2rem))] gap-12 lg:grid-cols-[0.85fr_1.4fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-16 lg:self-start">
          <span className="island-kicker">Hizmetler</span>
          <h2 className="display-title mt-5 text-4xl text-ink md:text-[3rem]">
            Size özel <em>saç</em> dünyası
          </h2>
          <p className="mt-6 max-w-sm text-[1.02rem] leading-relaxed text-ink-soft">
            Kesimden renge, bakımdan şekillendirmeye kadar saçınızın her
            detayını uzman dokunuşlarla tamamlıyoruz.
          </p>
        </Reveal>

        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              as="article"
              delay={(i % 2) * 90}
              className="border-t border-line pt-5"
            >
              <h3 className="font-serif text-xl text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
