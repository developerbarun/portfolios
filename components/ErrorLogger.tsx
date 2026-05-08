"use client";

import { useEffect } from "react";

export default function ErrorLogger() {
  useEffect(() => {
    const onUnhandledRejection = (e: PromiseRejectionEvent) => {
      // Log full event and reason so devtools show meaningful info
      // Some rejections can be non-Error objects (e.g., DOM Events)
      // which is why Next shows `[object Event]` — this captures it.
      // eslint-disable-next-line no-console
      console.error("Unhandled promise rejection:", e.reason, e);
    };

    const onError = (e: ErrorEvent) => {
      // eslint-disable-next-line no-console
      console.error("Global error event:", e.error || e.message, e);
    };

    window.addEventListener("unhandledrejection", onUnhandledRejection);
    window.addEventListener("error", onError);

    return () => {
      window.removeEventListener("unhandledrejection", onUnhandledRejection);
      window.removeEventListener("error", onError);
    };
  }, []);

  return null;
}
