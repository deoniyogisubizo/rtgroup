import { RealImage } from '@/components/media/RealImage'
import { RealVideo } from '@/components/media/RealVideo'

const images = [
  { src: '/gallery/456.jpg.jpeg', alt: 'Workshop activity', id: 'RT-0001' },
  { src: '/gallery/123.jpg.jpeg', alt: 'Hands-on training', id: 'RT-0002' },
  { src: '/gallery/%23HSW2026 We are reading this in technlogies🔥🔥.jpg.jpeg', alt: 'Tech learning session', id: 'RT-0003' },
  { src: '/gallery/%23HSW2026 We are reading this in technlogies🔥🔥 (1).jpg.jpeg', alt: 'Workshop participants', id: 'RT-0004' },
  { src: '/gallery/607174953_122165004086783138_5061157649785967358_n.jpg.jpeg', alt: 'Practical session', id: 'RT-0005' },
  { src: '/gallery/607970264_122165004032783138_7507088222027273441_n.jpg.jpeg', alt: 'Workshop moment', id: 'RT-0006' },
  { src: '/gallery/WhatsApp Image 2026-10-27 at 21.57.09.jpeg', alt: 'Working station', id: 'RT-0007' },
  { src: '/gallery/WhatsApp Image 2026-10-27 at 21.57.10.jpeg', alt: 'Workshop work', id: 'RT-0008' },
  { src: '/gallery/WhatsApp Image 2026-04-10 at 13.04.13.jpeg', alt: 'Training activity', id: 'RT-0009' },
  { src: '/gallery/Another day another workshop in internship with them from different schools.webp', alt: 'Internship workshop', id: 'RT-0010' },
  { src: '/gallery/Building a future-ready workforce starts with skills! 💡 Our program prepares graduates for ICT (1).webp', alt: 'Future-ready workforce', id: 'RT-0011' },
  { src: '/gallery/ChatGPT Image Jul 5, 2026, 07_11_14 PM.png', alt: 'RTGroup activity', id: 'RT-0012' },
  { src: '/gallery/ChatGPT Image May 15, 2026, 08_20_03 PM (1).png', alt: 'Workshop session', id: 'RT-0013' },
  { src: '/gallery/ChatGPT Image May 15, 2026, 08_20_03 PM (2).png', alt: 'Practical learning', id: 'RT-0014' },
]

const videos = [
  { src: '/video/workshop-action.mp4', poster: '/video/workshop-action.webp', title: 'Workshop in action' },
  { src: '/video/hands-on-learning.mp4', poster: '/video/hands-on-learning.webp', title: 'Hands-on learning' },
  { src: '/video/rtgroup-workshop.mp4', poster: '/video/rtgroup-workshop.webp', title: 'RTGroup workshop' },
]

export default function GalleryPage() {
  const count = images.length
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h1 style={{fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '-0.02em', fontSize: 'clamp(2rem, 5vw, 3rem)'}}>Gallery</h1>
        <p className="mt-2" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>A look into RTGroup’s workshop — builds, classes, and moments from the lab.</p>
        <p className="mt-2 text-sm text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-mono)', letterSpacing: '+0.06em', textTransform: 'uppercase'}}>{count} photos</p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 style={{fontFamily: 'var(--font-heading)', fontWeight: 600}}>RT Group</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.slice(0, 6).map((img) => (
            <div key={img.id}>
              <RealImage src={img.src} alt={img.alt} ratio="3/2" id={img.id} caption={img.alt} />
            </div>
          ))}
        </div>
      </section>

      <section className="section-wash">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 style={{fontFamily: 'var(--font-heading)', fontWeight: 600}}>Workshop Videos</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-6">
            {videos.map((v, i) => (
              <RealVideo key={i} src={v.src} poster={v.poster} title={v.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 style={{fontFamily: 'var(--font-heading)', fontWeight: 600}}>All Photos</h2>
        <div className="mt-4 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img) => (
            <div key={img.id} className="break-inside-avoid mb-4">
              <RealImage src={img.src} alt={img.alt} ratio="4/3" id={img.id} caption={img.alt} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
