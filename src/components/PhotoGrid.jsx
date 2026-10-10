/** Grid of photos: [{ src, alt, label?, position?, fit? }]. `fit: 'contain'` photos are shown whole inside the tile instead of cropped, and open full size on click. */
export function PhotoGrid({ photos, aspect = 'aspect-[4/3]', columns = 'grid-cols-2 lg:grid-cols-3', caption }) {
  if (!photos?.length) return null
  return (
    <figure>
      <ul className={`grid gap-3 sm:gap-4 ${columns}`}>
        {photos.map(({ src, alt, label, position = 'object-center', fit }) => (
          <li
            key={src}
            className={`group relative overflow-hidden rounded-xl border border-line/5 ${
              fit === 'contain' ? 'bg-white' : 'bg-surface'
            }`}
          >
            {fit === 'contain' ? (
              <a href={src} target="_blank" rel="noopener noreferrer" className="block cursor-zoom-in" title="Open full size">
                <img
                  src={src}
                  alt={alt}
                  className={`${aspect} w-full object-contain p-3`}
                  loading="lazy"
                  decoding="async"
                />
              </a>
            ) : (
              <img
                src={src}
                alt={alt}
                className={`${aspect} w-full object-cover ${position} transition-transform duration-500 group-hover:scale-105`}
                loading="lazy"
                decoding="async"
              />
            )}
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
