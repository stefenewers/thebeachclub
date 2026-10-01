"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { event } from "@/data/event";
import { forms, type InquiryKind } from "@/data/forms";
import { submitInquiry } from "@/lib/inquiry";
import { useExperience } from "@/components/providers/Experience";

const Ctx = createContext<(kind: InquiryKind) => void>(() => {});
export const useInquiry = () => useContext(Ctx);

/** Placeholder enquiry modal on a native <dialog> (focus trap + Esc for free). */
export function InquiryProvider({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [kind, setKind] = useState<InquiryKind>("partner");
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const { lockScroll } = useExperience();

  const open = useCallback(
    (k: InquiryKind) => {
      setKind(k);
      setState("idle");
      ref.current?.showModal();
      lockScroll(true);
    },
    [lockScroll],
  );

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    const onClose = () => lockScroll(false);
    d.addEventListener("close", onClose);
    return () => d.removeEventListener("close", onClose);
  }, [lockScroll]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    await submitInquiry(kind, data);
    setState("sent");
  }

  const f = forms[kind];

  return (
    <Ctx.Provider value={open}>
      {children}
      <dialog
        ref={ref}
        aria-labelledby="inquiry-title"
        className="m-0 h-[100dvh] max-h-none w-full max-w-none bg-transparent p-0 text-linen backdrop:bg-black/70 backdrop:backdrop-blur-sm md:m-auto md:h-auto md:max-w-xl"
        onClick={(e) => e.target === ref.current && ref.current?.close()}
      >
        <div className="flex h-full flex-col bg-[#0f0e0c] px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6 md:h-auto md:border md:border-white/10 md:p-10">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="t-eyebrow text-linen/50">{event.wordmark} · Private preview</p>
              <h2 id="inquiry-title" className="t-headline mt-4 text-3xl md:text-4xl">
                {f.title}
              </h2>
              <p className="t-serif mt-2 text-xl text-linen/70">{f.intro}</p>
            </div>
            <button type="button" onClick={() => ref.current?.close()} className="t-eyebrow -mr-2 -mt-1 p-2 text-linen/70 hover:text-linen" aria-label="Close">
              Close
            </button>
          </div>

          {state === "sent" ? (
            <div className="flex flex-1 flex-col justify-center py-16" role="status">
              <p className="t-headline text-2xl text-solaire">{f.success}</p>
              <p className="t-eyebrow mt-6 text-linen/40">Prototype — no data was sent.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 flex flex-1 flex-col gap-5 overflow-y-auto" data-lenis-prevent>
              {f.fields.map((field) => {
                const id = `inq-${kind}-${field.name}`;
                const base = "w-full border-b border-white/20 bg-transparent py-3 text-base text-linen outline-none transition-colors focus:border-solaire";
                return (
                  <label key={field.name} htmlFor={id} className="block">
                    <span className="t-eyebrow text-linen/50">
                      {field.label}
                      {field.required && <span aria-hidden> *</span>}
                    </span>
                    {field.type === "textarea" ? (
                      <textarea id={id} name={field.name} rows={3} required={field.required} className={`${base} resize-none`} />
                    ) : field.type === "select" ? (
                      <select id={id} name={field.name} required={field.required} defaultValue="" className={`${base} appearance-none`}>
                        <option value="" disabled>
                          Select
                        </option>
                        {field.options?.map((o) => (
                          <option key={o} value={o} className="bg-ink">
                            {o}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input id={id} name={field.name} type={field.type} required={field.required} autoComplete={field.autoComplete} className={base} />
                    )}
                  </label>
                );
              })}
              <div className="mt-auto pt-4">
                <button type="submit" disabled={state === "sending"} className="btn btn-solid w-full disabled:opacity-60">
                  {state === "sending" ? "Sending…" : f.submit}
                </button>
                <p className="t-eyebrow mt-4 text-[0.5625rem] text-linen/35">Prototype form — submissions are not stored yet.</p>
              </div>
            </form>
          )}
        </div>
      </dialog>
    </Ctx.Provider>
  );
}
