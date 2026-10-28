type ImageSlotProps = {
  ratio?: '4/3' | '3/2' | '16/9' | '1/1'
  caption?: string
  id?: string
}

const ratios = {
  '4/3': 'aspect-[4/3]',
  '3/2': 'aspect-[3/2]',
  '16/9': 'aspect-[16/9]',
  '1/1': 'aspect-square',
}

export function ImageSlot({ ratio = '4/3', caption, id }: ImageSlotProps) {
  const isEmpty = !caption && !id
  return (
    <figure className="w-full">
      <div className={`${ratios[ratio]} w-full border border-[color:var(--color-line)] bg-[color:var(--color-paper)] relative overflow-hidden`}>
        {isEmpty ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(12,26,42,0.06) 4px, rgba(12,26,42,0.06) 8px)',
            }} />
            <div className="absolute inset-0">
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[color:var(--color-muted)]" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[color:var(--color-muted)]" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[color:var(--color-muted)]" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[color:var(--color-muted)]" />
            </div>
            <div className="absolute text-center px-4" style={{fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '+0.06em', textTransform: 'uppercase'}}>
              PHOTO: workshop / {ratio.replace('/', ':')}
            </div>
          </div>
        ) : (
          <div className="w-full h-full bg-[color:var(--color-surface)]" />
        )}
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
