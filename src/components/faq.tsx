import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '#/lib/utils'
import { faq } from '#/data/content'
import { SectionHeading } from '#/components/section-heading'
import { Reveal } from '#/components/ui/reveal'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="sss" className="py-20 md:py-28">
      <div className="mx-auto w-[min(820px,calc(100%-2rem))]">
        <SectionHeading
          kicker="Sıkça Sorulan Sorular"
          title={
            <>
              Aklınızdaki <em>sorular</em>
            </>
          }
          subtitle="Merak ettiklerinizi yanıtladık. Dilediğiniz zaman bize de ulaşabilirsiniz."
        />

        <Reveal className="mt-12 flex flex-col gap-3">
          {faq.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className={cn(
                  'island-shell px-2 transition-colors',
                  isOpen && 'border-ink/40',
                )}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left"
                  >
                    <span className="font-serif text-lg text-ink">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        'size-5 shrink-0 text-ink-soft transition-transform duration-300',
                        isOpen && 'rotate-180',
                      )}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-5 text-[0.97rem] leading-relaxed text-ink-soft">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
