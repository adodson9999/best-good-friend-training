'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const HONEYBOOK_URL =
  'https://www.honeybook.com/widget/best_good_friend_training_llc_296123/cf_id/6806fc7d140e43002c11e347'

const services = [
  {
    id: 'private-coaching',
    category: 'Most Popular',
    title: 'private in-home coaching',
    description:
      "One-on-one sessions in your home, in your actual life. Your dog learns in the environment where the problems actually happen.",
    includes: [
      'Initial behavior assessment',
      'Customized training plan',
      'Unlimited text support between sessions',
      'Session recap notes',
    ],
    cta: 'Book a Session',
    bg: '#f5f0e8',
    photoAlt: 'Genna coaching a dog inside a Charlotte home',
  },
  {
    id: 'puppy-foundations',
    category: 'Puppies 8 wks – 6 mo',
    title: 'puppy foundations',
    description:
      'Obedience, potty training, crate work, socialization, and bite inhibition. The full foundation before bad habits calcify.',
    includes: [
      'Potty & crate training',
      'Basic obedience commands',
      'Bite inhibition & socialization',
      'Puppy milestone guide',
    ],
    cta: 'Start Early',
    bg: '#e8ede8',
    photoAlt: 'Puppy learning foundational commands',
  },
  {
    id: 'off-leash',
    category: 'All Ages',
    title: 'off-leash training',
    description:
      "The bluetooth leash. Your dog stays with you and comes when called, in Freedom Park, on the greenway, at a patio table.",
    includes: [
      'Recall under distraction',
      'Heel & loose-leash walking',
      'Real-world field sessions',
      'Long-line & e-collar guidance',
    ],
    cta: 'Get Off-Leash Freedom',
    bg: '#ede8dc',
    photoAlt: 'Dog off-leash in a Charlotte park',
  },
  {
    id: 'behavioral-tune-ups',
    category: 'All Ages',
    title: 'behavioral tune-ups',
    description:
      "You've done your research and made progress, but something isn't clicking. We find the gap and close it.",
    includes: [
      'Targeted behavior assessment',
      'Reactivity & leash manners',
      'Anxiety & confidence building',
      'Owner education deep-dive',
    ],
    cta: "Fix What's Stuck",
    bg: '#e8e8ed',
    photoAlt: 'Owner and dog working through a training challenge',
  },
]

function FadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })
  return (
    <motion.div
      ref={ref}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      initial={{ opacity: 0, y: 22 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface CardProps {
  service: (typeof services)[0]
  delay: number
}

function ServiceCard({ service, delay }: CardProps) {
  return (
    <FadeUp delay={delay}>
      <article
        id={service.id}
        className="flex flex-col rounded-[4px] overflow-hidden h-full"
        style={{ backgroundColor: service.bg }}
      >
        {/* Circular image placeholder */}
        <div className="flex justify-center pt-7 pb-5 md:pt-10 md:pb-6">
          <div className="w-24 h-24 rounded-full bg-cream/60 border border-brass/20 flex items-center justify-center overflow-hidden">
            {/* Placeholder ring — swap for <Image> when photos are ready */}
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="14" r="6" stroke="#8B6A3E" strokeWidth="1.5" />
              <path
                d="M4 32c0-7.732 6.268-14 14-14s14 6.268 14 14"
                stroke="#8B6A3E"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Body */}
        <div className="px-5 pb-7 md:px-8 md:pb-10 flex flex-col flex-1">
          {/* Category tag */}
          <p className="font-sans text-[10px] uppercase tracking-[0.16em] text-ink/50 text-center mb-3">
            {service.category}
          </p>

          {/* Service title — italic serif */}
          <h3 className="font-display italic text-[22px] md:text-[24px] leading-[1.2] text-ink text-center mb-4">
            {service.title}
          </h3>

          {/* Description */}
          <p className="font-sans text-[14px] leading-[1.7] text-ink/65 text-center mb-7">
            {service.description}
          </p>

          {/* Includes list */}
          <div className="mb-8 flex-1">
            <p className="font-sans text-[10px] uppercase tracking-[0.14em] text-ink/40 mb-3">
              Includes:
            </p>
            <ul className="space-y-2">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-[3px] flex-shrink-0 w-[14px] h-[14px] rounded-full bg-brass/25 flex items-center justify-center">
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                      <path d="M1 3l2 2 4-4" stroke="#8B6A3E" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="font-sans text-[13px] leading-[1.5] text-ink/70">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <a
            href={HONEYBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center px-5 py-3 bg-ink text-cream font-sans text-[11px] uppercase tracking-[0.12em] hover:bg-forest transition-colors duration-200 rounded-[2px]"
          >
            {service.cta}
          </a>
        </div>
      </article>
    </FadeUp>
  )
}

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-cream py-14 md:py-32">
      <div className="max-w-[1300px] mx-auto px-5 md:px-10">

        {/* Centered header */}
        <FadeUp>
          <div className="text-center mb-10 md:mb-16">
            <p className="font-sans text-[11px] uppercase tracking-[0.16em] text-brass mb-4">
              Find the Right Fit
            </p>
            <h2 className="font-display italic text-[clamp(36px,5vw,68px)] leading-[1.1] text-ink">
              the services
            </h2>
          </div>
        </FadeUp>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} delay={0.07 * i} />
          ))}
        </div>

        {/* Below-grid line */}
        <FadeUp delay={0.15}>
          <div className="flex flex-col items-center mt-12">
            <p className="font-sans text-[13px] text-stone">
              Not sure which is right for you?{' '}
              <a
                href="#contact"
                className="text-ink border-b border-ink/30 hover:border-ink pb-0.5 transition-colors duration-200"
              >
                Let&apos;s talk →
              </a>
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
