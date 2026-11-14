type Stat = { value: string; label: string };

export default function StatsStrip({ stats }: { stats: Stat[] }) {
  return (
    <section aria-labelledby="stats-heading" className="border-b border-green/15">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <h2 id="stats-heading" className="sr-only">CVDA at a glance</h2>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse border-l-4 border-ochre pl-4">
              <dd className="font-heading text-4xl text-green sm:text-5xl">{s.value}</dd>
              <dt className="mt-1 text-base">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
