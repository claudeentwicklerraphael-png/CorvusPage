import { IconCheck } from './icons'

const jobs = [
  { time: '07:30', title: 'Heizungsausfall · Fam. Bauer', tag: 'Dringend', tagClass: 'bg-accent-soft text-accent' },
  { time: '09:15', title: 'Wartung Therme · Praxis Dr. Lindt', tag: 'Eingeplant', tagClass: 'bg-primary/10 text-primary' },
  { time: '11:00', title: 'Bad-Sanierung · Objekt Hauptstr. 12', tag: 'In Abstimmung', tagClass: 'bg-line/60 text-body' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 sm:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-sm text-body-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Für SHK-Betriebe
          </p>

          <h1 className="mt-6 font-display text-[2.5rem] leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Mehr Zeit im Betrieb.
            <br />
            Weniger Chaos im Alltag.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-body">
            Corvus bringt Anfragen, Termine und Kommunikation an einen Ort –
            damit Ihr Team sich auf die Arbeit konzentrieren kann, die wirklich zählt.
            Weniger Suchen, weniger Nachfragen, mehr Überblick.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#final-cta"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-[15px] font-medium text-paper transition-colors hover:bg-primary-soft"
            >
              Kostenlos testen
            </a>
            <a
              href="#ablauf"
              className="inline-flex items-center justify-center rounded-full border border-line bg-card px-7 py-3.5 text-[15px] font-medium text-ink transition-colors hover:border-primary/40"
            >
              So funktioniert’s
            </a>
          </div>

          <p className="mt-6 text-sm text-body-soft">
            Ohne Risiko starten · in wenigen Minuten eingerichtet
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/5 sm:-inset-10" />
          <div className="rounded-2xl border border-line bg-card p-6 shadow-[0_20px_60px_-30px_rgba(26,26,23,0.35)] sm:p-7">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <div>
                <p className="text-sm text-body-soft">Heute</p>
                <p className="font-display text-lg text-ink">Dienstag, 3 Einsätze</p>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                <IconCheck className="h-4 w-4" />
              </span>
            </div>

            <ul className="mt-4 flex flex-col gap-3">
              {jobs.map((job) => (
                <li
                  key={job.title}
                  className="flex items-center justify-between gap-3 rounded-xl border border-line/70 bg-paper px-4 py-3"
                >
                  <div className="min-w-0">
                    <p className="text-sm text-body-soft">{job.time}</p>
                    <p className="truncate text-[15px] text-ink">{job.title}</p>
                  </div>
                  <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${job.tagClass}`}>
                    {job.tag}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm text-body-soft">
              Alles priorisiert, alles im Blick – bevor der Tag beginnt.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
