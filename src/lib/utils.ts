import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Conflict-safe Tailwind class composition (shadcn standard). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
