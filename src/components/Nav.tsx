'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HONEYBOOK_URL =
  'https://www.honeybook.com/widget/best_good_friend_training_llc_296123/cf_id/6806fc7d140e43002c11e347'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Reset Course', href: '#reset-course' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 72)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md border-b border-ink/8 shadow-[0_1px_0_rgba(26,26,26,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-[64px] md:h-[76px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/hero-bg.png"
              alt="Best Good Friend Training"
              width={120}
              height={120}
              className="h-[48px] md:h-[56px] w-auto object-contain"
            />
          </Link>

          {/* Desktop nav links — hidden for now */}

          {/* Desktop CTA */}
          <a
            href={HONEYBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 border border-brass text-brass font-sans text-[13px] tracking-[0.06em] hover:bg-brass hover:text-ink transition-all duration-250"
          >
            Book Discovery Call
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 -mr-2 flex flex-col gap-[5px]"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-[22px] h-[1.5px] bg-ink transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
              }`}
            />
            <span
              className={`block w-[22px] h-[1.5px] bg-ink transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-[22px] h-[1.5px] bg-ink transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-400 ${
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-ink/40 transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />
        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[80vw] max-w-[340px] bg-cream flex flex-col transition-transform duration-400 ease-expo-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-[64px] border-b border-ink/10">
            <span className="font-display text-[11px] uppercase tracking-[0.18em] text-ink/50">
              Menu
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 -mr-2"
              aria-label="Close menu"
            >
              <span className="block w-5 h-[1.5px] bg-ink rotate-45 translate-y-[0.75px]" />
              <span className="block w-5 h-[1.5px] bg-ink -rotate-45 -translate-y-[0.75px]" />
            </button>
          </div>

          <nav className="flex-1 px-6 pt-10 flex flex-col gap-7">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-[22px] text-ink hover:text-brass transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="px-6 pb-10">
            <a
              href={HONEYBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-4 bg-brass text-ink font-sans text-[13px] tracking-[0.08em] uppercase"
            >
              Book Discovery Call
            </a>
            <a
              href="tel:+18607901078"
              className="block text-center mt-4 font-sans text-[13px] text-stone hover:text-ink transition-colors"
            >
              860-790-1078
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
