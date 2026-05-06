'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HONEYBOOK_URL =
  'https://www.honeybook.com/widget/best_good_friend_training_llc_296123/cf_id/6806fc7d140e43002c11e347'

// Muted sage — matches BGFT brand and the Erin Moran reference palette
const SAGE = '#9CA68A'

const serviceDropdown = [
  { label: 'Private In-Home Coaching', href: '#private-coaching' },
  { label: 'Puppy Foundations',        href: '#puppy-foundations' },
  { label: 'Off-Leash Training',       href: '#off-leash' },
  { label: 'Behavioral Tune-Ups',      href: '#behavioral-tune-ups' },
]

const NAV_STYLE: React.CSSProperties = {
  color: SAGE,
  letterSpacing: '0.18em',
  fontWeight: 400,
  fontSize: '11px',
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* ═══════════════════════════════════════════════
          STATIC HEADER — no fixed / sticky / z pinning
      ══════════════════════════════════════════════════ */}
      <header className="w-full bg-white">
        <div
          className="max-w-[1600px] mx-auto px-6 lg:px-16 flex items-center justify-between"
          style={{ paddingTop: '10px', paddingBottom: '10px' }}
        >
          {/* ── Logo ── */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/images/logo.png"
              alt="Best Good Friend Training"
              width={267}
              height={88}
              priority
              className="w-auto object-contain"
              style={{ height: '88px' }}
            />
          </Link>

          {/* ── Desktop nav (≥1024px) ── */}
          <nav className="hidden lg:flex items-center" style={{ gap: '56px' }}>

            {/* SERVICES with hover dropdown */}
            <div className="relative group">
              <Link
                href="#services"
                className="flex items-center gap-2 font-sans uppercase transition-opacity duration-200 hover:opacity-50"
                style={NAV_STYLE}
              >
                SERVICES
                {/* Caret */}
                <svg width="11" height="7" viewBox="0 0 11 7" fill="none" className="opacity-70 mt-[1px]">
                  <path d="M1 1l4.5 4.5L10 1" stroke={SAGE} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              {/* Dropdown panel */}
              <div
                className="absolute top-full left-0 pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200"
                style={{ zIndex: 100 }}
              >
                <div className="bg-white border border-black/8 shadow-sm py-3 min-w-[220px]">
                  {serviceDropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-6 py-3 font-sans uppercase hover:opacity-50 transition-opacity duration-150"
                      style={{ ...NAV_STYLE, fontSize: '12px', letterSpacing: '0.13em' }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="#about"
              className="font-sans uppercase transition-opacity duration-200 hover:opacity-50"
              style={NAV_STYLE}
            >
              MY STORY
            </Link>

            <Link
              href="#reset-course"
              className="font-sans uppercase transition-opacity duration-200 hover:opacity-50"
              style={NAV_STYLE}
            >
              RESET COURSE
            </Link>

            {/* CTA — outlined, no fill, sharp corners */}
            <Link
              href={HONEYBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans uppercase transition-all duration-200"
              style={{
                ...NAV_STYLE,
                border: `1.5px solid ${SAGE}`,
                padding: '14px 18px',
                backgroundColor: 'transparent',
                display: 'inline-block',
                lineHeight: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = SAGE
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = SAGE
              }}
            >
              BOOK DISCOVERY CALL
            </Link>
          </nav>

          {/* ── Mobile hamburger (< 1024px) ── */}
          <button
            className="lg:hidden flex flex-col justify-center gap-[8px] p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
            style={{ width: '48px', height: '48px' }}
          >
            <span
              className={`block h-[2px] transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[10px]' : ''}`}
              style={{ width: '36px', backgroundColor: SAGE }}
            />
            <span
              className={`block h-[2px] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
              style={{ width: '36px', backgroundColor: SAGE }}
            />
            <span
              className={`block h-[2px] transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[10px]' : ''}`}
              style={{ width: '36px', backgroundColor: SAGE }}
            />
          </button>
        </div>
      </header>

      {/* ═══════════════════════════════════════════
          MOBILE FULL-SCREEN OVERLAY
      ════════════════════════════════════════════ */}
      <div
        className={`lg:hidden fixed inset-0 bg-white flex flex-col items-center justify-center transition-all duration-400 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 200 }}
      >
        {/* Close × */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-8 right-8 p-2"
          aria-label="Close menu"
        >
          <span className="block w-[36px] h-[2px] rotate-45 translate-y-[1px]" style={{ backgroundColor: SAGE }} />
          <span className="block w-[36px] h-[2px] -rotate-45 -translate-y-[1px]" style={{ backgroundColor: SAGE }} />
        </button>

        <nav className="flex flex-col items-center gap-10">
          {[
            { label: 'SERVICES',      href: '#services' },
            { label: 'MY STORY',      href: '#about' },
            { label: 'RESET COURSE',  href: '#reset-course' },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-sans uppercase transition-opacity duration-200 hover:opacity-50"
              style={{ ...NAV_STYLE, fontSize: '22px' }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href={HONEYBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans uppercase mt-4 transition-all duration-200 hover:opacity-70"
            style={{
              ...NAV_STYLE,
              fontSize: '18px',
              border: `1.5px solid ${SAGE}`,
              padding: '18px 28px',
              display: 'inline-block',
              lineHeight: 1,
            }}
            onClick={() => setMobileOpen(false)}
          >
            BOOK DISCOVERY CALL
          </Link>
        </nav>
      </div>
    </>
  )
}
