'use client'
import { useRef } from 'react'
import gsap from 'gsap'

const MAGNET_STRENGTH = 0.35
const SNAP_DURATION = 0.6
const SNAP_EASE = 'elastic.out(1, 0.3)'

export function MagneticButton({ children, className }: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * MAGNET_STRENGTH
    const y = (e.clientY - rect.top - rect.height / 2) * MAGNET_STRENGTH
    gsap.to(ref.current, { x, y, duration: 0.3, ease: 'power2.out' })
  }

  const handleLeave = () => {
    gsap.to(ref.current, { x: 0, y: 0, duration: SNAP_DURATION, ease: SNAP_EASE })
  }

  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} className={className}>
      {children}
    </div>
  )
}