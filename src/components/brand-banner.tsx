import { bannerImage } from '#/data/content'
import { Figure } from '#/components/ui/figure'
import { buttonVariants } from '#/components/ui/button'

export function BrandBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      <Figure
        src={bannerImage}
        alt="Belle Güzellik saç çalışması"
        className="absolute inset-0 h-full w-full"
        imgClassName="grayscale"
      />
      <div aria-hidden className="absolute inset-0 bg-ink/72" />

      <div className="relative z-10 mx-auto flex min-h-[62vh] w-[min(900px,calc(100%-2rem))] flex-col items-center justify-center gap-7 py-24 text-center text-cream">
        <span className="display-xl text-[clamp(3.5rem,12vw,9rem)] text-cream">
          Belle
        </span>
        <p className="max-w-xl text-[1.05rem] leading-relaxed text-cream/85">
          On yılı aşkın süredir saçlarınıza değer katıyoruz. Sertifikalı stilist
          kadromuz ve titiz hijyen anlayışımızla, kendinizi şımartabileceğiniz
          bir alan sunuyoruz.
        </p>
        <a
          href="#hizmetler"
          className={buttonVariants({ variant: 'light', size: 'lg' })}
        >
          Hizmetleri Keşfet
        </a>
      </div>
    </section>
  )
}
