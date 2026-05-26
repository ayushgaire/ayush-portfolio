import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let raf

    const move = (e) => {
      mx = e.clientX
      my = e.clientY
      if (dot.current) {
        dot.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`
      }
    }

    const loop = () => {
      rx += (mx - rx) * 0.14
      ry += (my - ry) * 0.14
      if (ring.current) {
        ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(loop)
    }

    const over = (e) => {
      if (e.target.closest('a, button, [data-hover]')) {
        ring.current?.classList.add('hovered')
        dot.current && (dot.current.style.transform += ' scale(0)')
      }
    }
    const out = (e) => {
      if (e.target.closest('a, button, [data-hover]')) {
        ring.current?.classList.remove('hovered')
      }
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    window.addEventListener('mouseout', out)
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      window.removeEventListener('mouseout', out)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  )
}
