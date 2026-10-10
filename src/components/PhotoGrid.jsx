/** Grid of photos: [{ src, alt, label?, position?, fit? }]. `fit: 'contain'` photos span the full row uncropped. */
export function PhotoGrid({ photos, aspect = 'aspect-[4/3]', columns = 'grid-cols-2 lg:grid-cols-3', caption }) {
  if (!photos?.length) return null
  return (
    <figure>
      <ul className={`grid gap-3 sm:gap-4 ${columns}`}>
        {photos.map(({ src, alt, label, position = 'object-center', fit }) => (
          <li
            key={src}
            className={`group relative overflow-hidden rounded-xl border border-line/5 ${
              fit === 'contain' ? 'col-span-full bg-white' : 'bg-surface'
            }`}
          >
            <img
              src={src}
              alt={alt}
              className={
                fit === 'contain'
                  ? 'h-auto w-full'
                  : `${aspect} w-full object-cover ${position} transition-transform duration-500 group-hover:scale-105`
              }
              loading="lazy"
              decoding="async"
            />
            {label && (
              <span className="absolute bottom-2 left-2 rounded-md bg-night/70 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                {label}
              </span>
            )}
          </li>
        ))}
      </ul>
      {caption && <figcaption className="mt-3 text-sm text-ink-muted">{caption}</figcaption>}
    </figure>
  )
}
