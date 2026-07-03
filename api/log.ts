import type { VercelRequest, VercelResponse } from "@vercel/node";

// Client error sink. Whatever lands here shows up in the Vercel function logs.
export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }
  const { source, message, stack, url, userAgent } = req.body ?? {};
  console.error("[client-error]", JSON.stringify({ source, message, stack, url, userAgent }));
  res.status(204).end();
}
