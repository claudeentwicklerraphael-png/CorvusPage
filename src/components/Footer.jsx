export default function Footer() {
  return (
    <footer id="kontakt" className="border-t border-line bg-paper-alt">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-paper">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3.5 19 6v6c0 5-3 8-7 9-4-1-7-4-7-9V6Z" />
                </svg>
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-ink">Corvus</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-body-soft">
              Mehr Überblick statt Chaos – für SHK-Betriebe, die ihren Alltag
              wieder in Ruhe im Griff haben wollen.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:flex sm:gap-16">
            <div>
              <p className="text-sm font-medium text-ink">Produkt</p>
              <ul className="mt-3 flex flex-col gap-2.5 text-sm text-body-soft">
                <li><a href="#vorteile" className="hover:text-ink">Vorteile</a></li>
                <li><a href="#ablauf" className="hover:text-ink">So funktioniert’s</a></li>
                <li><a href="#vertrauen" className="hover:text-ink">Vertrauen</a></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-ink">Kontakt</p>
              <ul className="mt-3 flex flex-col gap-2.5 text-sm text-body-soft">
                <li><a href="mailto:hallo@corvus-shk.de" className="hover:text-ink">hallo@corvus-shk.de</a></li>
                <li><a href="#final-cta" className="hover:text-ink">Demo anfragen</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 text-sm text-body-soft sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Corvus. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink">Impressum</a>
            <a href="#" className="hover:text-ink">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
