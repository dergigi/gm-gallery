// Sends client-side errors to /api/log so they surface in Vercel's runtime logs.

type ErrorInfo = { source: string; message: string; stack?: string };

function toInfo(source: string, error: unknown): ErrorInfo {
  if (error instanceof Error) return { source, message: error.message, stack: error.stack };
  return { source, message: String(error) };
}

export function reportError(source: string, error: unknown) {
  const info = toInfo(source, error);
  const body = JSON.stringify({
    ...info,
    url: window.location.href,
    userAgent: navigator.userAgent,
  });
  try {
    fetch("/api/log", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {});
  } catch {
    // Never let reporting throw.
  }
}

export function installErrorReporting() {
  window.addEventListener("error", (event) => reportError("window.error", event.error ?? event.message));
  window.addEventListener("unhandledrejection", (event) => reportError("unhandledrejection", event.reason));
}
