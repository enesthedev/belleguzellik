import { useState } from 'react'
import { site } from '#/data/site'
import { heroImage } from '#/data/content'
import { Figure } from '#/components/ui/figure'

// Türk cep telefonu formatı: 0XXX XXX XX XX
function formatTrPhone(value: string) {
  let d = value.replace(/\D/g, '')
  if (d.startsWith('90')) d = d.slice(2)
  if (d.startsWith('0')) d = d.slice(1)
  d = d.slice(0, 10)
  const groups = [
    d.slice(0, 3),
    d.slice(3, 6),
    d.slice(6, 8),
    d.slice(8, 10),
  ].filter(Boolean)
  return groups.length ? '0' + groups.join(' ') : ''
}

function BookingBar() {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [phone, setPhone] = useState('')

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const parts = [
      'Merhaba, randevu almak istiyorum.',
      date && `Tarih: ${date}`,
      time && `Saat: ${time}`,
      phone && `Telefon: ${phone}`,
    ].filter(Boolean)
    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(parts.join(' '))}`
    window.open(url, '_blank', 'noopener')
  }

  const field =
    'h-12 w-full bg-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none'

  return (
    <form
      onSubmit={submit}
      className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-[1fr_1fr_1fr_auto]"
    >
      <label className="flex flex-col bg-paper px-5 py-2">
        <span className="text-[0.6rem] uppercase tracking-[0.2em] text-ink-faint">
          Tarih
        </span>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={field}
        />
      </label>
      <label className="flex flex-col bg-paper px-5 py-2">
        <span className="text-[0.6rem] uppercase tracking-[0.2em] text-ink-faint">
          Saat
        </span>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className={field}
        />
      </label>
      <label className="flex flex-col bg-paper px-5 py-2">
        <span className="text-[0.6rem] uppercase tracking-[0.2em] text-ink-faint">
          Telefon
        </span>
        <input
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          maxLength={14}
          pattern="0[5][0-9]{2} [0-9]{3} [0-9]{2} [0-9]{2}"
          title="Örnek: 0543 896 65 43"
          value={phone}
          onChange={(e) => setPhone(formatTrPhone(e.target.value))}
          placeholder="0543 896 65 43"
          className={field}
        />
      </label>
      <button
        type="submit"
        className="bg-ink px-9 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-cream transition-colors hover:bg-[#2c2520]"
      >
        Randevu Al
      </button>
    </form>
  )
}

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] w-full flex-col overflow-hidden">
      <Figure
        src={heroImage}
        alt="Belle Güzellik salonu"
        priority
        className="absolute inset-0 h-full w-full"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/25 to-ink/65"
      />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-24 text-center text-cream">
        <span
          className="rise-in text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-cream/80"
          style={{ animationDelay: '60ms' }}
        >
          {site.address.district.split(' / ')[1] ?? 'Trabzon'} · {site.tagline}
        </span>
        <h1
          className="display-xl rise-in mt-6 text-[clamp(4.5rem,17vw,15rem)] text-cream"
          style={{ animationDelay: '140ms' }}
        >
          Belle
        </h1>
        <p
          className="rise-in mt-2 max-w-md text-base text-cream/85 sm:text-lg"
          style={{ animationDelay: '240ms' }}
        >
          {site.motto}
        </p>
      </div>

      <div className="relative z-10 mx-auto mb-10 w-[min(1100px,calc(100%-2rem))]">
        <BookingBar />
      </div>
    </section>
  )
}
