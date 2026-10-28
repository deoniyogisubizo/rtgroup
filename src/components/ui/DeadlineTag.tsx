'use client'
import { useEffect, useState } from 'react'

type DeadlineTagProps = {
  deadline: string | Date
}

export function DeadlineTag({ deadline }: DeadlineTagProps) {
  const [timeLeft, setTimeLeft] = useState<string>('')
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const end = new Date(deadline).getTime()
    const update = () => {
      const now = Date.now()
      if (now >= end) {
        setHidden(true)
        return
      }
      const diff = end - now
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      setTimeLeft(`${days}d ${hours}h`)
    }
    update()
    const id = setInterval(update, 60000)
    return () => clearInterval(id)
  }, [deadline])

  if (hidden) return null
  return (
    <span className="inline-block px-2 py-1 text-xs border border-[color:var(--color-ink)] bg-[color:var(--color-urgent)] text-[color:var(--color-ink)] rounded-[2px]" style={{fontFamily: 'var(--font-mono)', letterSpacing: '+0.06em', textTransform: 'uppercase'}}>
      DEADLINE {timeLeft}
    </span>
  )
}
