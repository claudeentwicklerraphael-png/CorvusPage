import { useState } from 'react'
import { RavenMark } from './icons'

const links = [
  { href: '#was', label: 'Was Corvus macht' },
  { href: '#anruf', label: 'Ein Anruf' },
  { href: '#technik', label: 'Technik & Datenschutz' },
  { href: '#fragen', label: 'Fragen' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-line/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <RavenMark className="h-7 w-7 text-primary" />
          <span className="font-display text-xl font-semibold tracking-tight text-ink">Corvus</span>
          <span className="hidden text-[13px] text-body-soft sm:inline">
            Telefonannahme für SHK-Betriebe
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[14px] text-body hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          className="hidden border border-primary px-4 py-1.5 text-[14px] text-primary transition-colors hover:bg-primary hover:text-paper lg:inline-flex"
        >
          Gespräch anfragen
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center border border-line lg:hidden"
          aria-label="Menü öffnen"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-2 py-3 text-[15px] text-body hover:bg-paper-alt"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="mt-3 block border border-primary px-5 py-3 text-center text-[15px] text-primary"
          >
            Gespräch anfragen
          </a>
        </div>
      )}
    </header>
  )
}
