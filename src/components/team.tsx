import { team } from '#/data/team'
import { Reveal } from '#/components/ui/reveal'
import { Figure } from '#/components/ui/figure'

export function Team() {
  return (
    <section id="ekip" className="py-24 md:py-32">
      <div className="mx-auto w-[min(1240px,calc(100%-2rem))]">
        <Reveal className="flex flex-col gap-5">
          <span className="island-kicker">Ekibimiz</span>
          <h2 className="display-title text-4xl text-ink md:text-[3rem]">
            Saçınız <em>uzman</em> ellerde
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {team.map((member, i) => (
            <Reveal
              key={member.name}
              as="article"
              delay={(i % 5) * 70}
              className="group"
            >
              <Figure
                src={member.image}
                alt={member.name}
                className="aspect-[3/4] w-full"
                imgClassName="grayscale transition duration-700 group-hover:grayscale-0"
              />
              <h3 className="mt-3 font-serif text-lg text-ink">
                {member.name}
              </h3>
              <p className="mt-1 text-[0.66rem] uppercase tracking-[0.16em] text-ink-faint">
                {member.role}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
