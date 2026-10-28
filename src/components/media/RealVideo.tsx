'use client'
import { useEffect, useRef, useState } from 'react'

type RealVideoProps = {
  src: string
  poster: string
  title?: string
}

export function RealVideo({ src, poster, title }: RealVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '300px' },
    )
    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <figure className="w-full">
      <div ref={containerRef} className="aspect-[16/9] w-full relative overflow-hidden border border-[color:var(--color-line)] bg-[color:var(--color-surface)]">
        <video
          src={shouldLoad ? src : undefined}
          poster={poster}
          autoPlay={shouldLoad}
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover"
        />
      </div>
      {title && <figcaption className="mt-2" style={{fontFamily: 'var(--font-body)'}}>{title}</figcaption>}
    </figure>
  )
}
