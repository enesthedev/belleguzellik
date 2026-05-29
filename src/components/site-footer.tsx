import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { site } from '#/data/site'
import { services } from '#/data/content'

export function SiteFooter() {
  const year = new Date().getFullYear()
  const heading =
    'text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-cream/55'
  const link = 'text-sm text-dark-soft transition-colors hover:text-cream'

  return (
    <footer className="site-footer pt-20">
      <div className="mx-auto w-[min(1240px,calc(100%-2rem))]">
        <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.4fr]">
          {/* Marka */}
          <div className="flex flex-col items-start gap-5">
            <img
              src="/belle-guzellik.png"
              alt={site.name}
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="max-w-xs text-sm leading-relaxed text-dark-soft">
              {site.motto} {site.tagline} olarak saçınıza değer katmak için
              buradayız.
            </p>
            <div className="flex gap-2">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid size-10 place-items-center border border-cream/20 text-cream/70 transition-colors hover:border-cream hover:text-cream"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid size-10 place-items-center border border-cream/20 text-cream/70 transition-colors hover:border-cream hover:text-cream"
              >
                <Facebook className="size-4" />
              </a>
            </div>
          </div>

          {/* Menü + Hizmetler */}
          <div className="grid grid-cols-2 gap-8">
            <nav aria-label="Alt menü">
              <h3 className={heading}>Menü</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className={link}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <h3 className={heading}>Hizmetler</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {services.slice(0, 5).map((s) => (
                  <li key={s.title}>
                    <a href="#hizmetler" className={link}>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* İletişim */}
          <div>
            <h3 className={heading}>İletişim</h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-dark-soft">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-start gap-3 transition-colors hover:text-cream"
                >
                  <Phone className="mt-0.5 size-4 shrink-0 text-cream/60" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 transition-colors hover:text-cream"
                >
                  <Mail className="mt-0.5 size-4 shrink-0 text-cream/60" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-cream"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0 text-cream/60" />
                  {site.address.full}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px w-full bg-cream/10" />
        <div className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-cream/40 sm:flex-row">
          <p>
            © {year} {site.name}. Tüm hakları saklıdır.
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
