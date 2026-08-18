import { IconCheck } from './icons'

const forBusiness = [
  'Spürbare Zeitersparnis im Tagesgeschäft',
  'Weniger Engpässe bei Anfragen und Terminen',
  'Ein reibungsloserer Serviceablauf vom Anruf bis zum Einsatz',
]

const forCustomers = [
  'Klarere, verlässliche Kommunikation',
  'Schnellere Rückmeldung auf Anfragen',
  'Mehr Vertrauen in einen gut organisierten Betrieb',
]

export default function ValueSection() {
  return (
    <section className="border-y border-line bg-paper-alt py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">Der Nutzen</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
            Ein Vorteil für den Betrieb – spürbar beim Kunden.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-card p-8">
            <h3 className="font-display text-xl text-ink">Für Ihren Betrieb</h3>
            <ul className="mt-5 flex flex-col gap-4">
              {forBusiness.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  <span className="text-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-primary p-8 text-paper">
            <h3 className="font-display text-xl">Für Ihre Kunden</h3>
            <ul className="mt-5 flex flex-col gap-4">
              {forCustomers.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-paper/15 text-paper">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  <span className="text-paper/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
