'use client'

import { useState, useEffect, useCallback } from 'react'

const testimonials = [
  {
    id: 1,
    quote: 'One word to describe Genna: INCREDIBLE!',
    name: 'MEGHAN K.',
  },
  {
    id: 2,
    quote:
      "I honestly didn't think it was possible. Saba was reactive, pulled constantly, and I'd stopped taking her to most places. Genna didn't sugarcoat anything — six weeks later I took Saba to Freedom Park off-leash. I cried in the parking lot.",
    name: 'CINDY, Myers Park',
  },
  {
    id: 3,
    quote:
      "Genna has a gift. She doesn't just train dogs — she teaches you to understand yours. Worth every penny.",
    name: 'SARAH T.',
  },
  {
    id: 4,
    quote:
      "We tried two other trainers before Genna. None of them explained the 'why' the way she does. Our dog is a completely different animal.",
    name: 'JASON & KELLY M.',
  },
  {
    id: 5,
    quote:
      "Highly recommend to anyone in the Charlotte area. Patient, knowledgeable, and genuinely cares about your dog's wellbeing.",
    name: 'AMANDA R.',
  },
]

function Stars() {
  return (
    <div className="flex items-center gap-[5px] mb-6" aria-label="Five star rating">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 14 14" fill="none" aria-hidden>
          <path
            d="M7 1l1.545 3.13 3.455.502-2.5 2.438.59 3.44L7 8.885 3.91 10.51l.59-3.44L2 4.632l3.455-.502L7 1z"
            fill="#C8984A"
          />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialSlideshow() {
  const [active, setActive] = useState(0)
  const [fading, setFading] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      if (index === active) return
      setFading(true)
      setTimeout(() => {
        setActive(index)
        setFading(false)
      }, 280)
    },
    [active]
  )

  // Auto-advance every 5 seconds
  useEffect(() => {
    const t = setInterval(() => {
      goTo((active + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(t)
  }, [active, goTo])

  const current = testimonials[active]

  return (
    <section
      className="w-full relative overflow-hidden"
      style={{ backgroundColor: '#161412' }}
    >
      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
          zIndex: 0,
        }}
      />

      <div
        className="relative max-w-[860px] mx-auto px-8 py-16 md:py-20 flex flex-col items-center text-center"
        style={{ zIndex: 1 }}
      >
        <Stars />

        {/* Quote */}
        <blockquote
          className="font-display italic text-white leading-[1.45] mb-8 transition-opacity duration-300"
          style={{
            fontSize: 'clamp(19px, 2.2vw, 32px)',
            opacity: fading ? 0 : 1,
          }}
        >
          &ldquo;{current.quote}&rdquo;
        </blockquote>

        {/* Attribution */}
        <p
          className="font-sans uppercase tracking-[0.2em] transition-opacity duration-300"
          style={{
            fontSize: '11px',
            color: '#9CA68A',
            opacity: fading ? 0 : 1,
          }}
        >
          {current.name}
        </p>

        {/* Dot nav */}
        <div className="flex items-center gap-3 mt-10" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              style={{
                width: i === active ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: i === active ? '#C8984A' : 'rgba(255,255,255,0.25)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'all 0.35s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
