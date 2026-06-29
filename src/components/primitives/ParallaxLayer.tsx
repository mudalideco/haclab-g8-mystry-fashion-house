'use client'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function ParallaxLayer({ children, depth = 0.3, className }: {
  children: React.ReactNode
  depth?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    gsap.to(ref.current, {
      yPercent: -100 * depth,
      ease: 'none',
      scrollTrigger: { trigger: ref.current.parentElement, start: 'top bottom', end: 'bottom top', scrub: true }
    })
  }, [depth])

  return <div ref={ref} className={className}>{children}</div>
}