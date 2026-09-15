import {
  Bath,
  BrickWall,
  Drill,
  Hammer,
  House,
  KeyRound,
  PaintRoller,
  Plug,
  ShowerHead,
  SquareDashed,
  Trash2,
  TreeDeciduous,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIcon } from "@/lib/services";
import { cn } from "@/lib/utils";

const icons: Record<ServiceIcon, LucideIcon> = {
  tree: TreeDeciduous,
  concrete: BrickWall,
  remodel: House,
  kitchen: Hammer,
  bathroom: Bath,
  paint: PaintRoller,
  drywall: SquareDashed,
  plumbing: ShowerHead,
  electrical: Plug,
  maintenance: Wrench,
  junk: Trash2,
  garage: Drill,
  handyman: Hammer,
  turnover: KeyRound,
};

export function ServiceGlyph({
  name,
  className,
}: {
  name: ServiceIcon;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={cn("size-5", className)} strokeWidth={1.75} />;
}
