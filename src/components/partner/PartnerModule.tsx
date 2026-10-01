import { activations } from "@/data/activations";
import { event } from "@/data/event";
import { media } from "@/data/media";
import { partnersForActivation, partnerLabel } from "@/data/partners";
import type { PartnerModule as Module } from "@/data/partnerMode";
import { mediaStatus } from "@/lib/media";
import { PartnerContact } from "./PartnerContact";

/**
 * Partner-mode data block (`?view=partner`). Visually distinct from the guest
 * journey: ink panel, tabular. Draft modules say so plainly.
 */
export function PartnerModule({ m }: { m: Module }) {
  return (
    <aside aria-labelledby={`pm-${m.id}`} className="gutter relative z-10 bg-ink py-14 text-linen md:py-20">
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="t-eyebrow flex items-center gap-3 text-solaire">
            {m.index} <span aria-hidden className="h-px w-6 bg-current" /> Partner view
          </p>
          <h2 id={`pm-${m.id}`} className="t-headline mt-4 text-3xl md:text-4xl">
            {m.title}
          </h2>
          <p className="t-serif mt-3 text-xl text-linen/70">{m.summary}</p>
          {m.status === "draft" && <p className="t-eyebrow mt-6 inline-block border border-linen/30 px-2 py-1 text-[0.5625rem] text-linen/60">Draft — figures in preparation</p>}
        </div>
        <div className="md:col-span-7 md:col-start-6">
          {m.id === "inventory" ? (
            <Inventory />
          ) : m.id === "contact" ? (
            <PartnerContact />
          ) : (
            <dl className="border-t border-white/10">
              {m.rows.map((r) => (
                <div key={r.k} className="grid grid-cols-3 gap-4 border-b border-white/10 py-4">
                  <dt className="t-eyebrow text-linen/50">{r.k}</dt>
                  <dd className="col-span-2 text-sm">{r.v}</dd>
                </div>
              ))}
              {m.id === "deliverables" && <MediaReadiness />}
            </dl>
          )}
          {m.id === "attendance" && <p className="t-eyebrow mt-4 text-[0.5625rem] text-linen/40">{event.attendance.caveat}</p>}
        </div>
      </div>
    </aside>
  );
}

function Inventory() {
  return (
    <div className="-mx-[var(--gutter)] overflow-x-auto px-[var(--gutter)] md:mx-0 md:px-0">
      <table className="w-full min-w-[560px] text-left text-sm">
        <caption className="sr-only">Activation inventory</caption>
        <thead>
          <tr className="t-eyebrow border-b border-white/10 text-linen/50">
            <th scope="col" className="py-3 pr-4 font-normal">#</th>
            <th scope="col" className="py-3 pr-4 font-normal">Activation</th>
            <th scope="col" className="py-3 pr-4 font-normal">Category</th>
            <th scope="col" className="py-3 pr-4 font-normal">Touchpoint</th>
            <th scope="col" className="py-3 font-normal">Status</th>
          </tr>
        </thead>
        <tbody>
          {activations.map((a) => {
            const fit = Array.from(new Set([a.category, ...partnersForActivation(a.id).map(partnerLabel)])).join(" · ");
            return (
              <tr key={a.id} className="border-b border-white/10">
                <td className="py-3 pr-4 tabular-nums text-linen/50">{a.index}</td>
                <th scope="row" className="py-3 pr-4 font-normal">{a.name}</th>
                <td className="py-3 pr-4 text-linen/70">{fit}</td>
                <td className="py-3 pr-4 text-linen/70">{a.touchpoint}</td>
                <td className="t-eyebrow py-3 text-[0.5625rem] text-solaire">Open · on request</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function MediaReadiness() {
  const s = mediaStatus(media);
  return (
    <div className="grid grid-cols-3 gap-4 border-b border-white/10 py-4">
      <dt className="t-eyebrow text-linen/50">Site media</dt>
      <dd className="col-span-2 text-sm">
        {s.delivered}/{s.total} delivered · {s.photography} photography · {s.rendering} renderings · {s.video} film · {s.audio} audio pending
      </dd>
    </div>
  );
}
