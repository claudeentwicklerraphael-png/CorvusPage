import { useState } from 'react'

const links = [
  { href: '#vorteile', label: 'Vorteile' },
  { href: '#ablauf', label: 'So funktioniert’s' },
  { href: '#vertrauen', label: 'Vertrauen' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-paper">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3.5 19 6v6c0 5-3 8-7 9-4-1-7-4-7-9V6Z" />
            </svg>
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink">Corvus</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[15px] text-body hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#kontakt" className="text-[15px] text-body hover:text-ink transition-colors">
            Anmelden
          </a>
          <a
            href="#final-cta"
            className="rounded-full bg-primary px-5 py-2.5 text-[15px] font-medium text-paper transition-colors hover:bg-primary-soft"
          >
            Demo anfragen
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
          aria-label="Menü öffnen"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-[15px] text-body hover:bg-paper-alt"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#final-cta"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-primary px-5 py-3 text-center text-[15px] font-medium text-paper"
          >
            Demo anfragen
          </a>
        </div>
      )}
    </header>
  )
}
