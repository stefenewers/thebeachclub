/** Placeholder enquiry forms (end frame CTAs). Fields are data-driven. */

export type InquiryKind = "partner" | "deck";

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "select" | "textarea";
  required?: boolean;
  autoComplete?: string;
  options?: string[];
}

export const forms: Record<InquiryKind, { title: string; intro: string; submit: string; success: string; fields: FormField[] }> = {
  partner: {
    title: "Partner with Beach Club",
    intro: "Brands, venues, talent and investors.",
    submit: "Send",
    success: "Received. We'll be in touch personally.",
    fields: [
      { name: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
      { name: "company", label: "Company / brand", type: "text", required: true, autoComplete: "organization" },
      { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
      {
        name: "interest",
        label: "Interest",
        type: "select",
        required: true,
        options: ["Brand partnership", "Venue", "DJ / talent", "Investment", "Creative collaboration"],
      },
      { name: "message", label: "Anything else", type: "textarea" },
    ],
  },
  deck: {
    title: "Request the deck",
    intro: "Audience, inventory and timeline.",
    submit: "Request",
    success: "Thank you. The deck will follow by email.",
    fields: [
      { name: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
      { name: "company", label: "Company / brand", type: "text", required: true, autoComplete: "organization" },
      { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
      { name: "role", label: "Role", type: "text", autoComplete: "organization-title" },
    ],
  },
};
