import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { site, whatsappLink } from '#/data/site'
import { Reveal } from '#/components/ui/reveal'
import { buttonVariants } from '#/components/ui/button'

const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  site.address.full,
)}&output=embed`

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const text = `Merhaba, ben ${name}.\nE-posta: ${email}\n\n${message}`
    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener')
  }

  const field =
    'w-full border-0 border-b border-line bg-transparent py-3 text-sm text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none'

  return (
    <section id="iletisim" className="py-24 md:py-32">
      <div className="mx-auto w-[min(1240px,calc(100%-2rem))]">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.3fr] lg:gap-16">
          <Reveal className="flex flex-col gap-7">
            <span className="island-kicker">İletişim</span>
            <h2 className="display-title text-4xl text-ink md:text-[3rem]">
              Birlikte güzel bir <em>başlangıç</em> yapalım.
            </h2>
            <ul className="flex flex-col gap-4 text-sm text-ink-soft">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-ink" />
                <a
                  href={site.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-ink"
                >
                  {site.address.full}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-ink" />
                <a href={site.phoneHref} className="hover:text-ink">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-ink" />
                <a href={`mailto:${site.email}`} className="hover:text-ink">
                  {site.email}
                </a>
              </li>
            </ul>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className={`${buttonVariants({ variant: 'whatsapp', size: 'lg' })} mt-auto self-start`}
            >
              WhatsApp'tan Yaz
            </a>
          </Reveal>

          <Reveal
            as="form"
            delay={120}
            onSubmit={submit}
            className="flex flex-col gap-6"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-1">
                <span className="text-[0.62rem] uppercase tracking-[0.2em] text-ink-faint">
                  Ad Soyad
                </span>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={field}
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-[0.62rem] uppercase tracking-[0.2em] text-ink-faint">
                  E-posta
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={field}
                />
              </label>
            </div>
            <label className="flex flex-col gap-1">
              <span className="text-[0.62rem] uppercase tracking-[0.2em] text-ink-faint">
                Mesajınız
              </span>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${field} resize-none`}
              />
            </label>
            <button
              type="submit"
              className={`${buttonVariants({ variant: 'solid', size: 'lg' })} mt-auto self-start`}
            >
              Gönder
            </button>
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-16 border border-line p-2">
          <iframe
            src={mapEmbed}
            title={`${site.name} konumu`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[360px] w-full"
          />
        </Reveal>
      </div>
    </section>
  )
}
