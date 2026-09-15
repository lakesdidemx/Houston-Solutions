import { company } from "@/lib/company";
import {
  buildFormSubmitPayload,
  formSubmitAccepted,
  formSubmitUrl,
  type EstimateFields,
} from "@/lib/estimate-payload";

export type SendEstimateResult =
  | { ok: true }
  | { ok: false; error: string };

function text(form: FormData, key: string) {
  return String(form.get(key) ?? "").trim();
}

async function postFormSubmit(body: FormData) {
  const response = await fetch(formSubmitUrl(), {
    method: "POST",
    headers: { Accept: "application/json" },
    body,
  });
  const data = await response.json().catch(() => null);
  return { response, data };
}

export async function sendEstimate(
  form: FormData,
): Promise<SendEstimateResult> {
  if (text(form, "website")) {
    return { ok: true };
  }

  const fields: EstimateFields = {
    name: text(form, "name"),
    phone: text(form, "phone"),
    email: text(form, "email"),
    address: text(form, "address"),
    service: text(form, "service"),
    description: text(form, "description"),
    contactMethod: text(form, "contactMethod") || "phone",
  };

  if (fields.name.length < 2) {
    return { ok: false, error: "Please enter your name." };
  }
  if (fields.phone.replace(/\D/g, "").length < 7) {
    return { ok: false, error: "Please enter a phone number." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return { ok: false, error: "Please enter a valid email." };
  }
  if (fields.address.length < 5) {
    return { ok: false, error: "Please enter the property address." };
  }
  if (!fields.service) {
    return { ok: false, error: "Please select a service." };
  }

  const photos = form
    .getAll("photos")
    .filter((value): value is File => value instanceof File && value.size > 0);

  const outbound = buildFormSubmitPayload(fields, photos);
  const fail = {
    ok: false as const,
    error: `We couldn't send that just now. Call ${company.phoneDisplay} or email ${company.leadsEmail}.`,
  };

  try {
    let { response, data } = await postFormSubmit(outbound);
    if (response.status === 429) {
      await new Promise((resolve) => setTimeout(resolve, 1600));
      ({ response, data } = await postFormSubmit(outbound));
    }
    if (!formSubmitAccepted(data, response.status)) return fail;
    return { ok: true };
  } catch {
    return fail;
  }
}
