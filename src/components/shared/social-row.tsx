import { socialLinks } from "@/data/social-links";
import { getBrandIcon } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

interface SocialRowProps {
  className?: string;
  iconSize?: number;
}

/** Maps `socialLinks` to a row of glass icon buttons. */
export function SocialRow({ className, iconSize = 18 }: SocialRowProps) {
  return (
    <ul className={cn("flex items-center gap-2.5", className)}>
      {socialLinks.map((social) => {
        const Icon = getBrandIcon(social.icon);
        return (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex size-10 items-center justify-center rounded-md border border-border bg-glass text-fg-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:text-fg-strong"
            >
              {Icon ? <Icon size={iconSize} aria-hidden /> : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
