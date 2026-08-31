export type LeadPayload = Record<string, FormDataEntryValue>;

export async function submitLead(form: HTMLFormElement) {
  const endpoint = import.meta.env.VITE_LEAD_FORM_ENDPOINT as string | undefined;

  if (!endpoint) {
    throw new Error('Lead form endpoint is not configured.');
  }

  const data = new FormData(form);

  const response = await fetch(endpoint, {
    method: 'POST',
    body: data,
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    const result = await response.json().catch(() => null);

    const message =
      result?.errors?.[0]?.message ||
      'Unable to submit your request. Please try again or call us.';

    throw new Error(message);
  }

  return { ok: true };
}
