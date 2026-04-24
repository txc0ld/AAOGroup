export type EnquiryPayload = {
  name: string;
  company: string;
  email: string;
  phone?: string;
  message: string;
};

export async function sendEnquiryEmail(payload: EnquiryPayload): Promise<void> {
  if (process.env.RESEND_API_KEY) {
    return;
  }
  console.log("[enquiry-stub]", JSON.stringify(payload));
}
