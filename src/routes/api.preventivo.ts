import { createFileRoute } from "@tanstack/react-router";

type CloudflareRequest = Request & {
  runtime?: {
    cloudflare?: {
      env?: Record<string, unknown>;
    };
  };
};

type QuoteData = {
  project: string;
  activity: string;
  objective: string;
  digitalTools: string;
  timing: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
  businessName: string;
};

const genericError = {
  error: "Non siamo riusciti a inviare la richiesta. Riprova tra qualche istante.",
};
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character] ?? character,
  );
}

function emailRow(label: string, value: string): string {
  return `<tr><th align="left" style="padding:8px 16px 8px 0;color:#737b80;font-size:12px;font-weight:600;text-transform:uppercase;vertical-align:top">${escapeHtml(label)}</th><td style="padding:8px 0;color:#171b1e;font-size:14px;line-height:1.6">${escapeHtml(value || "Non indicato")}</td></tr>`;
}

function createEmailHtml(data: QuoteData): string {
  const requestedAt = new Date().toLocaleString("it-IT", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Rome",
  });

  return `<!doctype html><html lang="it"><body style="margin:0;padding:32px;background:#f4f6f7;color:#171b1e;font-family:Arial,sans-serif"><main style="max-width:680px;margin:0 auto;padding:32px;background:#fff"><p style="margin:0 0 24px;color:#087e9a;font-size:12px;font-weight:700;letter-spacing:2px">MAYA PROJECT</p><h1 style="margin:0 0 28px;font-size:24px;font-weight:600">NUOVA RICHIESTA PREVENTIVO MAYA PROJECT</h1><h2 style="margin:0 0 8px;font-size:14px;letter-spacing:1px">PROGETTO</h2><table style="width:100%;border-collapse:collapse">${emailRow("Tipo progetto", data.project)}${emailRow("Attività", data.activity)}${emailRow("Obiettivo", data.objective)}${emailRow("Strumenti digitali", data.digitalTools)}${emailRow("Tempistiche", data.timing)}${emailRow("Budget indicativo", data.budget)}</table><h2 style="margin:28px 0 8px;font-size:14px;letter-spacing:1px">CONTATTO</h2><table style="width:100%;border-collapse:collapse">${emailRow("Nome", data.name)}${emailRow("Email", data.email)}${emailRow("Telefono", data.phone)}${emailRow("Nome attività", data.businessName)}</table><p style="margin:24px 0 0;font-size:13px"><strong>Privacy:</strong> Consenso registrato</p><p style="margin:12px 0 0;color:#737b80;font-size:12px">Data richiesta: ${escapeHtml(requestedAt)}</p></main></body></html>`;
}

export const Route = createFileRoute("/api/preventivo")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Richiesta non valida." }, { status: 400 });
        }

        if (!isRecord(body)) {
          return Response.json({ error: "Richiesta non valida." }, { status: 400 });
        }

        if (readString(body["website"])) {
          return Response.json({ ok: true });
        }

        const data: QuoteData = {
          project: readString(body["project"]),
          activity: readString(body["activity"]),
          objective: readString(body["objective"]),
          digitalTools: readString(body["digitalTools"]),
          timing: readString(body["timing"]),
          budget: readString(body["budget"]),
          name: readString(body["name"]),
          email: readString(body["email"]),
          phone: readString(body["phone"]),
          businessName: readString(body["businessName"]),
        };

        if (
          !data.project ||
          !data.activity ||
          !data.objective ||
          !data.name ||
          !data.email ||
          body["privacy"] !== true
        ) {
          return Response.json({ error: "Controlla i campi obbligatori." }, { status: 400 });
        }

        if (!EMAIL_PATTERN.test(data.email)) {
          return Response.json({ error: "Controlla l'indirizzo email." }, { status: 400 });
        }
        const runtime = (request as CloudflareRequest).runtime;

        const cloudflareApiKey = runtime?.cloudflare?.env?.["RESEND_API_KEY"];

        const localApiKey =
          typeof process !== "undefined" ? process.env["RESEND_API_KEY"] : undefined;

        const apiKey = cloudflareApiKey ?? localApiKey;
        if (typeof apiKey !== "string" || !apiKey) {
          console.error("[api/preventivo] Resend API binding unavailable");
          return Response.json(genericError, { status: 500 });
        }

        const subjectName = (data.businessName || data.name).replace(/[\r\n]+/g, " ").slice(0, 120);

        try {
          const resendResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "Maya Project <preventivi@maya-project.it>",
              to: ["preventivi@maya-project.it"],
              reply_to: data.email,
              subject: `Nuova richiesta preventivo — ${subjectName}`,
              html: createEmailHtml(data),
            }),
          });

          if (!resendResponse.ok) {
            let resendMessage = "No additional details";
            try {
              const responseBody: unknown = await resendResponse.json();
              if (isRecord(responseBody) && typeof responseBody["message"] === "string") {
                resendMessage = responseBody["message"].slice(0, 500);
              }
            } catch {
              // The status remains useful if Resend returns a non-JSON error body.
            }
            console.error(
              `[api/preventivo] Resend returned ${resendResponse.status}: ${resendMessage}`,
            );
            return Response.json(genericError, { status: 502 });
          }

          return Response.json({ ok: true });
        } catch (error) {
          const message = error instanceof Error ? error.message : "Unknown fetch error";
          console.error(`[api/preventivo] Resend request failed: ${message}`);
          return Response.json(genericError, { status: 502 });
        }
      },
    },
  },
});
