import { useId, useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/lib/services";
import { company } from "@/lib/company";
import {
  buildFormSubmitPayload,
  formSubmitAccepted,
  formSubmitUrl,
  serviceLabel,
} from "@/lib/estimate-payload";
import { cn } from "@/lib/utils";

const contactMethods = [
  { value: "phone", label: "Phone" },
  { value: "email", label: "Email" },
  { value: "text", label: "Text" },
] as const;

type FormState = {
  name: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  description: string;
  contactMethod: "phone" | "email" | "text";
};

const empty: FormState = {
  name: "",
  phone: "",
  email: "",
  address: "",
  service: "",
  description: "",
  contactMethod: "phone",
};

export function EstimateForm({
  defaultService,
  compact = false,
}: {
  defaultService?: string;
  compact?: boolean;
}) {
  const formId = useId();
  const [values, setValues] = useState<FormState>({
    ...empty,
    service: defaultService ?? "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (values.phone.replace(/\D/g, "").length < 7)
      next.phone = "Please enter a phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Please enter a valid email.";
    if (values.address.trim().length < 5)
      next.address = "Please enter the property address.";
    if (!values.service) next.service = "Please select a service.";
    return next;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;
    setSubmitting(true);
    setSendError(null);

    const honeypot = (
      e.currentTarget.elements.namedItem("website") as HTMLInputElement | null
    )?.value;
    if (honeypot) {
      setSubmitted(true);
      setSubmitting(false);
      return;
    }

    const fields = {
      name: values.name.trim(),
      phone: values.phone.trim(),
      email: values.email.trim(),
      address: values.address.trim(),
      service: values.service,
      description: values.description.trim(),
      contactMethod: values.contactMethod,
    };

    const failMessage = `We couldn't send that just now. Call ${company.phoneDisplay} or email ${company.leadsEmail}.`;

    try {
      const outbound = buildFormSubmitPayload(fields, files);
      const direct = await fetch(formSubmitUrl(), {
        method: "POST",
        headers: { Accept: "application/json" },
        body: outbound,
      });
      const directData = await direct.json().catch(() => null);
      if (formSubmitAccepted(directData, direct.status)) {
        setSubmitted(true);
        return;
      }

      const fallback = new FormData();
      Object.entries(fields).forEach(([key, value]) =>
        fallback.append(key, value),
      );
      files.forEach((file) => fallback.append("photos", file));
      const response = await fetch("/api/estimate", {
        method: "POST",
        body: fallback,
      });
      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;
      if (!response.ok || !result?.ok) {
        setSendError(result?.error ?? failMessage);
        return;
      }
      setSubmitted(true);
    } catch {
      setSendError(failMessage);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-paper p-8 text-center shadow-card">
        <CheckCircle2 className="mx-auto size-10 text-accent" />
        <h3 className="mt-4 font-display text-2xl text-navy">
          Request received.
        </h3>
        <p className="mt-2 text-muted">
          Thanks, {values.name.split(" ")[0]}. We’ll review what you sent and
          get back to you — usually within one business day — by{" "}
          {values.contactMethod === "email" ? "email" : values.contactMethod}.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "relative rounded-2xl bg-paper p-6 shadow-card md:p-8",
        compact && "p-5 md:p-6",
      )}
      noValidate
    >
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <Field
          id={`${formId}-name`}
          label="Name"
          error={errors.name}
        >
          <Input
            id={`${formId}-name`}
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </Field>
        <Field id={`${formId}-phone`} label="Phone" error={errors.phone}>
          <Input
            id={`${formId}-phone`}
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </Field>
        <Field id={`${formId}-email`} label="Email" error={errors.email}>
          <Input
            id={`${formId}-email`}
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </Field>
        <Field
          id={`${formId}-address`}
          label="Property address"
          error={errors.address}
        >
          <Input
            id={`${formId}-address`}
            autoComplete="street-address"
            value={values.address}
            onChange={(e) => update("address", e.target.value)}
          />
        </Field>
        <Field
          id={`${formId}-service`}
          label="Service needed"
          error={errors.service}
          className="md:col-span-2"
        >
          <select
            id={`${formId}-service`}
            value={values.service}
            onChange={(e) => update("service", e.target.value)}
            className="flex h-11 w-full rounded-md border border-line bg-cream px-3.5 text-sm text-ink focus-visible:border-navy-mid focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:outline-none"
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
            <option value="multiple">Not sure / multiple services</option>
          </select>
        </Field>
        <Field
          id={`${formId}-desc`}
          label="Brief description of the project"
          className="md:col-span-2"
        >
          <Textarea
            id={`${formId}-desc`}
            rows={4}
            value={values.description}
            onChange={(e) => update("description", e.target.value)}
            placeholder="What needs to be done, and any timing that matters."
          />
        </Field>
        <fieldset className="md:col-span-2">
          <legend className="mb-2 text-sm font-medium text-ink">
            Preferred contact method
          </legend>
          <div className="flex flex-wrap gap-2">
            {contactMethods.map((method) => (
              <label
                key={method.value}
                className={cn(
                  "inline-flex h-11 cursor-pointer items-center rounded-md border px-4 text-sm",
                  values.contactMethod === method.value
                    ? "border-navy bg-navy text-paper"
                    : "border-line bg-cream text-ink hover:bg-paper-warm",
                )}
              >
                <input
                  type="radio"
                  name={`${formId}-contact`}
                  value={method.value}
                  checked={values.contactMethod === method.value}
                  onChange={() => update("contactMethod", method.value)}
                  className="sr-only"
                />
                {method.label}
              </label>
            ))}
          </div>
        </fieldset>
        <div className="md:col-span-2">
          <Label htmlFor={`${formId}-photos`}>Upload photos</Label>
          <label
            htmlFor={`${formId}-photos`}
            className="mt-2 flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-line bg-cream px-4 py-8 text-center hover:bg-paper-warm"
          >
            <Upload className="size-5 text-muted" />
            <span className="mt-2 text-sm text-muted">
              Add photos of the property or the issue. Optional, but helpful.
            </span>
            <input
              id={`${formId}-photos`}
              type="file"
              accept="image/*"
              multiple
              className="sr-only"
              onChange={(e) => {
                const list = Array.from(e.target.files ?? []);
                setFiles((prev) => [...prev, ...list].slice(0, 8));
              }}
            />
          </label>
          {files.length ? (
            <ul className="mt-3 flex flex-wrap gap-2">
              {files.map((file, i) => (
                <li
                  key={`${file.name}-${i}`}
                  className="flex items-center gap-2 rounded-md bg-paper-warm px-2 py-1 text-xs text-ink"
                >
                  {file.name}
                  <button
                    type="button"
                    aria-label={`Remove ${file.name}`}
                    onClick={() =>
                      setFiles((prev) => prev.filter((_, idx) => idx !== i))
                    }
                    className="flex size-6 items-center justify-center rounded-sm hover:bg-line"
                  >
                    <X className="size-3" />
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      <Button type="submit" size="lg" className="mt-6 w-full md:w-auto" disabled={submitting}>
        {submitting ? "Sending…" : "Request My Free Estimate"}
      </Button>
      {sendError ? (
        <p className="mt-3 text-sm text-accent" role="alert">
          {sendError}{" "}
          <a
            href={`mailto:${company.leadsEmail}?subject=${encodeURIComponent(
              `Estimate request — ${serviceLabel(values.service)} — ${values.name.trim()}`,
            )}&body=${encodeURIComponent(
              [
                `Name: ${values.name.trim()}`,
                `Phone: ${values.phone.trim()}`,
                `Email: ${values.email.trim()}`,
                `Address: ${values.address.trim()}`,
                `Service: ${serviceLabel(values.service)}`,
                `Preferred contact: ${values.contactMethod}`,
                "",
                values.description.trim() || "(no project details)",
              ].join("\n"),
            )}`}
            className="font-medium underline underline-offset-2"
          >
            Email us instead
          </a>
        </p>
      ) : null}
      <p className="mt-3 text-xs text-muted">
        We’ll use this to follow up about your project. No mailing list.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <Label htmlFor={id}>{label}</Label>
      <div className="mt-1.5">{children}</div>
      {error ? (
        <p className="mt-1 text-sm text-accent" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
