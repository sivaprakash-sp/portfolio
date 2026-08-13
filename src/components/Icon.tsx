import type { ComponentType, SVGProps } from 'react';
import {
  Mail,
  Rocket,
  Cpu,
  BookOpen,
  Heart,
  Trophy,
  Presentation,
  FileText,
  Code,
  Wrench,
  CalendarDays,
  Coffee,
  CodeXml,
  type LucideIcon,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/BrandIcons';

type IconComp = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

const MAP: Record<string, IconComp> = {
  github: GithubIcon as IconComp,
  linkedin: LinkedinIcon as IconComp,
  instagram: InstagramIcon as IconComp,
  email: Mail,
  rocket: Rocket,
  cpu: Cpu,
  book: BookOpen,
  heart: Heart,
  trophy: Trophy,
  presentation: Presentation,
  'file-text': FileText,
  code: Code,
  wrench: Wrench,
  calendar: CalendarDays,
  snake: Code,
  coffee: Coffee,
  'code-xml': CodeXml,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const C = MAP[name] ?? Code;
  return <C className={className} />;
}
