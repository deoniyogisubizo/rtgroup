type StatusTagProps = {
  status: 'PLANNED' | 'BUILDING' | 'TESTED' | 'COMPLETED'
}

const styles = {
  PLANNED: 'bg-[color:var(--color-paper)] border-[color:var(--color-line)] text-[color:var(--color-muted)]',
  BUILDING: 'bg-[color:var(--color-sky)]/10 border-[color:var(--color-sky)] text-[color:var(--color-ink)]',
  TESTED: 'bg-[color:var(--color-paper)] border-[color:var(--color-line)] text-[color:var(--color-ink)]',
  COMPLETED: 'bg-[color:var(--color-sky)]/20 border-[color:var(--color-sky-deep)] text-[color:var(--color-ink)]',
}

export function StatusTag({ status }: StatusTagProps) {
  return (
    <span className={`inline-block px-2 py-1 text-xs border rounded-[2px] ${styles[status]}`} style={{fontFamily: 'var(--font-mono)', letterSpacing: '+0.06em', textTransform: 'uppercase'}}>
      {status}
    </span>
  )
}
