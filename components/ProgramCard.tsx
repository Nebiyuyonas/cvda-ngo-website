import type { LucideIcon } from "lucide-react";

type Props = { title: string; description: string; icon: LucideIcon };

export default function ProgramCard({ title, description, icon: Icon }: Props) {
  return (
    <article className="rounded-md bg-green-tint p-7">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green text-paper">
        <Icon aria-hidden="true" className="h-6 w-6" />
      </span>
      <h3 className="mt-5">{title}</h3>
      <p className="mt-2 text-base">{description}</p>
    </article>
  );
}
