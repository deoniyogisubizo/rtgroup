'use client'

type RealVideoProps = {
  src: string
  poster?: string
  title?: string
}

export function RealVideo({ src, title }: RealVideoProps) {
  return (
    <figure className="w-full">
      <div className="aspect-[16/9] w-full relative overflow-hidden border border-[color:var(--color-line)] bg-[color:var(--color-surface)]">
        <video src={src} autoPlay muted loop playsInline className="w-full h-full object-cover" />
      </div>
      {title && <figcaption className="mt-2" style={{fontFamily: 'var(--font-body)'}}>{title}</figcaption>}
    </figure>
  )
}
