'use client'

import { useRef } from 'react'
import ScrollReveal from './ScrollReveal'

const testimonials = [
  {
    id: 1,
    name: 'Cindy',
    dogName: 'Saba',
    neighborhood: 'Myers Park',
    quote:
      "I honestly didn't think it was possible. Saba was reactive, pulled constantly, and I'd stopped taking her to most places because I was embarrassed. Genna didn't sugarcoat anything, she just showed me what I was doing wrong and how to fix it. Six weeks later I took Saba to Freedom Park off-leash. I cried in the parking lot.",
    photo: '{CINDY_PHOTO}',
    photoAlt: 'Cindy and Saba in Myers Park',
  },
  {
    id: 2,
    name: '{CLIENT_NAME_2}',
    dogName: '{DOG_NAME_2}',
    neighborhood: '{NEIGHBORHOOD_2}',
    quote: '{TESTIMONIAL_2}',
    photo: '{CLIENT_PHOTO_2}',
    photoAlt: '{CLIENT_PHOTO_ALT_2}',
    placeholder: true,
  },
  {
    id: 3,
    name: '{CLIENT_NAME_3}',
    dogName: '{DOG_NAME_3}',
    neighborhood: '{NEIGHBORHOOD_3}',
    quote: '{TESTIMONIAL_3}',
    photo: '{CLIENT_PHOTO_3}',
    photoAlt: '{CLIENT_PHOTO_ALT_3}',
    placeholder: true,
  },
]

function StarRow() {
  return (
    <div className="flex items-center gap-1" aria-label="Five star rating">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
          <path
            d="M7 1l1.545 3.13 3.455.502-2.5 2.438.59 3.44L7 8.885 3.91 10.51l.59-3.44L2 4.632l3.455-.502L7 1z"
            fill="#B8956A"
          />
        </svg>
      ))}
    </div>
  )
}

interface TestimonialCardProps {
  t: (typeof testimonials)[0]
  delay: number
}

function TestimonialCard({ t, delay }: TestimonialCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <article
        className={`bg-bone border border-brass/20 p-8 flex flex-col h-full ${
          t.placeholder ? 'opacity-40 border-dashed' : ''
        }`}
      >
        {/* Owner + dog photo (square) */}
        <div className="w-14 h-14 rounded-[4px] bg-cream/80 border border-brass/20 flex items-center justify-center mb-6 flex-shrink-0 overflow-hidden">
          {t.placeholder ? (
            <span className="font-sans text-[10px] text-stone/50 text-center px-1">
              {t.photo}
            </span>
          ) : (
            <span className="font-sans text-[10px] text-stone/50 text-center px-1">
              {t.photo}
            </span>
          )}
        </div>

        {/* Name + dog */}
        <div className="mb-4">
          <p className="font-display text-[18px] text-ink leading-[1.2]">
            {t.name}
            {t.dogName && !t.placeholder && (
              <span className="text-stone font-sans text-[14px] font-normal">
                {' & '}{t.dogName}
              </span>
            )}
          </p>
          <p className="font-sans text-[11px] uppercase tracking-[0.1em] text-stone mt-1">
            {t.neighborhood}
          </p>
        </div>

        {/* Quote */}
        <blockquote className="font-sans text-[15px] leading-[1.7] text-ink/70 flex-1 mb-6">
          {t.placeholder ? (
            <span className="italic text-stone/60">Testimonial placeholder — add real client quote here</span>
          ) : (
            <>&ldquo;{t.quote}&rdquo;</>
          )}
        </blockquote>

        <StarRow />
      </article>
    </ScrollReveal>
  )
}

export default function Testimonials() {
  return (
    <section id="proof" className="bg-cream py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="max-w-[640px] mb-14">
          <ScrollReveal>
            <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-brass mb-5">
              The Proof
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="font-display text-display-section text-ink">
              Real owners. Real results.
            </h2>
          </ScrollReveal>
        </div>

        {/* Three-up grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} t={t} delay={0.06 * i} />
          ))}
        </div>

        {/* Trust badges row */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center gap-6 mt-14 pt-10 border-t border-ink/10">
            <div className="flex items-center gap-2">
              <StarRow />
              <span className="font-sans text-[12px] text-stone tracking-wide">
                5.0 on Google Reviews
              </span>
            </div>
            <span className="text-stone/30 hidden md:block">·</span>
            <span className="font-sans text-[12px] text-stone tracking-wide">
              {'{CERTIFICATION_1}'}
            </span>
            <span className="text-stone/30 hidden md:block">·</span>
            <span className="font-sans text-[12px] text-stone tracking-wide">
              {'{CERTIFICATION_2}'}
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
