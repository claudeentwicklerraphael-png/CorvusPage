const lines = [
  { who: 'Anrufer', line: 'Guten Tag, bei mir tropft seit heute früh ein Rohr unter der Spüle. Nicht viel, aber es hört nicht auf.' },
  { who: 'Corvus', line: 'Guten Tag, Heizungsbau Becker. Das hören wir uns gerne an. Ist das Wasser noch abstellbar, oder läuft es weiter?' },
  { who: 'Anrufer', line: 'Abstellen geht, ich habe den Haupthahn zugedreht.' },
  { who: 'Corvus', line: 'Gut, dann ist es kein Notfall, aber wir sollten zeitnah vorbeikommen. Morgen Vormittag zwischen 8 und 10 hätten wir ein Zeitfenster. Passt Ihnen das?' },
  { who: 'Anrufer', line: 'Ja, 9 Uhr wäre ideal.' },
  { who: 'Corvus', line: 'Notiert, morgen um 9 Uhr. Ich brauche noch Ihren Namen und die Adresse. Sie bekommen anschließend eine kurze Bestätigung per SMS.' },
]

export default function EinAnruf() {
  return (
    <section id="anruf" className="border-y border-line bg-paper-alt py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[12px] uppercase tracking-wider text-primary">
              So läuft ein Anruf
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
              Ein Beispiel aus dem Alltag.
            </h2>
            <p className="mt-5 text-[14.5px] leading-relaxed text-body">
              Kein Werbevideo. Nur der Ablauf, wie er im Pilotbetrieb
              tatsächlich vorkommt.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border border-ink/15 bg-paper p-5 lg:p-7">
              <ol className="flex flex-col gap-4">
                {lines.map((l, i) => (
                  <li key={i} className="grid grid-cols-12 gap-4">
                    <span className="col-span-3 pt-0.5 text-[12px] text-body-soft sm:col-span-2">
                      {l.who}
                    </span>
                    <span className="col-span-9 text-[15.5px] leading-relaxed text-ink sm:col-span-10">
                      {l.line}
                    </span>
                  </li>
                ))}
              </ol>

              <p className="mt-7 border-t border-line pt-5 text-[13.5px] leading-relaxed text-body">
                Im Anschluss erscheint im Kalender ein Eintrag mit Name,
                Adresse und einem Satz zum Anliegen. Der Monteur sieht beim
                Start in den Tag, was ihn erwartet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
