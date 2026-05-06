'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const HONEYBOOK_URL =
  'https://www.honeybook.com/widget/best_good_friend_training_llc_296123/cf_id/6806fc7d140e43002c11e347'

const SAGE = '#8A9A78'
const GOLD = '#C8984A'

const TEXTURE_URI =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.68' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.055'/%3E%3C/svg%3E\")"

const SERVICE_BAR = [
  { label: 'Private In-Home Coaching', href: '#private-coaching' },
  { label: 'Puppy Foundations',        href: '#puppy-foundations' },
  { label: 'Off-Leash Training',        href: '#off-leash' },
  { label: 'Behavioral Tune-Ups',       href: '#behavioral-tune-ups' },
]

const REVIEWS = [
  { quote: 'Genna has gone "above and beyond" offering dog advice.', name: 'DUSTIN T.' },
  { quote: 'One word to describe Genna — INCREDIBLE!', name: 'MEGHAN K.' },
  { quote: 'Roxie adores Genna — still gets excited and runs to her when she sees her, like a member of her pack!', name: 'DUSTIN T.' },
  { quote: "The relief that Bambi wasn't \"broken\" was a huge win!", name: 'MEGHAN K.' },
  { quote: 'Absolutely amazing!', name: 'JORGE H.' },
  { quote: 'A++++++ Genna is an AMAZING dog trainer!!!', name: 'LINDSEY C.' },
  { quote: 'She has so much knowledge, not just on training skills but on why dogs do certain behaviors.', name: 'MEGAN D.' },
  { quote: 'Poppy is more confident, better behaved on walks, and much calmer in the house.', name: 'LINDSEY C.' },
  { quote: 'She comes to you, which makes training so much more "life like" and real. She listens to not only what your dog needs, but what you need as an owner.', name: 'EMILY P.' },
  { quote: "If you're looking for a trainer who truly cares, gets results, and makes the process enjoyable, look no further. Genna has been a game-changer for us!", name: 'LINDSAY C.' },
  { quote: 'Genna will not only assist in training your dog, she helps you as the owner understand how as well.', name: 'MIKAELA A.' },
  { quote: 'Her training is not only beneficial for your dog, but more importantly for you as the owner.', name: 'ELLIE H.' },
  { quote: 'I was amazed at the improvement I saw after just one session with Genna.', name: 'HOPE G.' },
  { quote: 'She has the natural ability to connect with both pups and their people, fostering clear communication and making the training journey feel personalized and special.', name: 'SUE G.' },
  { quote: "Genna's approach truly includes owner coaching. I had just as much to learn as my dog. Highly recommend!", name: 'HOPE G.' },
  { quote: 'Genna was absolutely amazing!', name: 'BRAD S.' },
  { quote: 'Genna is the absolute best!', name: 'CADDIE K.' },
  { quote: 'I would highly recommend Genna to any of my friends!', name: 'BRAD S.' },
  { quote: "I truly can't recommend Genna enough!!", name: 'CADDIE K.' },
  { quote: 'The results were noticeable quickly — better behavior, improved focus, and a stronger bond between me and my dog.', name: 'C.R.' },
]

function Stars() {
  return (
    <div className="flex gap-[3px]" style={{ marginBottom: 'clamp(2px, 0.5dvh, 8px)' }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 14 14" fill="none">
          <path d="M7 1l1.545 3.13 3.455.502-2.5 2.438.59 3.44L7 8.885 3.91 10.51l.59-3.44L2 4.632l3.455-.502L7 1z" fill={GOLD} />
        </svg>
      ))}
    </div>
  )
}

function HeroReviews() {
  const [active, setActive] = useState(0)
  const [fading, setFading] = useState(false)

  const goTo = useCallback((i: number) => {
    if (i === active) return
    setFading(true)
    setTimeout(() => { setActive(i); setFading(false) }, 240)
  }, [active])

  useEffect(() => {
    const t = setInterval(() => goTo((active + 1) % REVIEWS.length), 5000)
    return () => clearInterval(t)
  }, [active, goTo])

  const r = REVIEWS[active]

  return (
    <div style={{ marginTop: 'clamp(6px, 1.8dvh, 24px)', paddingTop: 'clamp(6px, 1.8dvh, 20px)', borderTop: '1px solid rgba(255,255,255,0.18)' }}>
      <Stars />
      <blockquote
        className="font-display italic text-white leading-[1.35] transition-opacity duration-250"
        style={{ fontSize: 'clamp(11px,1.05vw,15px)', maxWidth: '46ch', opacity: fading ? 0 : 1, marginBottom: 'clamp(2px, 0.6dvh, 8px)' }}
      >
        &ldquo;{r.quote}&rdquo;
      </blockquote>
      <p
        className="font-sans uppercase tracking-[0.16em] transition-opacity duration-250"
        style={{ fontSize: '10px', color: GOLD, opacity: fading ? 0 : 1, marginBottom: 'clamp(2px, 0.6dvh, 12px)' }}
      >
        {r.name}
      </p>
      {/* Dot nav — hidden on small screens to save space */}
      <div className="hidden sm:flex items-center gap-2">
        {REVIEWS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Review ${i + 1}`}
            style={{
              width: i === active ? '20px' : '6px',
              height: '6px',
              borderRadius: '3px',
              backgroundColor: i === active ? GOLD : 'rgba(255,255,255,0.3)',
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

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#486573', backgroundImage: TEXTURE_URI }}
    >
      <div className="flex flex-col" style={{ height: 'calc(100dvh - clamp(48px, 8vw, 88px) - clamp(12px, 2vw, 20px))', minHeight: '360px' }}>

        {/* Always side-by-side so portrait + copy are both visible on every screen */}
        <div className="flex flex-row flex-1 min-h-0">

          {/* ══════════════ LEFT — PORTRAIT ══════════════ */}
          <div
            className="flex-shrink-0 w-[48%] md:w-[47%]"
            style={{
              backgroundImage: 'url(/images/genna-hero-portrait.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
            }}
          >
            <div className="w-full h-full" style={{ background: 'linear-gradient(to right, transparent 55%, #486573 95%)' }} />
          </div>

          {/* ══════════════ RIGHT — COPY ══════════════ */}
          <div className="relative z-10 flex-1 flex flex-col justify-start overflow-hidden px-3 pb-2 sm:px-7 sm:pb-4 md:px-14 lg:px-20 xl:px-24 md:pb-6">

            {/* Top spacer — shares empty space with bottom spacer to center content.
                min-h-0 lets it collapse to zero on short viewports so headline stays visible. */}
            <div className="flex-1 min-h-0" />

            {/* Headline */}
            <h1
              className="font-sans font-black text-white leading-[1.05]"
              style={{ fontSize: 'clamp(16px, min(3.7vw, 5dvh), 59px)', maxWidth: '26ch', letterSpacing: '-0.025em', marginBottom: 'clamp(4px, 1.5dvh, 20px)' }}
            >
              Professional Dog Training in Charlotte, NC Area
            </h1>

            {/* Subhead */}
            <p
              className="font-display italic text-white/90"
              style={{ fontSize: 'clamp(11px,1.1vw,17px)', maxWidth: '46ch', lineHeight: '1.6', marginBottom: 'clamp(4px, 1.5dvh, 20px)' }}
            >
              Build the dog you&apos;ve always wanted through real communication, not just commands.
            </p>

            {/* Credential bullets */}
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2px, 0.5dvh, 6px)' }}>
              {[
                'Certified Canine Coach with 10+ Years of Experience',
                'Private 1-on-1 In-Home Coaching (Plus Virtual Support)',
                'All Breeds, All Ages, All Behaviors',
                'Different Training for Every Dog',
                'Serving Charlotte, Matthews, Huntersville, Davidson, Concord, NC & Surrounding Areas',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span style={{ color: SAGE, fontSize: '9px', marginTop: '4px', flexShrink: 0 }}>✦</span>
                  <span className="font-sans text-white/85" style={{ fontSize: 'clamp(11px,0.9vw,13px)', lineHeight: '1.4' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Inline review slideshow */}
            <HeroReviews />

            {/* Bottom spacer — mirrors top spacer */}
            <div className="flex-1 min-h-0" />
          </div>
        </div>

        {/* ══════════════ BOTTOM SERVICE BAR ══════════════ */}
        <div className="w-full grid grid-cols-4" style={{ backgroundColor: '#1C1A17', minHeight: '44px', flexShrink: 0 }}>
          {SERVICE_BAR.map((s, i) => (
            <Link
              key={s.label}
              href={s.href}
              className="flex items-center justify-center overflow-hidden px-1 py-2 md:px-4 md:py-4 text-center transition-colors duration-200 hover:bg-white/5"
              style={{ borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}
            >
              <span className="font-display italic text-white/80 whitespace-nowrap" style={{ fontSize: 'clamp(9px,1vw,16px)' }}>
                {s.label}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
