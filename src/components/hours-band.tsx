import { site, whatsappLink } from '#/data/site'
import { aboutImage, features } from '#/data/content'
import { Figure } from '#/components/ui/figure'
import { Reveal } from '#/components/ui/reveal'
import { buttonVariants } from '#/components/ui/button'

export function HoursBand() {
  return (
    <section className="py-8">
      <div className="mx-auto w-[min(1240px,calc(100%-2rem))]">
        <div className="grid overflow-hidden border border-line lg:grid-cols-2">
          <Figure
            src={aboutImage}
            alt="Belle Güzellik salonundan bir an"
            className="aspect-[4/3] lg:aspect-auto lg:min-h-[500px]"
          />

          <div className="flex flex-col justify-center gap-8 bg-paper px-7 py-14 sm:px-12">
            <Reveal>
              <span className="island-kicker">Randevu</span>
              <h2 className="display-title mt-5 text-3xl text-ink md:text-[2.6rem]">
                En güncel kesim, renk ve bakımı bugün <em>Belle'de</em> yaşayın.
              </h2>
            </Reveal>

            <Reveal
              as="ul"
              delay={80}
              className="flex flex-wrap gap-x-6 gap-y-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-ink-faint"
            >
              {features.map((f) => (
                <li key={f.title}>{f.title}</li>
              ))}
            </Reveal>

            <Reveal delay={140} className="flex flex-col gap-6">
              <dl className="text-sm">
                {site.hours.map((h) => (
                  <div
                    key={h.days}
                    className="flex items-center justify-between border-t border-line py-3"
                  >
                    <dt className="text-ink-soft">{h.days}</dt>
                    <dd className="font-medium text-ink">{h.time}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: 'solid', size: 'lg' })}
              >
                Randevu Al
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
