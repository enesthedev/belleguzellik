import { cn } from '#/lib/utils'
import { Reveal } from '#/components/ui/reveal'

interface SectionHeadingProps {
  kicker: string
  title: React.ReactNode
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      <span className="island-kicker">{kicker}</span>
      <h2 className="display-title text-3xl text-ink sm:text-4xl md:text-[2.85rem]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'max-w-2xl text-[1.02rem] leading-relaxed text-ink-soft',
            align === 'center' && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
