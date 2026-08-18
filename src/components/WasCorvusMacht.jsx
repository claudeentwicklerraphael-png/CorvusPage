const items = [
  {
    t: 'Anrufe annehmen, wenn niemand im Büro ist',
    d: 'Während Ihr Team beim Kunden ist, klingelt das Telefon trotzdem. Corvus meldet sich mit Ihrem Betriebsnamen, hört zu und klärt das Anliegen. Rückrufstau am Abend entfällt.',
  },
  {
    t: 'Einfache Termine eintragen',
    d: 'Heizungswartung, Abnahme, Badbesichtigung, Zählerstand. Corvus bietet nur Zeitfenster an, die Sie vorher freigegeben haben – getrennt nach Gewerk, Region und mit Puffer für Fahrtzeit. Alles andere landet als Rückrufnotiz bei Ihnen.',
  },
  {
    t: 'Notdienst nach Ihren Regeln trennen',
    d: 'Wasserrohrbruch, ausgefallene Heizung, Gasgeruch. Welche Stichworte als Notfall gelten, legen Sie einmal fest – inklusive Uhrzeiten, Zielnummer und ob der Notdienst nur für Bestandskunden gilt. Corvus folgt diesen Regeln und entscheidet nicht selbst, was ein Notfall ist.',
  },
]

export default function WasCorvusMacht() {
  return (
    <section id="was" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[12px] uppercase tracking-wider text-primary">
              Was Corvus im Betrieb übernimmt
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
              Drei Dinge, die jeden Tag anfallen – und zwischendurch stören.
            </h2>
          </div>

          <div className="lg:col-span-8">
            <dl className="divide-y divide-line border-y border-line">
              {items.map((item) => (
                <div key={item.t} className="grid gap-3 py-6 md:grid-cols-12 md:gap-4">
                  <dt className="font-display text-[19px] font-medium leading-snug text-ink md:col-span-5">
                    {item.t}
                  </dt>
                  <dd className="text-[15.5px] leading-relaxed text-body md:col-span-7">
                    {item.d}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-7 max-w-xl text-[14px] leading-relaxed text-body-soft">
              Corvus ist nicht für komplexe Beratung, Preisverhandlungen oder
              Vertragsklärung gedacht. Solche Gespräche kommen weiterhin zu
              Ihnen durch.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
