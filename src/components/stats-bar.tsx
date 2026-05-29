import { stats } from '#/data/content'
import { Reveal } from '#/components/ui/reveal'

export function StatsBar() {
  return (
    <section className="relative pb-4">
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
        <Reveal className="island-shell grid grid-cols-2 gap-y-8 rounded-3xl px-6 py-9 sm:px-10 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-line"
              style={{ ['--i' as string]: i }}
            >
              <span className="display-title text-4xl text-ink sm:text-5xl">
                {stat.value}
              </span>
              <span className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-ink-soft">
                {stat.label}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
