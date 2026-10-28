'use client'
import { useEffect, useRef } from 'react'

export function Reveal({ children, className = '', direction = 'up' }: { children: React.ReactNode, className?: string, direction?: 'up' | 'left' | 'right' }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('in-view')
        obs.unobserve(el)
      }
    }, { threshold: 0.12 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  const dirClass = direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : 'reveal'
  return <div ref={ref} className={`${dirClass} ${className}`}>{children}</div>
}
