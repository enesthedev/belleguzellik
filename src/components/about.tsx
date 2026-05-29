import { whatsappLink } from '#/data/site'
import { buttonVariants } from '#/components/ui/button'
import { Reveal } from '#/components/ui/reveal'

const highlights = [
  { value: '10+', label: 'Yıllık tecrübe' },
  { value: '%100', label: 'Kişiye özel stil' },
]

export function About() {
  return (
    <section id="hakkimizda" className="py-20 md:py-28">
      <Reveal className="mx-auto flex w-[min(760px,calc(100%-2rem))] flex-col items-center gap-6 text-center">
        <span className="island-kicker mx-auto">Hakkımızda</span>
        <h2 className="display-title text-3xl text-ink sm:text-4xl md:text-[2.85rem]">
          On yılı aşkın süredir <em>saçlarınıza</em> değer katıyoruz.
        </h2>
        <p className="max-w-prose text-[1.02rem] leading-relaxed text-ink-soft">
          Belle Güzellik; bakımlı saçı bir lüks değil, herkesin hak ettiği bir
          özen olarak görür. Kurulduğumuz günden bu yana misafirlerimizi
          dinleyerek her saç tipine ve her isteğe özel çözümler üretiyoruz.
        </p>
        <p className="max-w-prose text-[1.02rem] leading-relaxed text-ink-soft">
          Güncel tekniklerimiz, sertifikalı stilist kadromuz ve titiz hijyen
          anlayışımızla; rahatça nefes alabileceğiniz, kendinizi
          şımartabileceğiniz bir alan sunuyoruz.
        </p>

        <div className="mt-4 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="mt-2 flex justify-center gap-12">
          {highlights.map((h) => (
            <div key={h.label}>
              <p className="display-title text-3xl text-ink">{h.value}</p>
              <p className="mt-1 text-sm text-ink-soft">{h.label}</p>
            </div>
          ))}
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className={`${buttonVariants({ variant: 'solid', size: 'lg' })} mt-4`}
        >
          Randevu Oluştur
        </a>
      </Reveal>
    </section>
  )
}
