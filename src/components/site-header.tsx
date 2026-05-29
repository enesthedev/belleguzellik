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
    <header className="absolute inset-x-0 top-0 z-50 text-cream">
      <div className="mx-auto flex h-20 w-[min(1240px,calc(100%-2rem))] items-center justify-between gap-4">
        <a href="#top" aria-label={site.name} className="flex items-center">
          <img
            src="/belle-guzellik.png"
            alt={site.name}
            className="h-12 w-auto brightness-0 invert"
          />
        </a>

        <nav
          className="hidden items-center gap-9 lg:flex"
          aria-label="Ana menü"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-[0.72rem] font-medium uppercase tracking-[0.2em]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: 'light', size: 'sm' }),
              'hidden lg:inline-flex',
            )}
          >
            Randevu Al
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={open}
            className="grid size-11 place-items-center border border-cream/40 text-cream lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobil menü */}
      <div
        className={cn(
          'overflow-hidden bg-ink/95 backdrop-blur-md transition-[max-height,opacity] duration-300 lg:hidden',
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav
          className="mx-auto flex w-[min(1240px,calc(100%-2rem))] flex-col gap-1 py-4"
          aria-label="Mobil menü"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-2 py-3 text-sm font-medium uppercase tracking-[0.18em] text-cream/80 transition-colors hover:text-cream"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className={cn(
              buttonVariants({ variant: 'light', size: 'md' }),
              'mt-2',
            )}
          >
            Randevu Al
          </a>
        </nav>
      </div>
    </header>
  )
}
