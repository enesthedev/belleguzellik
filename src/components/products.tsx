import { products } from '#/data/products'
import { Reveal } from '#/components/ui/reveal'
import { Figure } from '#/components/ui/figure'

export function Products() {
  return (
    <section id="urunler" className="py-24 md:py-32">
      <div className="mx-auto grid w-[min(1240px,calc(100%-2rem))] gap-12 lg:grid-cols-[0.85fr_1.6fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-16 lg:self-start">
          <span className="island-kicker">Ürünler</span>
          <h2 className="display-title mt-5 text-4xl text-ink md:text-[3rem]">
            Bakımı <em>evde</em> sürdürün
          </h2>
          <p className="mt-6 max-w-sm text-[1.02rem] leading-relaxed text-ink-soft">
            Salonda kullandığımız profesyonel bakım ürünlerini sizinle
            buluşturuyoruz; sağlıklı saçların etkisi evde de devam etsin.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
          {products.map((product, i) => (
            <Reveal
              key={product.name}
              as="article"
              delay={(i % 3) * 80}
              className="group"
            >
              <Figure
                src={product.image}
                alt={product.name}
                className="aspect-square w-full border border-line bg-cream"
                imgClassName="transition duration-700 group-hover:scale-[1.04]"
              />
              <h3 className="mt-4 font-serif text-lg text-ink">
                {product.name}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-ink-faint">
                {product.desc}
              </p>
              <p className="mt-2 font-medium text-ink">{product.price}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
