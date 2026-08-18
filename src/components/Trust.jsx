import { IconShield, IconCompass, IconLayers } from './icons'

const points = [
  {
    icon: IconShield,
    title: 'Verlässlich im Alltag',
    text: 'Gebaut für den echten Betriebsalltag im SHK-Handwerk – nicht für die Theorie. Was heute funktioniert, funktioniert auch morgen.',
  },
  {
    icon: IconCompass,
    title: 'Klar statt kompliziert',
    text: 'Keine Schulung, kein Handbuch nötig. Wer im Betrieb mitarbeitet, findet sich vom ersten Tag an zurecht.',
  },
  {
    icon: IconLayers,
    title: 'Professionell im Hintergrund',
    text: 'Ihre Daten sind sicher verwahrt, Ihre Abläufe sauber dokumentiert. Sie kümmern sich um den Kunden – wir um die Ordnung.',
  },
]

export default function Trust() {
  return (
    <section id="vertrauen" className="border-y border-line bg-paper-alt py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">Vertrauen</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
            Ruhe entsteht durch Verlässlichkeit.
          </h2>
          <p className="mt-4 leading-relaxed text-body">
            Corvus soll sich anfühlen wie ein zuverlässiger Kollege im Hintergrund –
            unaufdringlich, gründlich und immer da, wenn es darauf ankommt.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {points.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-line bg-card p-7">
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
