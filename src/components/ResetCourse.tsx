'use client'

import { useEffect, useRef, useState } from 'react'
import ScrollReveal from './ScrollReveal'

const slides = [
  { src: '/images/slideshow/IMG_9100.jpg', alt: 'Genna training session' },
  { src: '/images/slideshow/IMG_9105.jpg', alt: 'Dog training in home' },
  { src: '/images/slideshow/IMG_9104.jpg', alt: 'Dog training session' },
  { src: '/images/slideshow/IMG_9108.jpeg', alt: 'Genna with dogs' },
  { src: '/images/slideshow/IMG_9110.jpg', alt: 'Training moment' },
  { src: '/images/slideshow/IMG_9113.jpg', alt: 'Dog obedience training' },
  { src: '/images/slideshow/IMG_9114.jpg', alt: 'In-home coaching session' },
  { src: '/images/slideshow/IMG_9106.jpg', alt: 'Dog and owner working together' },
  { src: '/images/slideshow/IMG_9111.jpg', alt: 'Training progress' },
]

const INTERVAL_MS = 3500

function Slideshow() {
  const [idx, setIdx] = useState(0)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      const img = imgRef.current
      if (!img) return
      // fade out
      img.style.opacity = '0'
      setTimeout(() => {
        setIdx((c) => (c + 1) % slides.length)
        // fade in happens after src swap via onLoad or short delay
        setTimeout(() => {
          if (imgRef.current) imgRef.current.style.opacity = '1'
        }, 50)
      }, 400)
    }, INTERVAL_MS)
    return () => clearInterval(timer)
  }, [])

  function goTo(i: number) {
    const img = imgRef.current
    if (!img || i === idx) return
    img.style.opacity = '0'
    setTimeout(() => {
      setIdx(i)
      setTimeout(() => {
        if (imgRef.current) imgRef.current.style.opacity = '1'
      }, 50)
    }, 350)
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '480px', overflow: 'hidden', background: '#2c3b2d' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={slides[idx].src}
        alt={slides[idx].alt}
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          opacity: 1,
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* Dot indicators */}
      <div style={{ position: 'absolute', bottom: '16px', left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '8px', zIndex: 10 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === idx ? '18px' : '7px',
              height: '7px',
              borderRadius: '9999px',
              backgroundColor: i === idx ? 'rgba(245,240,230,0.85)' : 'rgba(245,240,230,0.35)',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function ResetCourse() {
  return (
    <section id="reset-course" className="bg-forest overflow-hidden">
      <div className="max-w-[1400px] mx-auto md:grid md:grid-cols-[55%_45%]">

        {/* Slideshow panel — fixed height on desktop so Slideshow gets a real height */}
        <div style={{ position: 'relative', minHeight: '480px' }} className="md:min-h-[600px]">
          <Slideshow />
        </div>

        {/* Content panel */}
        <div className="flex items-center border-t md:border-t-0 md:border-l border-cream/10 px-8 py-16 md:px-16 md:py-20 lg:px-20">
          <div>
            <ScrollReveal delay={0}>
              <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-brass mb-6">
                Self-Paced&ensp;·&ensp;Unlimited Access&ensp;·&ensp;$37
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <h2 className="font-display text-display-section text-cream mb-7 text-balance">
                Have some training, but something still feels off?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="font-sans text-[16px] leading-[1.65] text-cream/65 mb-5">
                Life gets in the way. You learned the basics, built some momentum, and then
                it slipped. Work got busy, the dog regressed, or maybe you just never quite
                got to the hard stuff.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.13}>
              <p className="font-sans text-[16px] leading-[1.65] text-cream/65 mb-10">
                <span className="font-display italic text-cream/85">CTRL + ALT + DELETE</span>{' '}
                is the reset mini-course for exactly this moment, a self-paced walkthrough to
                rebuild your foundation, clarify your communication, and get back on track
                without starting from scratch.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-[14px] bg-brass text-ink font-sans text-[13px] tracking-[0.08em] uppercase hover:bg-[#a67e57] transition-colors duration-250"
              >
                Get the Reset Course
                <span aria-hidden>→</span>
              </a>
            </ScrollReveal>
          </div>
        </div>

      </div>
    </section>
  )
}
