import { services } from '#/data/content'
import { SectionHeading } from '#/components/section-heading'
import { Reveal } from '#/components/ui/reveal'

export function Services() {
  return (
    <section id="hizmetler" className="py-20 md:py-28">
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
        <SectionHeading
          kicker="Hizmetlerimiz"
          title={
            <>
              Size özel <em>saç</em> dünyası
            </>
          }
          subtitle="Kesimden renge, bakımdan şekillendirmeye kadar saçınızın her detayını uzman dokunuşlarla tamamlıyoruz."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal
                key={service.title}
                as="article"
                delay={(i % 4) * 80}
                className="feature-card group flex h-full flex-col rounded-2xl p-7"
              >
                <span className="grid size-13 place-items-center rounded-2xl bg-gradient-to-br from-blush-soft to-gold-soft/70 text-rose transition-colors duration-300 group-hover:from-gold/25 group-hover:text-gold-deep">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-6 font-serif text-xl text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {service.description}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
