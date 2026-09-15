import { createFileRoute } from "@tanstack/react-router";
import { sendEstimate } from "@/lib/send-estimate";

export const Route = createFileRoute("/api/estimate")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let form: FormData;
        try {
          form = await request.formData();
        } catch {
          return Response.json(
            { ok: false, error: "Please try that again." },
            { status: 400 },
          );
        }

        const result = await sendEstimate(form);
        return Response.json(result, { status: result.ok ? 200 : 400 });
      },
    },
  },
});
