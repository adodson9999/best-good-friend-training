'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const HONEYBOOK_URL =
  'https://www.honeybook.com/widget/best_good_friend_training_llc_296123/cf_id/6806fc7d140e43002c11e347'

const faqs = [
  {
    q: 'How is this different from a group class?',
    a: "Group classes teach your dog to perform around strangers in a parking lot. Your dog doesn't live in a parking lot. In-home coaching works in the actual environment where the problems happen: your living room, your backyard, your neighborhood block. The training sticks because it's learned where it needs to be applied.",
  },
  {
    q: 'My dog is already [age], is it too late?',
    a: "No. Dogs are learning all the time, at every age. The timeline looks different for a 7-year-old Lab versus an 8-week-old puppy, but both can make meaningful progress. The main thing that changes with age is how long habits have had to calcify, which affects our pacing, not our outcome.",
  },
  {
    q: "I've tried training before and it didn't work. Why would this be different?",
    a: "Usually because the training was taught in a context that didn't match real life, the owner didn't get enough follow-through coaching, or the method didn't fit the specific dog. We start by understanding what you've tried and why it didn't land. Then we build something that accounts for your specific dog, your specific household, and your specific daily life.",
  },
  {
    q: 'Do you use treats? What methods do you use?',
    a: "I use whatever works for the individual dog, which usually includes food, play, praise, and clear communication. I don't have a religious commitment to any single method or tool. What I do have a commitment to: no fear, no pain, no gimmicks. The goal is a dog who wants to work with you, not one who complies because the alternative is unpleasant.",
  },
  {
    q: 'What areas do you serve?',
    a: "I serve the Charlotte metro area including Uptown, South End, Dilworth, Myers Park, Plaza Midwood, NoDa, Ballantyne, Matthews, Davidson, Huntersville, Cornelius, Concord, Mint Hill, and Fort Mill, SC. Not sure if you're in range? Text me: 860-790-1078.",
  },
  {
    q: 'How does the discovery call work?',
    a: "It's a free 20-minute call where we talk through what's going on with your dog, what you've tried, and what a realistic path forward looks like. No pressure to book. I'll tell you honestly whether I think we're a good fit, and if I don't think I'm the right resource, I'll point you toward one that is.",
  },
  {
    q: "What's the Reset Mini-Course? Is it a replacement for in-home sessions?",
    a: "CTRL + ALT + DELETE is a $37 self-paced course for owners who already have some training foundation but feel like something slipped or stalled. It's not a replacement for in-home coaching, it's a tune-up for people who've already started the work and need to reset their momentum. If you're starting from zero or dealing with significant behavioral issues, in-home coaching is the right call.",
  },
]

interface FAQItemProps {
  faq: (typeof faqs)[0]
  index: number
}

function FAQItem({ faq, index }: FAQItemProps) {
  const [open, setOpen] = useState(false)
  const id = `faq-${index}`

  return (
    <div className="border-b border-brass/25 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left"
        aria-expanded={open}
        aria-controls={id}
      >
        <span className="font-display text-[18px] md:text-[20px] text-ink leading-[1.3]">
          {faq.q}
        </span>
        <span
          className={`flex-shrink-0 w-5 h-5 flex items-center justify-center border border-brass/50 rounded-full text-brass transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
          aria-hidden
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
            <rect x="4.25" y="0" width="1.5" height="10" />
            <rect x="0" y="4.25" width="10" height="1.5" />
          </svg>
        </span>
      </button>

      <div
        id={id}
        className={`overflow-hidden transition-all duration-400 ease-expo-out ${
          open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="font-sans text-[16px] leading-[1.7] text-ink/65 pb-7 max-w-[70ch]">
          {faq.a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-cream py-14 md:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          {/* Header — sticky on desktop */}
          <div className="w-full md:w-[36%] flex-shrink-0">
            <div className="md:sticky md:top-28">
              <ScrollReveal delay={0}>
                <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-brass mb-6">
                  The Questions You&apos;re Asking
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.05}>
                <h2 className="font-display text-display-section text-ink mb-8 text-balance">
                  Before you book.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <p className="font-sans text-[15px] leading-[1.65] text-ink/60 mb-8">
                  Still have questions? The discovery call is free, let&apos;s just talk.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <a
                  href={HONEYBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-brass text-brass font-sans text-[13px] tracking-[0.06em] hover:bg-brass hover:text-ink transition-all duration-250"
                >
                  Book Discovery Call
                </a>
              </ScrollReveal>
            </div>
          </div>

          {/* Accordion */}
          <div className="flex-1">
            <ScrollReveal delay={0.05}>
              <div className="border-t border-brass/25">
                {faqs.map((faq, i) => (
                  <FAQItem key={i} faq={faq} index={i} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
