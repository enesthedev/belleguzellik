import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { site } from '#/data/site'
import { services } from '#/data/content'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer id="iletisim" className="site-footer scroll-mt-24 pt-16">
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
        <div className="grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.4fr]">
          {/* Marka */}
          <div className="flex flex-col items-start gap-5">
            <img src="/belle-guzellik.png" alt={site.name} className="h-16 w-auto" />
            <p className="max-w-xs text-sm leading-relaxed text-ink-soft">
              {site.motto} {site.tagline} olarak saçınıza değer katmak için
              buradayız.
            </p>
            <div className="flex gap-2">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid size-10 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-gold hover:text-gold-deep"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid size-10 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-gold hover:text-gold-deep"
              >
                <Facebook className="size-4" />
              </a>
            </div>
          </div>

          {/* Menü + Hizmetler */}
          <div className="grid grid-cols-2 gap-8">
            <nav aria-label="Alt menü">
              <h3 className="island-kicker">Menü</h3>
              <ul className="mt-5 flex flex-col gap-3 text-sm">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-ink-soft transition-colors hover:text-ink"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <h3 className="island-kicker">Hizmetler</h3>
              <ul className="mt-5 flex flex-col gap-3 text-sm">
                {services.slice(0, 5).map((s) => (
                  <li key={s.title}>
                    <a
                      href="#hizmetler"
                      className="text-ink-soft transition-colors hover:text-ink"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="island-kicker">İletişim</h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-ink-soft">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-start gap-3 transition-colors hover:text-ink"
                >
                  <Phone className="mt-0.5 size-4 shrink-0 text-gold-deep" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 transition-colors hover:text-ink"
                >
                  <Mail className="mt-0.5 size-4 shrink-0 text-gold-deep" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-ink"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0 text-gold-deep" />
                  {site.address.full}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-gold-deep" />
                <span>
                  {site.hours.map((h) => (
                    <span key={h.days} className="block">
                      {h.days}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-rule" />
        <div className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-ink-faint sm:flex-row">
          <p>
            © {year} {site.name}. Tüm hakları saklıdır.
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
