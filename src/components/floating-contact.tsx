import { MessageCircle, Phone } from 'lucide-react'
import { site, whatsappLink } from '#/data/site'

export function FloatingContact() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3 sm:right-6 sm:bottom-6">
      <a
        href={site.phoneHref}
        aria-label="Telefonla ara"
        className="grid size-12 place-items-center rounded-full bg-ink text-cream shadow-[0_6px_18px_-10px_rgba(43,35,32,0.45)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
      >
        <Phone className="size-5" />
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp ile yaz"
        className="relative grid size-13 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_6px_18px_-10px_rgba(37,211,102,0.5)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
      >
        <span className="soft-pulse absolute inset-0 -z-10 rounded-full bg-[#25D366]/40" />
        <MessageCircle className="relative size-6" />
      </a>
    </div>
  )
}
