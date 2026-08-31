export type LeadPayload = Record<string, FormDataEntryValue>;

export async function submitLead(form: HTMLFormElement) {
  const endpoint = import.meta.env.VITE_LEAD_FORM_ENDPOINT as string | undefined;
  const data = new FormData(form);
  if (!endpoint) {
    await new Promise(r => setTimeout(r, 600));
    return { ok: true, demo: true };
  }
  const response = await fetch(endpoint, { method: 'POST', body: data });
  if (!response.ok) throw new Error('Unable to submit your request. Please try again or call us.');
  return { ok: true };
}
