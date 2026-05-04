import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import FounderSection from '@/components/FounderSection'
import ServicesGrid from '@/components/ServicesGrid'
import ResetCourse from '@/components/ResetCourse'
import Testimonials from '@/components/Testimonials'
import ServiceArea from '@/components/ServiceArea'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FounderSection />
        <ServicesGrid />
        <Testimonials />
        <ResetCourse />
        <ServiceArea />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
