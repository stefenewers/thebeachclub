import type { InquiryKind } from "@/data/forms";

/**
 * Placeholder submission. Wire to a server action / CRM (HubSpot, Attio,
 * Resend) in pass two. Nothing is sent anywhere in V1.
 */
export async function submitInquiry(kind: InquiryKind, data: Record<string, string>): Promise<{ ok: true }> {
  void kind;
  void data;
  await new Promise((r) => setTimeout(r, 700));
  return { ok: true };
}
