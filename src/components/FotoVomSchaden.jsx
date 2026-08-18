export default function FotoVomSchaden() {
  return (
    <section id="foto" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-[12px] uppercase tracking-wider text-primary">
              Foto vom Schaden
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
              Wenn es hilft, bittet Corvus um ein Bild.
            </h2>
            <div className="mt-6 flex max-w-xl flex-col gap-4 text-[15.5px] leading-relaxed text-body">
              <p>
                Bei unklaren Fällen – ein undichtes Rohr, ein fehlendes
                Ersatzteil, ein beschädigter Heizkörper – fragt Corvus den
                Anrufer am Ende des Gesprächs, ob er kurz ein Foto per
                WhatsApp schicken kann. Der Link dazu kommt automatisch aufs
                Handy des Anrufers.
              </p>
              <p>
                Das Foto landet direkt beim Termin im Kalender. Der Monteur
                sieht vor der Anfahrt, womit er es zu tun hat, und kann das
                richtige Material einpacken. Keine zweite Fahrt, kein Raten.
              </p>
            </div>
            <p className="mt-6 max-w-lg text-[13.5px] leading-relaxed text-body-soft">
              Der Anrufer entscheidet selbst, ob er ein Foto schickt. Bilder
              liegen auf demselben Server wie die Anrufdaten und werden mit
              dem Termin nach 30 Tagen gelöscht.
            </p>
          </div>

          <div className="flex justify-center lg:col-span-5">
            <div className="w-[270px] border border-ink/10 bg-ink p-2.5 shadow-[0_20px_50px_-25px_rgba(20,24,31,0.4)] sm:w-[290px]">
              <div className="bg-[#0b141a]">
                <div className="flex items-center gap-3 bg-[#075e54] px-4 py-2.5">
                  <div className="h-9 w-9 rounded-full bg-white/20" />
                  <div>
                    <p className="text-[12px] font-semibold leading-tight text-white">Heizungsbau Becker</p>
                    <p className="text-[9px] text-white/60">online</p>
                  </div>
                </div>
                <div className="bg-[#ece5dd] pb-3">
                  <div className="flex justify-end px-3 pt-3 pb-1">
                    <div className="max-w-[85%] rounded-lg bg-[#dcf8c6] px-3 py-2 shadow-sm">
                      <p className="text-[11px] leading-snug text-gray-800">
                        Guten Tag, können Sie uns kurz ein Foto der Stelle
                        schicken? Das hilft uns bei der Planung.
                      </p>
                      <p className="mt-1 text-right text-[9px] text-gray-400">09:41 ✓✓</p>
                    </div>
                  </div>
                  <div className="px-3 pt-1 pb-1">
                    <div className="max-w-[85%] rounded-lg bg-white p-1 shadow-sm">
                      <div className="flex aspect-[4/3] items-center justify-center rounded-md bg-[#d9d4c8] text-[10px] text-[#5A6066]">
                        Foto: Rohr unter Spüle
                      </div>
                      <p className="mt-1 px-1 text-right text-[9px] text-gray-400">09:42</p>
                    </div>
                  </div>
                  <div className="px-3 pt-1">
                    <div className="max-w-[85%] rounded-lg bg-white px-3 py-2 shadow-sm">
                      <p className="text-[11px] leading-snug text-gray-800">
                        Hier das Rohr unter der Spüle. Der Haupthahn ist zu.
                      </p>
                      <p className="mt-1 text-right text-[9px] text-gray-400">09:43</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
