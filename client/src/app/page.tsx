// src/app/page.tsx
import HeroSection from '@/components/HeroSection'
import DescriptionSection from '@/components/DescriptionSection'
import QlabInnovateSection from '@/components/QlabInnovateSection'
import StoriesNewsSection from '@/components/StoriesNewsSection'
import MeetTheTeamSection from '@/components/MeetTheTeamSection'
import ContactUsSection from '@/components/ContactUsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <DescriptionSection />
      <QlabInnovateSection />
      <StoriesNewsSection />
      <MeetTheTeamSection />
      <ContactUsSection />
      <Footer />
    </main>
  )
}