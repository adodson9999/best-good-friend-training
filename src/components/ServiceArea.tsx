import ScrollReveal from './ScrollReveal'

const neighborhoods = [
  'Uptown / Center City',
  'South End',
  'Dilworth',
  'Myers Park',
  'Plaza Midwood',
  'NoDa',
  'Ballantyne',
  'Matthews',
  'Davidson',
  'Huntersville',
  'Cornelius',
  'Concord',
  'Mint Hill',
  'Fort Mill, SC',
]

function CharlotteMap() {
  return (
    <div className="rounded-[4px] overflow-hidden border border-brass/15" style={{ height: '520px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d417132.4365243966!2d-80.780006!3d35.235174549999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xac29cb39e01c129f%3A0x9ce1df51d3fcd66f!2sBest%20Good%20Friend%20Training!5e0!3m2!1sen!2sus!4v1777752112206!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0, display: 'block' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Best Good Friend Training service area — Charlotte metro"
      />
    </div>
  )
}

export default function ServiceArea() {
  return (
    <section id="area" className="bg-cream py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-start gap-16 md:gap-24">
          {/* Map */}
          <div className="w-full md:w-[45%] flex-shrink-0">
            <ScrollReveal>
              <CharlotteMap />
            </ScrollReveal>
          </div>

          {/* Content */}
          <div className="flex-1 md:pt-4">
            <ScrollReveal delay={0}>
              <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-brass mb-6">
                Where I Work
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <h2 className="font-display text-display-section text-ink mb-7 text-balance">
                Serving the Charlotte metro, and your couch.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <p className="font-sans text-[17px] leading-[1.65] text-ink/65 mb-10">
                Every session happens where your dog actually lives. In-home means in your
                home, on your couch, in your backyard, on the streets you walk every morning.
              </p>
            </ScrollReveal>

            {/* Neighborhood list */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-8">
              {neighborhoods.map(n => (
                <div key={n} className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-brass flex-shrink-0"
                    aria-hidden
                  />
                  <span className="font-sans text-[14px] text-ink/70">{n}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
