import {
  Activity,
  Bone,
  Bug,
  Droplets,
  Flame,
  Frown,
  HeartPulse,
  Mountain,
  Sun,
  Waves,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { AidGuide } from "@/lib/data/first-aid";
import type { DisasterGuide } from "@/lib/data/disasters";
import { cn } from "@/lib/utils";

const aidIcons: Record<AidGuide["icon"], LucideIcon> = {
  heart: HeartPulse,
  wind: Wind,
  droplet: Droplets,
  flame: Flame,
  frown: Frown,
  bone: Bone,
  bug: Bug,
  waves: Waves,
  zap: Zap,
  sun: Sun,
};

const disasterIcons: Record<DisasterGuide["icon"], LucideIcon> = {
  earth: Activity,
  droplet: Droplets,
  waves: Waves,
  mountain: Mountain,
  flame: Flame,
  landslide: Mountain,
  wind: Wind,
};

export function AidIcon({
  name,
  className,
}: {
  name: AidGuide["icon"];
  className?: string;
}) {
  const Icon = aidIcons[name];
  return <Icon className={cn("size-5", className)} strokeWidth={1.75} />;
}

export function DisasterIcon({
  name,
  className,
}: {
  name: DisasterGuide["icon"];
  className?: string;
}) {
  const Icon = disasterIcons[name];
  return <Icon className={cn("size-5", className)} strokeWidth={1.75} />;
}
