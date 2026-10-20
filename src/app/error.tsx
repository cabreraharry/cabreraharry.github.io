"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container-page flex min-h-[72svh] flex-col items-center justify-center gap-5 text-center">
      <p className="font-display text-6xl font-bold text-gradient">Oops</p>
      <h1 className="text-2xl font-semibold text-fg-strong">Something went wrong</h1>
      <p className="max-w-md text-fg-muted">
        An unexpected error occurred. Try again, and if it persists, reach out.
      </p>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
