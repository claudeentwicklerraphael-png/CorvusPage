import { RavenMark } from './icons'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 text-[13px] text-body-soft">
          <a href="#top" className="flex items-center gap-2.5 text-ink">
            <RavenMark className="h-5 w-5 text-primary" />
            <span>Corvus · Rote Flamme GmbH, München · &copy; {new Date().getFullYear()}</span>
          </a>
          <div className="flex items-center gap-6">
            <a href="#impressum" className="hover:text-ink">Impressum</a>
            <a href="#datenschutz" className="hover:text-ink">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
