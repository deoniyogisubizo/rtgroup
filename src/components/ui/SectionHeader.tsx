type SectionHeaderProps = {
  index: string
  title: string
}

export function SectionHeader({ index, title }: SectionHeaderProps) {
  return (
    <header className="mb-6">
      <div style={{fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '+0.06em', textTransform: 'uppercase'}}>{index}</div>
      <h2 style={{fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '-0.02em', fontSize: 'clamp(1.375rem, 3vw, 2rem)', textWrap: 'balance'}}>{title}</h2>
    </header>
  )
}
