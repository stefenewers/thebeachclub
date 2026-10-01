"use client";

import { event } from "@/data/event";
import { useInquiry } from "@/components/ui/Inquiry";

export function PartnerContact() {
  const open = useInquiry();
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 md:flex-row">
        <button type="button" onClick={() => open("partner")} className="btn btn-solid w-full md:w-auto">
          Start a conversation
        </button>
        <button type="button" onClick={() => open("deck")} className="btn w-full border-linen/40 md:w-auto">
          Request the deck
        </button>
      </div>
      <p className="t-eyebrow text-[0.5625rem] text-linen/40">
        {event.contact.email} — {event.contact.note}
      </p>
    </div>
  );
}
