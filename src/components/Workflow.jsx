import { IconInbox, IconGrid, IconFlag, IconBolt } from './icons'

const steps = [
  {
    icon: IconInbox,
    title: 'Anfrage',
    text: 'Ob Anruf, E-Mail oder Formular – jede Anfrage kommt sauber erfasst an, statt in verschiedenen Kanälen zu verschwinden.',
  },
  {
    icon: IconGrid,
    title: 'Überblick',
    text: 'Alle offenen Vorgänge auf einen Blick – wer, was, bis wann. Kein Nachfragen, kein Suchen im Kalender.',
  },
  {
    icon: IconFlag,
    title: 'Priorisierung',
    text: 'Dringende Fälle werden sichtbar eingeordnet, damit Ihr Team weiß, was zuerst dran ist – ganz ohne Bauchgefühl.',
  },
  {
    icon: IconBolt,
    title: 'Schnellere Bearbeitung',
    text: 'Vom ersten Kontakt bis zum erledigten Einsatz – kürzere Wege, klare Zuständigkeiten, zufriedenere Kunden.',
  },
]

export default function Workflow() {
  return (
    <section id="ablauf" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">Der Ablauf</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
            Vom Eingang bis zur Erledigung – klar geführt.
          </h2>
        </div>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-line lg:block" aria-hidden="true" />
          {steps.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="relative">
              <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-5">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex items-baseline gap-2 lg:hidden">
                  <span className="font-display text-lg text-ink">{title}</span>
                </div>
              </div>
              <div className="mt-3 lg:mt-5">
                <p className="hidden font-display text-lg text-ink lg:block">
                  <span className="text-accent">0{i + 1}</span> {title}
                </p>
                <p className="mt-2 leading-relaxed text-body">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
