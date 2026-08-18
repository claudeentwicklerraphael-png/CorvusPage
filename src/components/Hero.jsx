const calls = [
  { time: '07:52', text: 'Heizungsausfall, Fam. Wagner', tag: 'Notdienst weitergeleitet', tagClass: 'bg-accent-soft text-accent' },
  { time: '09:14', text: 'Wartung Therme, Praxis Dr. Lindt', tag: 'Termin gebucht', tagClass: 'bg-primary/10 text-primary' },
  { time: '11:03', text: 'Frage zur Badsanierung', tag: 'Rückrufnotiz', tagClass: 'bg-line/60 text-body' },
]

export default function Hero() {
  return (
    <section id="top" className="pt-14 sm:pt-20">
      <div className="mx-auto grid max-w-6xl items-start gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="text-sm text-body-soft">
            Für Sanitär-, Heizungs- und Klimabetriebe
          </p>

          <h1 className="mt-5 font-display text-[2.4rem] font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.3rem]">
            <span className="text-primary">Anrufe annehmen</span>, während Ihr
            Team beim Kunden arbeitet.
          </h1>

          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-body">
            Corvus nimmt Anrufe für Ihren Betrieb entgegen, erfasst das
            Anliegen und trägt passende Termine in Ihren Kalender ein.
            Notfälle gehen direkt an Sie durch. Alles andere wartet, bis Sie
            Zeit haben.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-[15px] text-paper transition-colors hover:bg-primary-soft"
            >
              Gespräch anfragen
            </a>
            <a
              href="#was"
              className="text-[15px] text-body underline decoration-line underline-offset-4 hover:text-primary"
            >
              Kurz zeigen lassen, was Corvus tut
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="border border-line bg-card p-6">
            <p className="text-[12px] uppercase tracking-wider text-body-soft">Heute</p>
            <p className="mt-1 font-display text-lg text-ink">4 Anrufe angenommen</p>

            <ul className="mt-5 flex flex-col gap-3 border-t border-line pt-5">
              {calls.map((call) => (
                <li key={call.text} className="flex items-center justify-between gap-3 border-b border-line/70 pb-3 last:border-0 last:pb-0">
                  <div className="min-w-0">
                    <p className="text-[12px] text-body-soft">{call.time}</p>
                    <p className="truncate text-[14.5px] text-ink">{call.text}</p>
                  </div>
                  <span className={`shrink-0 px-2.5 py-1 text-[12px] font-medium ${call.tagClass}`}>
                    {call.tag}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-[13px] leading-relaxed text-body-soft">
              Auf dem Anrufbeantworter liegt nichts mehr.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
