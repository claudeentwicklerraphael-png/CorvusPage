export default function FinalCta() {
  return (
    <section id="final-cta" className="py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
          Mehr Zeit. Mehr Ruhe.
          <br />
          Mehr Kontrolle.
        </h2>
        <p className="mx-auto mt-5 max-w-md leading-relaxed text-body">
          Testen Sie Corvus unverbindlich und spüren Sie den Unterschied,
          schon in der ersten Arbeitswoche.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-[15px] font-medium text-paper transition-colors hover:bg-primary-soft"
          >
            Kostenlos testen
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-full border border-line bg-card px-8 py-3.5 text-[15px] font-medium text-ink transition-colors hover:border-primary/40"
          >
            Persönliches Gespräch vereinbaren
          </a>
        </div>

        <p className="mt-6 text-sm text-body-soft">
          Keine Kreditkarte nötig · in wenigen Minuten startklar
        </p>
      </div>
    </section>
  )
}
