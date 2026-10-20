import {
  AppWindow,
  Bot,
  Code2,
  Cog,
  Container,
  Globe,
  LayoutTemplate,
  MessageSquare,
  Network,
  Search,
  Server,
  TestTube,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { IconType } from "react-icons";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

/**
 * Data files reference icons by string name; components resolve them here.
 * Only the icons actually used are imported, keeping the bundle lean.
 * (lucide removed brand icons, so socials come from react-icons.)
 */
const lucideIcons: Record<string, LucideIcon> = {
  AppWindow,
  Bot,
  Code2,
  Cog,
  Container,
  Globe,
  LayoutTemplate,
  MessageSquare,
  Network,
  Search,
  Server,
  TestTube,
  Workflow,
  Wrench,
};

const brandIcons: Record<string, IconType> = {
  FaGithub,
  FaLinkedin,
  FaFacebook,
};

export function getLucideIcon(name: string): LucideIcon | undefined {
  return lucideIcons[name];
}

export function getBrandIcon(name: string): IconType | undefined {
  return brandIcons[name];
}
