const items = [
  {
    q: 'Ersetzt Corvus mein Büro?',
    a: 'Nein. Corvus nimmt Anrufe ab, wenn niemand rangehen kann, und übernimmt Termine, die sich klar einordnen lassen. Alles andere kommt nach wie vor zu Ihnen oder Ihrem Büro.',
  },
  {
    q: 'Was passiert, wenn Corvus etwas nicht versteht?',
    a: 'Dann legt Corvus einen kurzen Vermerk an und bittet den Anrufer, sich zurückrufen zu lassen. Dasselbe gilt bei starkem Dialekt, schlechter Leitung oder Anliegen, die nicht zu Ihren hinterlegten Leistungen passen.',
  },
  {
    q: 'Was passiert, wenn kein freier Termin mehr da ist?',
    a: 'Corvus nimmt das Anliegen trotzdem auf und erklärt dem Anrufer, dass Sie sich für einen Termin zurückmelden. Die Anfrage landet als Rückrufnotiz in Ihrer Übersicht. Corvus bucht nichts außerhalb der Zeitfenster, die Sie freigegeben haben.',
  },
  {
    q: 'Kann ich die Regeln selbst festlegen?',
    a: 'Ja. Sie entscheiden, welche Leistungen Corvus annimmt, welche Zeitfenster freigegeben sind, wie Notfälle definiert werden und an welche Nummer weitergeleitet wird.',
  },
  {
    q: 'Hört der Anrufer, dass es ein Computer ist?',
    a: 'Meistens ja. Corvus gibt sich nicht als Mensch aus. Im Pilot hat sich gezeigt, dass Kunden das nicht stört, solange das Gespräch sachlich und zügig abläuft.',
  },
  {
    q: 'Was kostet das?',
    a: 'Die Preise hängen vom Anrufaufkommen ab. In der Pilotphase arbeiten wir mit einem festen Monatspreis. Details besprechen wir im Gespräch.',
  },
  {
    q: 'Muss ich etwas installieren?',
    a: 'Nein. Es reicht eine Rufumleitung, die Sie im Kundenbereich Ihres Telefonanbieters einrichten. Wir begleiten Sie dabei einmalig.',
  },
]

export default function FAQ() {
  return (
    <section id="fragen" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[12px] uppercase tracking-wider text-primary">
              Fragen, die uns öfter gestellt werden
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
              Kurz beantwortet.
            </h2>
          </div>

          <div className="lg:col-span-8">
            <dl className="divide-y divide-line border-y border-line">
              {items.map((item) => (
                <div key={item.q} className="py-5">
                  <dt className="font-display text-[17px] font-medium tracking-tight text-ink">
                    {item.q}
                  </dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-body">
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
