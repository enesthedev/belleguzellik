import { Star } from 'lucide-react'
import { cn } from '#/lib/utils'
import { site, whatsappLink } from '#/data/site'
import { heroImage } from '#/data/content'
import { buttonVariants } from '#/components/ui/button'
import { Figure } from '#/components/ui/figure'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-16 sm:pt-20 md:pb-24">
      {/* Atmosfer */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 size-[34rem] rounded-full bg-blush/30 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 right-0 size-[28rem] rounded-full bg-gold/20 blur-[120px]"
      />

      <div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="max-w-xl">
          <span className="island-kicker rise-in" style={{ animationDelay: '40ms' }}>
            {site.address.district.split(' / ')[1] ?? 'Trabzon'} · {site.tagline}
          </span>

          <h1
            className="display-title rise-in mt-6 text-[2.7rem] leading-[1.04] text-ink sm:text-5xl md:text-6xl"
            style={{ animationDelay: '120ms' }}
          >
            Saçınızı <em>uzman</em> ellere bırakın.
          </h1>

          <p
            className="rise-in mt-6 max-w-lg text-[1.05rem] leading-relaxed text-ink-soft"
            style={{ animationDelay: '220ms' }}
          >
            Belle Güzellik’te kesimden renge, balyajdan keratin bakımına ve gelin
            saçına kadar her hizmet; hijyen, deneyim ve size özel ilgiyle sunulur.
          </p>

          <div
            className="rise-in mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: '320ms' }}
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: 'solid', size: 'lg' })}
            >
              Randevu Al
            </a>
            <a
              href="#hizmetler"
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
            >
              Hizmetleri Keşfet
            </a>
          </div>

          <div
            className="rise-in mt-10 flex items-center gap-4"
            style={{ animationDelay: '420ms' }}
          >
            <div className="flex" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-sm text-ink-soft">
              <span className="font-semibold text-ink">4.9/5</span> · 5.000+ mutlu
              müşteri
            </p>
          </div>
        </div>

        {/* Görsel kompozisyon */}
        <div className="rise-in relative" style={{ animationDelay: '260ms' }}>
          <div className="island-shell overflow-hidden rounded-[2rem] p-2">
            <Figure
              src={heroImage}
              alt="Belle Güzellik saç uygulaması"
              priority
              className="aspect-[4/5] w-full rounded-[1.6rem]"
            />
          </div>

          <div className="island-shell absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-2xl px-5 py-4 sm:flex">
            <span className="grid size-10 place-items-center rounded-full bg-gold/15 text-gold-deep">
              <Star className="size-5 fill-gold-soft" />
            </span>
            <div className="leading-tight">
              <p className="font-serif text-lg text-ink">10+ Yıl</p>
              <p className="text-xs text-ink-soft">Uzman deneyim</p>
            </div>
          </div>

          <div
            aria-hidden
            className={cn(
              'absolute -top-5 -right-3 hidden rotate-3 rounded-full px-4 py-2 sm:block',
              'island-shell font-serif italic text-rose',
            )}
          >
            Belle
          </div>
        </div>
      </div>
    </section>
  )
}
