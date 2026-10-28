'use client'
import Image from 'next/image'

type RealImageProps = {
  src: string
  alt: string
  ratio?: '4/3' | '3/2' | '16/9' | '1/1'
  caption?: string
  id?: string
  priority?: boolean
}

const ratios: Record<string, string> = {
  '4/3': 'aspect-[4/3]',
  '3/2': 'aspect-[3/2]',
  '16/9': 'aspect-[16/9]',
  '1/1': 'aspect-square',
}

export function RealImage({ src, alt, ratio = '4/3', caption, id, priority }: RealImageProps) {
  return (
    <figure className="w-full">
      <div className={`${ratios[ratio]} w-full relative overflow-hidden border border-[color:var(--color-line)] bg-[color:var(--color-surface)]`}>
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority={priority} />
      </div>
      {(caption || id) && (
        <figcaption className="mt-2 px-2 py-1 border-t border-b border-[color:var(--color-line)] flex items-center gap-3" style={{fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '+0.06em', textTransform: 'uppercase'}}>
          {id && <span>{id}</span>}
          {caption && <span className="text-[color:var(--color-muted)]">{caption}</span>}
        </figcaption>
      )}
    </figure>
  )
}
