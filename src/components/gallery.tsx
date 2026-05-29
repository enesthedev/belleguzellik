import { gallery } from '#/data/content'
import { Reveal } from '#/components/ui/reveal'
import { Figure } from '#/components/ui/figure'

export function Gallery() {
  return (
    <section id="galeri" className="py-24 md:py-32">
      <div className="mx-auto w-[min(1240px,calc(100%-2rem))]">
        <Reveal className="flex flex-col gap-5">
          <span className="island-kicker">Galeri</span>
          <h2 className="display-title text-4xl text-ink md:text-[3rem]">
            Çalışmalarımızdan <em>kareler</em>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
          {gallery.map((image, i) => (
            <Reveal
              key={image.src}
              as="article"
              delay={(i % 4) * 80}
              className="group"
            >
              <Figure
                src={image.src}
                alt={image.alt}
                className="aspect-[3/4] w-full"
                imgClassName="grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
              />
              <div className="mt-3 flex items-baseline justify-between gap-2">
                <p className="font-serif text-base text-ink">{image.alt}</p>
                <span className="text-[0.58rem] uppercase tracking-[0.2em] text-ink-faint">
                  Belle
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
