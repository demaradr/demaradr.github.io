import { useEffect, useRef, useState } from 'react'

/** Full-size view of a photo in a modal dialog. Closes on Esc, the close button, or a click outside the image. */
function Lightbox({ photo, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    if (photo) ref.current?.showModal()
    else ref.current?.close()
  }, [photo])

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      aria-label={photo?.alt}
      className="m-auto max-h-none max-w-none bg-transparent p-4 backdrop:bg-night/80 backdrop:backdrop-blur-sm"
    >
      {photo && (
        <div className="relative">
          <img src={photo.src} alt={photo.alt} className="max-h-[90vh] max-w-[95vw] rounded-xl bg-white p-3 shadow-2xl" />
          <button
            type="button"
            onClick={onClose}
            className="absolute -right-3 -top-3 inline-flex items-center justify-center rounded-full border border-line/10 bg-canvas p-2 text-ink shadow-lg"
            aria-label="Close"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}
    </dialog>
  )
}

/** Grid of photos: [{ src, alt, label?, position?, fit? }]. `fit: 'contain'` photos are shown whole inside the tile instead of cropped, and open full size in a modal on click. */
export function PhotoGrid({ photos, aspect = 'aspect-[4/3]', columns = 'grid-cols-2 lg:grid-cols-3', caption }) {
  const [enlarged, setEnlarged] = useState(null)
  if (!photos?.length) return null
  return (
    <figure>
      <ul className={`grid gap-3 sm:gap-4 ${columns}`}>
        {photos.map((photo) => {
          const { src, alt, label, position = 'object-center', fit } = photo
          return (
            <li
              key={src}
              className={`group relative overflow-hidden rounded-xl border border-line/5 ${
                fit === 'contain' ? 'bg-white' : 'bg-surface'
              }`}
            >
              {fit === 'contain' ? (
                <button
                  type="button"
                  onClick={() => setEnlarged(photo)}
                  className="block w-full cursor-zoom-in"
                  aria-label={`View full size: ${alt}`}
                >
                  <img
                    src={src}
                    alt={alt}
                    className={`${aspect} w-full object-contain p-3`}
                    loading="lazy"
                    decoding="async"
                  />
                </button>
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
          )
        })}
      </ul>
      {caption && <figcaption className="mt-3 text-sm text-ink-muted">{caption}</figcaption>}
      <Lightbox photo={enlarged} onClose={() => setEnlarged(null)} />
    </figure>
  )
}
