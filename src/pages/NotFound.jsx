import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Not Found — Ayush Gaire'
  }, [])

  return (
    <main className="mx-auto w-full max-w-6xl px-5 sm:px-6 pt-28 sm:pt-32 pb-20 min-h-screen flex flex-col justify-center">
      <p className="label mb-3">404</p>
      <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-ink">
        Page not found
      </h1>
      <p className="mt-4 text-base text-ink-2 max-w-xl">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8">
        <Link to="/" className="btn-primary">
          <ArrowLeft size={16} strokeWidth={2.2} />
          Back to home
        </Link>
      </div>
    </main>
  )
}
