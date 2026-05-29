import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import { cn } from '#/lib/utils'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium uppercase tracking-[0.16em] select-none cursor-pointer disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream [&_svg]:size-[1.1em] [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        solid: 'bg-ink text-cream hover:bg-[#2c2520]',
        gold: 'bg-stone text-ink hover:bg-ink hover:text-cream',
        outline:
          'border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-cream',
        ghost: 'text-ink-soft hover:text-ink',
        light:
          'border border-cream/40 text-cream hover:bg-cream hover:text-ink',
        whatsapp: 'bg-[#25D366] text-white hover:bg-[#1ebe5a]',
      },
      size: {
        sm: 'h-9 px-5 text-[0.7rem]',
        md: 'h-11 px-7 text-[0.72rem]',
        lg: 'h-[3.25rem] px-9 text-[0.76rem]',
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
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}
