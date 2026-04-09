const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

const variants = {
  primary:
    `${base} bg-accent text-white shadow-sm hover:bg-accent-hover focus-visible:outline-accent`,
  secondary:
    `${base} border border-black/10 bg-white text-ink hover:border-black/20 hover:bg-surface focus-visible:outline-accent`,
  ghost: `${base} border border-transparent text-ink hover:bg-surface focus-visible:outline-accent`,
}

export function ButtonLink({ variant = 'secondary', className = '', ...props }) {
  return <a className={`${variants[variant] ?? variants.secondary} ${className}`.trim()} {...props} />
}
