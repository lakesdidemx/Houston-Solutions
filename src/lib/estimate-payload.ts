import { company } from "@/lib/company";
import { services } from "@/lib/services";

export function formSubmitUrl() {
  return `https://formsubmit.co/ajax/${company.leadsEmail}`;
}

const MAX_FILE_BYTES = 4 * 1024 * 1024;
const MAX_FILES = 8;

export type EstimateFields = {
  name: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  description: string;
  contactMethod: string;
};

export function serviceLabel(slug: string) {
  if (slug === "multiple") return "Not sure / multiple services";
  return services.find((s) => s.slug === slug)?.name ?? slug;
}

export function buildFormSubmitPayload(
  fields: EstimateFields,
  photos: File[] = [],
) {
  const name = fields.name.trim();
  const serviceName = serviceLabel(fields.service);
  const outbound = new FormData();
  outbound.append(
    "_subject",
    `New estimate request — ${serviceName} — ${name}`,
  );
  outbound.append("_template", "table");
  outbound.append("_captcha", "false");
  outbound.append("_replyto", fields.email.trim());
  outbound.append(
    "_autoresponse",
    `Hi ${name.split(" ")[0]},\n\nThanks for requesting an estimate from Houston Solutions. We'll review what you sent and follow up within one business day.\n\nIf you need us sooner, call ${company.phoneDisplay}.\n\nHouston Solutions\n${company.phoneDisplay}\n${company.email}\n${company.website}`,
  );
  outbound.append("Name", name);
  outbound.append("Phone", fields.phone.trim());
  outbound.append("email", fields.email.trim());
  outbound.append("Property address", fields.address.trim());
  outbound.append("Service", serviceName);
  outbound.append("Preferred contact", fields.contactMethod);
  outbound.append(
    "Project details",
    fields.description.trim() || "(none provided)",
  );
  outbound.append("Submitted from", company.website);

  photos
    .filter((file) => file.size > 0 && file.size <= MAX_FILE_BYTES)
    .slice(0, MAX_FILES)
    .forEach((file, index) => {
      outbound.append(`photo_${index + 1}`, file, file.name);
    });

  if (photos.length) {
    outbound.append(
      "Photo filenames",
      photos.map((file) => file.name).join(", "),
    );
  }

  return outbound;
}

export function formSubmitAccepted(
  data: unknown,
  _httpStatus: number,
): boolean {
  if (data && typeof data === "object") {
    const rec = data as { success?: unknown; message?: unknown };
    if (rec.success === true || rec.success === "true") return true;
    const message = String(rec.message ?? "");
    if (/confirm|activation|check your email/i.test(message)) return true;
  }
  return false;
}
