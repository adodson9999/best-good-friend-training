import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bestgoodfriendtraining.com'),
  title: "Charlotte's Premier In-Home Dog Trainer | Best Good Friend Training",
  description:
    "Private in-home dog coaching with Genna Rittenhouse in Charlotte, NC. Real obedience, real life — no gimmicks, no group classes. Book your free discovery call today.",
  openGraph: {
    title: "Charlotte's Premier In-Home Dog Trainer | Best Good Friend Training",
    description:
      "Private in-home dog coaching with Genna Rittenhouse in Charlotte, NC. Real obedience, real life — no gimmicks, no group classes.",
    url: 'https://www.bestgoodfriendtraining.com',
    siteName: 'Best Good Friend Training',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Best Good Friend Training — Charlotte NC Dog Coaching',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Charlotte's Premier In-Home Dog Trainer | Best Good Friend Training",
    description: "Private in-home dog coaching with Genna Rittenhouse in Charlotte, NC.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Best Good Friend Training',
  description:
    'Private in-home dog coaching in Charlotte, NC. Specializing in obedience, puppy foundations, off-leash training, and behavioral tune-ups.',
  url: 'https://www.bestgoodfriendtraining.com',
  telephone: '+18607901078',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Charlotte',
    addressRegion: 'NC',
    addressCountry: 'US',
  },
  areaServed: [
    'Charlotte', 'Uptown', 'South End', 'Dilworth', 'Myers Park', 'Plaza Midwood',
    'NoDa', 'Ballantyne', 'Matthews', 'Davidson', 'Huntersville', 'Cornelius',
    'Concord', 'Mint Hill', 'Fort Mill',
  ],
  sameAs: [
    'https://www.instagram.com/best.good.friend.training',
    'https://www.youtube.com/@caninecoachgenna',
    'https://www.threads.net/@best.good.friend.training',
  ],
  priceRange: '$$',
  serviceType: 'Dog Training',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
