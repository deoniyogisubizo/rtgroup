type VideoSlotProps = {
  ratio?: '16/9'
  title?: string
}

export function VideoSlot({ title = 'Inside the workshop' }: VideoSlotProps) {
  return (
    <figure className="w-full">
      <div className={`aspect-[16/9] w-full border border-[color:var(--color-line)] bg-[color:var(--color-paper)] relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-[color:var(--color-sky)] border-2 border-[color:var(--color-ink)] flex items-center justify-center">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[color:var(--color-ink)] border-b-8 border-b-transparent ml-1" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 px-2 py-1 bg-[color:var(--color-paper)] border border-[color:var(--color-line)]" style={{fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '+0.06em', textTransform: 'uppercase'}}>
          VIDEO: add demo or workshop film
        </div>
      </div>
      <figcaption className="mt-2" style={{fontFamily: 'var(--font-body)'}}>{title}</figcaption>
    </figure>
  )
}
