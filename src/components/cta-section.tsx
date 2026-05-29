import { MessageCircle, Phone } from 'lucide-react'
import { site, whatsappLink } from '#/data/site'
import { buttonVariants } from '#/components/ui/button'
import { Reveal } from '#/components/ui/reveal'

export function CtaSection() {
  return (
    <section className="py-10 md:py-16">
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
        <Reveal className="island-shell relative overflow-hidden rounded-[2rem] px-7 py-14 text-center ring-1 ring-gold/25 sm:px-12 md:py-20">
          {/* Hero ile aynı dilde sıcak parıltı */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 size-[28rem] -translate-x-1/2 rounded-full bg-blush/25 blur-[120px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -bottom-28 size-[24rem] rounded-full bg-gold/20 blur-[120px]"
          />

          <span className="island-kicker mx-auto">Randevu</span>
          <h2 className="display-title mx-auto mt-5 max-w-2xl text-3xl text-ink sm:text-4xl md:text-5xl">
            Kendinize ayıracağınız <em>bir an</em> için buradayız.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[1.02rem] leading-relaxed text-ink-soft">
            Size en uygun gün ve saati birlikte planlayalım. Sorularınız için bir
            telefon ya da mesaj kadar yakınız.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: 'whatsapp', size: 'lg' })}
            >
              <MessageCircle /> WhatsApp’tan Yaz
            </a>
            <a
              href={site.phoneHref}
              className={buttonVariants({ variant: 'solid', size: 'lg' })}
            >
              <Phone /> {site.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
