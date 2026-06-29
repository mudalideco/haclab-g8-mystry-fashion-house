'use client'
import { useEffect, useRef } from 'react'
import SplitType from 'split-type'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import type { ElementType, HTMLAttributes } from 'react'

gsap.registerPlugin(ScrollTrigger)

type SplitRevealProps<T extends ElementType = 'span'> = {
  children: string
  as?: T
  type?: 'chars' | 'words' | 'lines'
  stagger?: number
  duration?: number
  ease?: string
  className?: string
} & Omit<HTMLAttributes<HTMLElement>, 'className'>

export function SplitReveal<T extends ElementType = 'span'>({
  children,
  as: Tag = 'span' as T,
  type = 'chars',
  stagger = 0.06,
  duration = 1.2,
  ease = 'power4.out',
  className
}: SplitRevealProps<T>) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const split = new SplitType(ref.current, { types: type, lineClass: 'overflow-hidden' })
    const items = type === 'chars' ? split.chars : type === 'words' ? split.words : split.lines

    if (!items || items.length === 0) return

    gsap.from(items, {
      yPercent: 110,
      opacity: 0,
      stagger,
      duration,
      ease,
      scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true }
    })

    return () => split.revert()
  }, [type, stagger, duration, ease])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Tag ref={ref as any} className={className}>{children}</Tag>
}