import { useEffect } from 'react'
import { Download, ArrowUpRight } from 'lucide-react'

export default function ResumePage() {
  useEffect(() => {
    document.title = 'Résumé — Ayush Gaire'
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <main className="mx-auto w-full max-w-6xl px-5 sm:px-6 pt-28 sm:pt-32 pb-20 min-h-screen">
      <header className="mb-10">
        <p className="label mb-3">Résumé</p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink">
          Ayush Gaire — Résumé
        </h1>
        <p className="mt-4 text-base text-ink-2 max-w-2xl leading-relaxed">
          Computer Science student and software engineer. Current résumé below —
          download the PDF or view it inline.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {/* Download — explicit filename, download attribute */}
          <a
            href="/resume.pdf"
            download="Ayush-Gaire-Resume.pdf"
            className="btn-primary"
          >
            <Download size={16} strokeWidth={2.2} />
            Download PDF
          </a>

          {/* View — opens in new tab, no download */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="btn-secondary"
          >
            Open in new tab
            <ArrowUpRight size={16} strokeWidth={2.2} />
          </a>
        </div>
      </header>

      {/* Inline PDF viewer. Falls back gracefully if the browser can't render. */}
      <div className="rounded-lg border border-border overflow-hidden bg-white">
        <object
          data="/resume.pdf#view=FitH"
          type="application/pdf"
          aria-label="Ayush Gaire — Résumé PDF"
          className="w-full"
          style={{ height: 'min(90vh, 1100px)' }}
        >
          <div className="p-8 text-center">
            <p className="text-ink-2 mb-4">
              Your browser can&apos;t display the PDF inline.
            </p>
            <a
              href="/resume.pdf"
              download="Ayush-Gaire-Resume.pdf"
              className="btn-primary"
            >
              <Download size={16} strokeWidth={2.2} />
              Download Résumé
            </a>
          </div>
        </object>
      </div>
    </main>
  )
}
