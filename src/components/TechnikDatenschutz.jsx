export default function TechnikDatenschutz() {
  return (
    <section id="technik" className="border-y border-line bg-paper-alt py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[12px] uppercase tracking-wider text-primary">
              Technik & Datenschutz
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
              Was Sie technisch wissen sollten.
            </h2>
          </div>

          <div className="flex flex-col gap-5 text-[15.5px] leading-relaxed text-ink lg:col-span-8">
            <p>
              Corvus läuft auf Servern in Deutschland. Transkripte werden nach
              30 Tagen automatisch gelöscht, wenn Sie nicht aktiv eine längere
              Speicherung einstellen. Wir sind Auftragsverarbeiter nach Art.
              28 DSGVO; ein AV-Vertrag wird vor dem Start unterschrieben.
            </p>
            <p>
              Für die Einrichtung leiten Sie Ihre bestehende Rufnummer auf
              eine Corvus-Nummer um. Das funktioniert bei Telekom, Vodafone
              und 1&amp;1 direkt über deren Kundenbereich – eine neue
              Telefonanlage ist nicht nötig. Die Umleitung können Sie
              jederzeit wieder abschalten.
            </p>
            <p>
              Der Kalenderzugriff erfolgt per Standard-OAuth bei Google oder
              Microsoft. Corvus sieht nur Termintitel und freie Zeitfenster,
              keine Notizen oder Anhänge.
            </p>
            <p>
              Corvus befindet sich aktuell in einer begleiteten Pilotphase
              mit ausgewählten Betrieben im Raum München und Augsburg.
              Monatlich kündbar, kein Setup-Fee, keine Mindestlaufzeit.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
