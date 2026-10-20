import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[72svh] flex-col items-center justify-center gap-5 text-center">
      <p className="font-display text-7xl font-bold text-gradient">404</p>
      <h1 className="text-2xl font-semibold text-fg-strong">Page not found</h1>
      <p className="max-w-md text-fg-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Button asChild>
        <Link href="/">Back home</Link>
      </Button>
    </div>
  );
}
