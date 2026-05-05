import ScrollReveal from './ScrollReveal'

const HONEYBOOK_URL =
  'https://www.honeybook.com/widget/best_good_friend_training_llc_296123/cf_id/6806fc7d140e43002c11e347'

export default function FinalCTA() {
  return (
    <section id="contact" className="bg-forest py-14 md:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="max-w-[680px]">
          <ScrollReveal delay={0}>
            <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-brass mb-7">
              Ready to start
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <h2 className="font-display text-display-section text-cream mb-6 text-balance">
              Ready to actually fix it?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="font-sans text-[17px] leading-[1.65] text-cream/65 mb-10 max-w-[50ch]">
              Free 20-minute discovery call. No pressure. We&apos;ll figure out together if
              it&apos;s a fit, and if it&apos;s not, I&apos;ll tell you that too.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.11}>
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <a
                href={HONEYBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  'inline-flex items-center gap-2 px-7 py-[14px]',
                  'bg-brass text-ink font-sans text-[13px] tracking-[0.08em] uppercase',
                  'hover:bg-[#a67e57] transition-colors duration-250',
                ].join(' ')}
              >
                Book Your Discovery Call
                <span aria-hidden>→</span>
              </a>
              <a
                href="tel:+18607901078"
                className="inline-flex items-center gap-2 py-[14px] font-sans text-[13px] text-cream/60 hover:text-cream transition-colors duration-200 tracking-wide"
              >
                Or text me: 860-790-1078
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
