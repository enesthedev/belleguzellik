import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import { cn } from '#/lib/utils'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-wide select-none cursor-pointer disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-cream [&_svg]:size-[1.05em] [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        solid:
          'bg-ink text-cream shadow-[0_4px_14px_-8px_rgba(43,35,32,0.35)] hover:bg-[#3a2f29] hover:-translate-y-0.5',
        gold: 'bg-gold text-ink shadow-[0_4px_14px_-8px_rgba(164,130,59,0.4)] hover:bg-gold-deep hover:text-cream hover:-translate-y-0.5',
        outline:
          'border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-cream',
        ghost: 'text-ink-soft hover:text-ink hover:bg-ink/5',
        whatsapp:
          'bg-[#25D366] text-white shadow-[0_4px_14px_-8px_rgba(37,211,102,0.4)] hover:bg-[#1ebe5a] hover:-translate-y-0.5',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-sm',
        lg: 'h-13 px-8 text-[0.95rem]',
        icon: 'size-11',
      },
    },
    defaultVariants: { variant: 'solid', size: 'md' },
  },
)

export type ButtonVariantProps = VariantProps<typeof buttonVariants>

export function Button({
  className,
  variant,
  size,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariantProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  )
}
