import { features } from '#/data/content'
import { Reveal } from '#/components/ui/reveal'

export function Features() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
        <Reveal className="island-shell relative overflow-hidden rounded-[2rem] px-7 py-14 sm:px-12 md:py-20">
          {/* Açık zemin + sıcak altın atmosfer */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                'radial-gradient(120% 120% at 85% -10%, rgba(199,162,91,0.16), transparent 55%)',
            }}
          />
          <div className="max-w-2xl">
            <span className="island-kicker">Neden Belle?</span>
            <h2 className="display-title mt-5 text-3xl text-ink sm:text-4xl">
              Stil ve özeni <em>bir arada</em> sunuyoruz.
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="flex flex-col gap-4 bg-paper/80 p-8 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid size-12 place-items-center rounded-full border border-gold/40 text-gold-deep">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-serif text-sm text-gold-deep/70">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-ink">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
