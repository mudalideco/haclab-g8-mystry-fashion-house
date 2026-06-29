'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function FullscreenCursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      gsap.to(dot.current, { x: e.clientX, y: e.clientY, duration: 0 })
      gsap.to(ring.current, { x: e.clientX, y: e.clientY, duration: 0.18, ease: 'power2.out' })
    }
    const onEnter = () => gsap.to(ring.current, { scale: 2.5, duration: 0.3 })
    const onLeave = () => gsap.to(ring.current, { scale: 1, duration: 0.3 })

    window.addEventListener('mousemove', onMove)
    document.querySelectorAll('a,button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div ref={dot} className="pointer-events-none fixed z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)]" />
      <div ref={ring} className="pointer-events-none fixed z-[9998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--primary)] mix-blend-difference" />
    </>
  )
}