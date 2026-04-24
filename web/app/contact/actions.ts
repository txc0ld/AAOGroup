"use server";
import { sendEnquiryEmail, type EnquiryPayload } from "@/lib/email";

export type EnquiryResult = { ok: true } | { ok: false; error: string };

export async function submitEnquiry(formData: FormData): Promise<EnquiryResult> {
  const payload: EnquiryPayload = {
    name: String(formData.get("name") ?? "").trim(),
    company: String(formData.get("company") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim() || undefined,
    message: String(formData.get("message") ?? "").trim(),
  };

  if (!payload.name) return { ok: false, error: "Name is required." };
  if (!payload.company) return { ok: false, error: "Company is required." };
  if (!payload.email || !payload.email.includes("@"))
    return { ok: false, error: "A valid email is required." };
  if (!payload.message)
    return { ok: false, error: "Please describe the bottleneck briefly." };
  if (payload.message.length > 2000)
    return { ok: false, error: "Message is too long." };

  try {
    await sendEnquiryEmail(payload);
    return { ok: true };
  } catch {
    return {
      ok: false,
      error:
        "Something went wrong on our end. Please try again or email hello@aaogroup.au directly.",
    };
  }
}
