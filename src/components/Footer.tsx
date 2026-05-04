const HONEYBOOK_URL =
  'https://www.honeybook.com/widget/best_good_friend_training_llc_296123/cf_id/6806fc7d140e43002c11e347'

const siteLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Reset Course', href: '#reset-course' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Book a Call', href: HONEYBOOK_URL, external: true },
]

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.5 2.8 12 2.8 12 2.8s-4.5 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.2.7 11.3v2c0 2.2.3 4.3.3 4.3s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.3 21.8 12 21.8 12 21.8s4.5 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.2.3-4.3v-2C23.3 9.2 23 7 23 7zM9.7 15.5V8.4l8 3.6-8 3.5z" />
    </svg>
  )
}

function ThreadsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5.83 4.5 2.14-1.02-.24-2.07-.14-3.07.28-1.17-.78-2.64-.92-3.93-.28C10.5 6.83 10.74 6 12 6zm5 9.5c0 2.49-2.24 4.5-5 4.5s-5-2.01-5-4.5c0-1.25.51-2.38 1.35-3.2.52.34 1.12.52 1.72.52.7 0 1.37-.22 1.93-.62.56.4 1.23.62 1.93.62.6 0 1.2-.18 1.72-.52.84.82 1.35 1.95 1.35 3.2z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1 — Brand */}
          <div>
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-cream/90 mb-3 font-semibold">
              Best Good Friend Training
            </p>
            <p className="font-sans text-[13px] text-cream/50 leading-[1.7] mb-6 max-w-[260px]">
              Canine Communication Coaching
              <br />
              Charlotte, NC + Virtual Support
            </p>
            {/* Genna portrait / signature placeholder */}
            <div className="w-10 h-10 rounded-full bg-cream/10 border border-cream/20 flex items-center justify-center">
              <span className="font-display italic text-[14px] text-cream/40">G</span>
            </div>
          </div>

          {/* Column 2 — Sitemap */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.14em] text-cream/40 mb-5">
              Site
            </p>
            <nav className="flex flex-col gap-3">
              {siteLinks.map(({ label, href, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="font-sans text-[14px] text-cream/55 hover:text-cream transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3 — Social + contact */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.14em] text-cream/40 mb-5">
              Connect
            </p>

            <div className="flex items-center gap-4 mb-8">
              <a
                href="https://www.instagram.com/best.good.friend.training"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 hover:text-brass transition-colors duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.youtube.com/@caninecoachgenna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 hover:text-brass transition-colors duration-200"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://www.threads.net/@best.good.friend.training"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 hover:text-brass transition-colors duration-200"
                aria-label="Threads"
              >
                <ThreadsIcon />
              </a>
            </div>

            <a
              href="tel:+18607901078"
              className="block font-sans text-[14px] text-cream/55 hover:text-cream transition-colors duration-200 mb-2"
            >
              860-790-1078
            </a>
            <a
              href="mailto:{CONTACT_EMAIL}"
              className="block font-sans text-[14px] text-cream/55 hover:text-cream transition-colors duration-200"
            >
              {'{CONTACT_EMAIL}'}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-sans text-[12px] text-cream/35">
            © 2026 Best Good Friend Training, LLC
          </p>
          <div className="flex items-center gap-5">
            <a href="/privacy" className="font-sans text-[12px] text-cream/35 hover:text-cream/60 transition-colors">
              Privacy
            </a>
            <a href="/refund" className="font-sans text-[12px] text-cream/35 hover:text-cream/60 transition-colors">
              Refund Policy
            </a>
            <a href="/terms" className="font-sans text-[12px] text-cream/35 hover:text-cream/60 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
