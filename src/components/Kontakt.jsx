export default function Kontakt() {
  return (
    <section id="kontakt" className="border-t border-line bg-paper-alt py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-[12px] uppercase tracking-wider text-primary">
            Gespräch anfragen
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
            Wir schauen gemeinsam, ob das für Ihren Betrieb sinnvoll ist.
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-body">
            Ein kurzes Telefonat reicht, um zu klären, wie Ihre Anrufe aktuell
            ablaufen und ob Corvus passt. Kein vorbereiteter Pitch, keine
            Slides. Wenn es nicht passt, sagen wir das auch.
          </p>

          <div className="mt-8 grid gap-5 text-[15px] sm:grid-cols-2">
            <div>
              <p className="text-[12px] uppercase tracking-wider text-body-soft">E-Mail</p>
              <a href="mailto:kontakt@roteflamme.com" className="text-ink hover:text-primary">
                kontakt@roteflamme.com
              </a>
            </div>
            <div>
              <p className="text-[12px] uppercase tracking-wider text-body-soft">Telefon</p>
              <a href="tel:+4989000000" className="text-ink hover:text-primary">
                089 – auf Anfrage
              </a>
            </div>
          </div>

          <a
            href="mailto:kontakt@roteflamme.com"
            className="mt-8 inline-flex items-center gap-2 bg-primary px-5 py-3 text-[14px] text-paper transition-colors hover:bg-primary-soft"
          >
            Unverbindlich anfragen
          </a>
        </div>
      </div>
    </section>
  )
}
