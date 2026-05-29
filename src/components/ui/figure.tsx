import { useState } from 'react'
import { cn } from '#/lib/utils'

interface FigureProps {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  priority?: boolean
}

// Görsel yüklenmezse zarif bir degrade + monogram gösterir; hiçbir zaman kırık ikon görünmez.
export function Figure({ src, alt, className, imgClassName, priority }: FigureProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-gradient-to-br from-blush-soft via-cream to-gold-soft/60',
        className,
      )}
    >
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailed(true)}
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-transform duration-700',
            imgClassName,
          )}
        />
      )}
      {failed && (
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-serif text-5xl italic text-rose/70">Belle</span>
        </div>
      )}
    </div>
  )
}
