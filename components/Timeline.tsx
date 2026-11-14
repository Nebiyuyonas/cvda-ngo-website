export type TimelineItem = {
  period: string;
  title: string;
  points: string[];
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative ml-3 border-l-4 border-green/20">
      {items.map((item) => (
        <li key={item.period} className="relative pb-12 pl-8 last:pb-0">
          <span
            aria-hidden="true"
            className="absolute -left-[14px] top-1.5 h-6 w-6 rounded-full border-4 border-paper bg-ochre"
          />
          <h3 className="text-2xl">
            {item.period}
            <span className="sr-only">: </span>
            <span className="block text-lg text-ink sm:ml-3 sm:inline">{item.title}</span>
          </h3>
          <ul className="mt-3 max-w-prose list-disc space-y-2 pl-5 marker:text-green">
            {item.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}