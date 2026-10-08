/** Grid of big-number stat tiles: [{ value, label }] */
export function Stats({ items, className = '' }) {
  if (!items?.length) return null
  return (
    <dl className={`grid gap-4 sm:grid-cols-2 ${items.length > 2 ? 'lg:grid-cols-4' : ''} ${className}`}>
      {items.map(({ value, label }) => (
        <div key={label} className="rounded-2xl border border-line/5 bg-surface p-5">
          <dt className="sr-only">{label}</dt>
          <dd>
            <p className="font-serif text-2xl font-semibold tracking-tight text-ink">{value}</p>
            <p className="mt-2 text-sm leading-snug text-ink-muted">{label}</p>
          </dd>
        </div>
      ))}
    </dl>
  )
}
