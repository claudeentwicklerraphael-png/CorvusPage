import { IconInbox, IconClock, IconGrid, IconLeaf } from './icons'

const benefits = [
  {
    icon: IconInbox,
    title: 'Weniger Aufwand',
    text: 'Anfragen, Termine und Notizen laufen an einem Ort zusammen – kein Suchen mehr in E-Mails, Zetteln und drei verschiedenen Tools.',
  },
  {
    icon: IconClock,
    title: 'Mehr Zeit für das Wesentliche',
    text: 'Weniger Verwaltung bedeutet mehr Zeit auf der Baustelle, beim Kunden und für die Arbeit, die den Betrieb wirklich trägt.',
  },
  {
    icon: IconGrid,
    title: 'Bessere Übersicht',
    text: 'Auf einen Blick erkennen, was ansteht, was wichtig ist und was warten kann – statt jeden Morgen neu zu sortieren.',
  },
  {
    icon: IconLeaf,
    title: 'Weniger Stress im Alltag',
    text: 'Ruhigere Abläufe, klarere Zuständigkeiten und ein Team, das nicht mehr von einem Engpass zum nächsten hetzt.',
  },
]

export default function Benefits() {
  return (
    <section id="vorteile" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">Der Effekt im Alltag</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
            Reibungsloser arbeiten, statt Chaos verwalten.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-line bg-card p-7 transition-shadow hover:shadow-[0_20px_45px_-30px_rgba(26,26,23,0.4)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-medium text-ink">{title}</h3>
              <p className="mt-2 leading-relaxed text-body">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
