'use client'

import { useEffect, useRef, useState } from 'react'
import ScrollReveal from './ScrollReveal'

const slides = [
  { src: '/images/genna-portrait.png', alt: 'Genna Rittenhouse laughing with three dogs at a Charlotte park' },
  { src: '/images/about/about-1.jpg', alt: 'Genna training session' },
  { src: '/images/about/about-2.jpg', alt: 'Puppy training' },
  { src: '/images/about/about-3.jpg', alt: 'Puppy training session' },
  { src: '/images/about/about-4.jpg', alt: 'Genna with dog' },
  { src: '/images/about/about-5.jpg', alt: 'Dog training' },
  { src: '/images/about/about-6.jpg', alt: 'One on one training' },
  { src: '/images/about/about-7.jpg', alt: 'Training session' },
  { src: '/images/about/about-8.jpg', alt: 'Dog training session' },
]

const INTERVAL_MS = 3500

function Slideshow() {
  const [idx, setIdx] = useState(0)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      const img = imgRef.current
      if (!img) return
      img.style.opacity = '0'
      setTimeout(() => {
        setIdx((c) => (c + 1) % slides.length)
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
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '520px', overflow: 'hidden', background: '#2c3b2d' }}>
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
          objectPosition: 'center 20%',
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

export default function FounderSection() {
  return (
    <section id="about" className="bg-cream overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[600px]">
        {/* Slideshow — full bleed to left edge, no rounded corners */}
        <div className="relative w-full h-[520px] md:h-auto md:w-[42%] flex-shrink-0">
          <Slideshow />
        </div>

        {/* Content column */}
        <div className="flex-1 flex items-center px-8 py-16 md:px-16 md:py-24 lg:px-24">
          <div className="max-w-[560px]">
            <ScrollReveal delay={0}>
              <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-brass mb-6">
                Meet Your Coach
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.06}>
              <h2 className="font-display text-display-section text-ink mb-8 text-balance">
                I&apos;m Genna. Your dog isn&apos;t broken, your communication is.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="font-sans text-[17px] leading-[1.65] text-ink/70 mb-5">
                Most dog owners don&apos;t have a training problem. They have a communication
                problem. They&apos;re speaking in a language their dog doesn&apos;t understand,
                and the dog is doing the only thing it knows how to do: improvise.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.13}>
              <p className="font-sans text-[17px] leading-[1.65] text-ink/70 mb-10">
                There&apos;s usually a moment when owners reach out, when they&apos;ve tried
                the YouTube videos, the group class, the collar their neighbor swore by. When
                they realize the problem isn&apos;t the dog. That moment is where we start.
              </p>
            </ScrollReveal>

            {/* Pull quote */}
            <ScrollReveal delay={0.16}>
              <blockquote className="border-l-[3px] border-brass pl-6 mb-10">
                <p className="font-display italic text-[21px] md:text-[24px] leading-[1.4] text-ink">
                  &ldquo;The bond between you and your dog isn&apos;t a nice-to-have.
                  It&apos;s the whole foundation.&rdquo;
                </p>
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={0.19}>
              <a
                href="#services"
                className="inline-flex items-center gap-2 font-sans text-[13px] text-brass hover:gap-3 transition-all duration-200 tracking-wide"
              >
                More about my approach
                <span aria-hidden>→</span>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
