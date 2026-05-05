'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const HONEYBOOK_URL =
  'https://www.honeybook.com/widget/best_good_friend_training_llc_296123/cf_id/6806fc7d140e43002c11e347'

const services = [
  { title: 'Private In-Home Coaching', id: 'private-coaching' },
  { title: 'Puppy Foundations', id: 'puppy-foundations' },
  { title: 'Off-Leash Training', id: 'off-leash' },
  { title: 'Behavioral Tune-Ups', id: 'behavioral-tune-ups' },
]

const reviews = [
  { text: 'Genna has gone "above and beyond" offering dog advice.', author: 'Dustin T.' },
  { text: 'Roxie adores Genna, still gets excited and runs to her when she sees her, like a member of her pack!', author: 'Dustin T.' },
  { text: 'One word to describe Genna: INCREDIBLE!', author: 'Meghan K.' },
  { text: 'The relief that Bambi wasn\'t "broken" was a huge win!', author: 'Meghan K.' },
  { text: 'Absolutely amazing!', author: 'Jorge H.' },
  { text: 'A++++++ Genna is an AMAZING dog trainer!!!', author: 'Lindsey C.' },
  { text: 'Poppy is more confident, better behaved on walks, and much calmer in the house.', author: 'Lindsey C.' },
  { text: 'She has so much knowledge, not just on training skills but on why dogs do certain behaviors.', author: 'Megan D.' },
  { text: 'If you\'re looking for a trainer who truly cares, gets results, and makes the process enjoyable, look no further. Genna has been a game-changer for us!', author: 'Lindsay C.' },
  { text: 'Genna will not only assist in training your dog, she helps you as the owner understand how as well.', author: 'Mikaela A.' },
  { text: 'She comes to you, which makes training so much more "life like" and real. She listens to not only what your dog needs, but what you need as an owner.', author: 'Emily P.' },
  { text: 'Her training is not only beneficial for your dog, but more importantly for you as the owner.', author: 'Ellie H.' },
  { text: 'I was amazed at the improvement I saw after just one session with Genna.', author: 'Hope G.' },
  { text: 'Genna\'s approach truly includes owner coaching. I had just as much to learn as my dog. Highly recommend!', author: 'Hope G.' },
  { text: 'She has the natural ability to connect with both pups and their people, fostering clear communication and making the training journey feel personalized and special.', author: 'Sue G.' },
  { text: 'Genna was absolutely amazing!', author: 'Brad S.' },
  { text: 'I would highly recommend Genna to any of my friends!', author: 'Brad S.' },
  { text: 'Genna is the absolute best!', author: 'Caddie K.' },
  { text: 'I truly can\'t recommend Genna enough!!', author: 'Caddie K.' },
  { text: 'The results were noticeable quickly: better behavior, improved focus, and a stronger bond between me and my dog.', author: 'C.R.' },
]

const REVIEW_INTERVAL_MS = 30000

function ReviewSlideshow() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIdx((c) => (c + 1) % reviews.length)
        setVisible(true)
      }, 400)
    }, REVIEW_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [])

  function goTo(i: number) {
    if (i === idx) return
    setVisible(false)
    setTimeout(() => {
      setIdx(i)
      setVisible(true)
    }, 350)
  }

  const review = reviews[idx]

  return (
    <div className="border-t border-cream/15 pt-5 pb-2">
      {/* Stars */}
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="13" height="13" viewBox="0 0 13 13" fill="#C4963A">
            <polygon points="6.5,1 8.2,4.5 12,5.1 9.25,7.75 9.9,11.5 6.5,9.7 3.1,11.5 3.75,7.75 1,5.1 4.8,4.5" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease', minHeight: '64px' }}>
        <p className="font-display italic text-[16px] md:text-[19px] leading-[1.45] text-cream/90 mb-2">
          &ldquo;{review.text}&rdquo;
        </p>
        <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-brass">
          {review.author}
        </p>
      </div>

      {/* Dot indicators */}
      <div className="flex flex-wrap gap-[5px] mt-4">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to review ${i + 1}`}
            style={{
              width: i === idx ? '18px' : '6px',
              height: '6px',
              borderRadius: '9999px',
              backgroundColor: i === idx ? 'rgba(196,150,58,0.85)' : 'rgba(245,240,230,0.25)',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </div>
  )
}

function ServicesBar() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  function scrollTo(id: string) {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div ref={ref} className="relative z-10 border-t border-cream/20">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {services.map((s, i) => (
          <motion.button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            initial={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 + i * 0.1 }}
            className={[
              'group flex items-center justify-between px-4 py-4 md:px-8 md:py-6 text-left',
              'hover:bg-cream/5 transition-colors duration-200 cursor-pointer',
              // Mobile 2-col grid: only right-column items (odd indices) get border-l
              // Desktop 4-col grid: all except first get border-l
              i % 2 !== 0 ? 'border-l border-cream/20' : '',
              i > 0 && i % 2 === 0 ? 'md:border-l md:border-cream/20' : '',
              // Bottom row on mobile gets border-t; removed on md
              i >= 2 ? 'border-t md:border-t-0 border-cream/20' : '',
            ].join(' ')}
          >
            <span className="font-display italic text-[clamp(12px,1.4vw,22px)] text-cream leading-tight">
              {s.title}
            </span>
            <span className="ml-2 text-brass opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0 text-sm">
              →
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      initial={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden bg-forest flex flex-col">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-bg.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 z-0 w-full h-full object-cover object-center"
      />
      {/* Darkening overlays */}
      <div className="absolute inset-0 z-0 bg-ink/50" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-ink/60 via-ink/30 to-ink/10" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/20" />

      {/* ── Main content ── */}
      <div
        className={[
          'relative z-10 flex-1',
          'flex flex-col justify-center px-5 pt-20 pb-4',
          'md:flex-row md:items-center md:justify-start md:pt-20 md:pb-4',
          'md:pl-[max(48px,calc((100vw-1400px)/2+64px))] md:pr-12',
          'gap-6 md:gap-14 lg:gap-20',
        ].join(' ')}
      >
        {/* ── LEFT: Headline + CTAs ── */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* H1 */}
          <FadeIn delay={0.05}>
            <h1 className="font-display text-display-hero text-cream mb-3 md:mb-5">
              Professional Dog Training in Charlotte, NC Area
            </h1>
          </FadeIn>

          {/* Subhead */}
          <FadeIn delay={0.12}>
            <p className="font-sans text-[14px] md:text-[17px] leading-[1.65] text-cream/80 max-w-[44ch] mb-4 md:mb-6">
              Build the dog you&apos;ve always wanted through real communication, not just commands.
            </p>
          </FadeIn>

          {/* Credential bullets */}
          <FadeIn delay={0.18}>
            <ul className="mb-6 md:mb-8 space-y-1.5 md:space-y-2">
              {[
                'Certified Canine Coach with 10+ Years of Experience',
                'Private 1-on-1 In-Home Coaching (Plus Virtual Support)',
                'All Breeds, All Ages, All Behaviors',
                'Different Training for Every Dog',
                'Serving Charlotte, Matthews, Huntersville, Davidson, Concord, NC & Surrounding Areas',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 font-sans text-[12px] md:text-[15px] text-cream/75 leading-[1.5]">
                  <span className="text-brass mt-[2px] flex-shrink-0 text-[10px] md:text-[12px]">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.25}>
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              {/* Button + arrows centered under it */}
              <div className="flex flex-col items-center">
                <a
                  href={HONEYBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    'inline-flex items-center gap-2 px-6 py-[12px] md:px-7 md:py-[14px]',
                    'bg-brass text-ink font-sans text-[12px] md:text-[13px] tracking-[0.08em] uppercase',
                    'hover:bg-[#a67e57] transition-colors duration-250',
                  ].join(' ')}
                >
                  Book Your Discovery Call
                  <span aria-hidden className="text-ink/70">→</span>
                </a>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/six-paw-arrows.svg"
                  alt=""
                  aria-hidden="true"
                  style={{
                    display: 'block',
                    width: '100%',
                    maxWidth: '380px',
                    height: 'auto',
                    marginTop: '6px',
                  }}
                />
              </div>
              <a
                href="#services"
                className={[
                  'inline-flex items-center gap-1.5 py-[12px] md:py-[14px] font-sans text-[12px] md:text-[13px] tracking-wide',
                  'text-cream/90 border-b border-cream/50',
                  'hover:text-cream hover:border-cream transition-colors duration-200',
                ].join(' ')}
              >
                See the services
              </a>
            </div>
          </FadeIn>
        </div>

        {/* ── RIGHT: Review slideshow — hidden on mobile to keep hero clean ── */}
        <FadeIn
          delay={0.32}
          className="hidden md:block w-full md:w-[36%] lg:w-[32%] flex-shrink-0 md:border-l md:border-cream/15 md:pl-10 lg:pl-14"
        >
          <ReviewSlideshow />
        </FadeIn>
      </div>

      {/* ── Services bar ── */}
      <div className="relative z-10">
        <ServicesBar />
      </div>
    </section>
  )
}
