'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h2 className="text-3xl font-serif font-bold text-[var(--foreground)] mb-4">
          Something went wrong
        </h2>
        <p className="text-[var(--muted)] mb-6">
          We apologize for the inconvenience. Please try again or contact us.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-2 rounded-lg bg-[var(--primary)] text-white font-medium hover:bg-[var(--primary)]/90 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-2 rounded-lg bg-[var(--surface)] border border-[var(--muted)] text-[var(--foreground)] font-medium hover:bg-[var(--muted)] transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}