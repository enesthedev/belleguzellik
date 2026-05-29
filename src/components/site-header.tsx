import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '#/lib/utils'
import { site, whatsappLink } from '#/data/site'
import { buttonVariants } from '#/components/ui/button'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="relative z-40 border-b border-line/60">
      <div className="mx-auto flex h-20 w-[min(1180px,calc(100%-2rem))] items-center justify-between gap-4">
        <a href="#top" className="flex items-center" aria-label={site.name}>
          <img
            src="/belle-guzellik.png"
            alt={site.name}
            className="h-12 w-auto sm:h-14"
          />
        </a>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Ana menü">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-[0.78rem] font-medium uppercase tracking-[0.18em]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={open}
          className="grid size-11 place-items-center rounded-full border border-line text-ink lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      <div aria-hidden className="gold-rule opacity-50" />

      {/* Mobil menü */}
      <div
        className={cn(
          'overflow-hidden border-t border-line bg-[var(--header-bg)] backdrop-blur-md transition-[max-height,opacity] duration-300 lg:hidden',
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav
          className="mx-auto flex w-[min(1180px,calc(100%-2rem))] flex-col gap-1 py-4"
          aria-label="Mobil menü"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className={cn(buttonVariants({ variant: 'solid', size: 'md' }), 'mt-2')}
          >
            Randevu Al
          </a>
        </nav>
      </div>
    </header>
  )
}
