// src/app/page.tsx
import HeroSection from '@/components/HeroSection'
import DescriptionSection from '@/components/DescriptionSection'
import QlabInnovateSection from '@/components/QlabInnovateSection'
import StoriesNewsSection from '@/components/StoriesNewsSection'
import MeetTheTeamSection from '@/components/MeetTheTeamSection'
import ContactUsSection from '@/components/ContactUsSection'
import Footer from '@/components/Footer'
import StickyScroll from '@/components/animations/StickyScroll'
import { getHomePage } from '@/data/loader'
import type { HomePageResponse } from '@/types'

export default async function Home() {
  const response: HomePageResponse = await getHomePage();
  const { blocks } = response.data;

  // Extract specific blocks by component type
  const heroBlock = blocks.find(b => b.__component === 'blocks.hero-section');
  const descriptionBlock = blocks.find(b => b.__component === 'blocks.description-section');
  const infoWithTitleBlocks = blocks.filter(b => b.__component === 'blocks.info-section-with-title');
  const infoWithoutTitleBlocks = blocks.filter(b => b.__component === 'blocks.info-section-without-title');
  const womensBlock = blocks.find(b => b.__component === 'blocks.women-s-section');
  const teamBlock = blocks.find(b => b.__component === 'blocks.meet-the-team-section');
  const contactBlock = blocks.find(b => b.__component === 'blocks.contact-us');
  const footerBlock = blocks.find(b => b.__component === 'blocks.footer');

  return (
    <main>
      {heroBlock && heroBlock.__component === 'blocks.hero-section' && (
        <HeroSection data={heroBlock} />
      )}
      {descriptionBlock && descriptionBlock.__component === 'blocks.description-section' && (
        <DescriptionSection data={descriptionBlock} />
      )}
      <QlabInnovateSection 
        infoWithTitleBlocks={infoWithTitleBlocks}
        infoWithoutTitleBlocks={infoWithoutTitleBlocks}
      />
      {womensBlock && womensBlock.__component === 'blocks.women-s-section' && (
        <StoriesNewsSection 
          infoWithTitleBlock={infoWithTitleBlocks[1]} 
          womensBlock={womensBlock}
        />
      )}
      {teamBlock && teamBlock.__component === 'blocks.meet-the-team-section' && (
        <MeetTheTeamSection data={teamBlock} />
      )}
      {contactBlock && contactBlock.__component === 'blocks.contact-us' && (
        <ContactUsSection data={contactBlock} />
      )}
      {footerBlock && footerBlock.__component === 'blocks.footer' && (
        <Footer data={footerBlock} />
      )}
    </main>
  )
}
