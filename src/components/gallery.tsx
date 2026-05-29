import { gallery } from '#/data/content'
import { SectionHeading } from '#/components/section-heading'
import { Reveal } from '#/components/ui/reveal'
import { Figure } from '#/components/ui/figure'

const spans = [
  'md:col-span-2 md:row-span-2',
  '',
  '',
  '',
  'md:col-span-2',
  '',
]

export function Gallery() {
  return (
    <section id="galeri" className="py-20 md:py-28">
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
        <SectionHeading
          kicker="Galeri"
          title={
            <>
              Belle’den <em>kareler</em>
            </>
          }
          subtitle="Salonumuzdan ve uygulamalarımızdan ilham veren anlar."
        />

        <div className="mt-14 grid auto-rows-[170px] grid-cols-2 gap-4 md:grid-cols-3 md:auto-rows-[185px]">
          {gallery.map((image, i) => (
            <Reveal
              key={image.src}
              delay={(i % 3) * 90}
              className={`group ${spans[i] ?? ''}`}
            >
              <Figure
                src={image.src}
                alt={image.alt}
                className="h-full w-full rounded-2xl ring-1 ring-line"
                imgClassName="group-hover:scale-[1.06]"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
