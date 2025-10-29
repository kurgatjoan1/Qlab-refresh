// src/components/QlabInnovateSection.tsx
import Image from 'next/image'
import Link from 'next/link'
import { InfoSectionWithTitleBlock, InfoSectionWithoutTitleBlock } from '@/types'
import { getStrapiImageUrl, getImageAlt } from '@/lib/strapi'
import ScrollReveal from './animations/ScrollReveal'
import HoverScale from './animations/HoverScale'

interface QlabInnovateSectionProps {
  infoWithTitleBlocks: InfoSectionWithTitleBlock[];
  infoWithoutTitleBlocks: InfoSectionWithoutTitleBlock[];
}

export default function QlabInnovateSection({ 
  infoWithTitleBlocks, 
  infoWithoutTitleBlocks 
}: QlabInnovateSectionProps) {
  // Combine blocks in order: first infoWithTitle, then two infoWithoutTitle
  const firstBlock = infoWithTitleBlocks[0];
  const secondBlock = infoWithoutTitleBlocks[0];
  const thirdBlock = infoWithoutTitleBlocks[1];

  return (
    <section className="relative">
      {/* First Section - Qlab Innovate */}
      {firstBlock && (
        <div className="relative min-h-screen overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={getStrapiImageUrl(firstBlock.bgImage.url)}
              alt={getImageAlt(firstBlock.bgImage.alternativeText, firstBlock.title)}
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
          
          <div className="relative z-10 min-h-screen flex items-center justify-start">
            <div className="container mx-auto px-4 md:px-6">
              <ScrollReveal direction="up" delay={0.2}>
                <div className="max-w-sm md:max-w-md lg:max-w-lg ml-4 md:ml-8 lg:ml-12">
                  <h3 
                    className="font-work-sans font-normal text-white mb-8 md:mb-12 text-lg md:text-xl lg:text-2xl leading-relaxed"
                  >
                    {firstBlock.description}
                  </h3>
                  <HoverScale scale={1.1}>
                    <Link 
                      href={firstBlock.cta.href}
                      target={firstBlock.cta.isExternal ? '_blank' : '_self'}
                      rel={firstBlock.cta.isExternal ? 'noopener noreferrer' : ''}
                      className="flex items-center text-white hover:text-gray-200 transition-colors font-roboto-mono"
                    >
                      <span className="mr-2">→</span>
                      {firstBlock.cta.text}
                    </Link>
                  </HoverScale>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      )}

      {/* Second Section */}
      {secondBlock && (
        <div className="relative min-h-screen overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={getStrapiImageUrl(secondBlock.bgImage.url)}
              alt={getImageAlt(secondBlock.bgImage.alternativeText, 'Background')}
              fill
              className="object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
          
          <div className="relative z-10 min-h-screen flex items-center justify-start">
            <div className="container mx-auto px-4 md:px-6">
              <ScrollReveal direction="up" delay={0.2}>
                <div className="max-w-sm md:max-w-md lg:max-w-lg ml-4 md:ml-8 lg:ml-12">
                  <h3 
                    className="font-work-sans font-normal text-white mb-8 md:mb-12 text-lg md:text-xl lg:text-2xl leading-relaxed"
                  >
                    {secondBlock.description1}
                  </h3>
                  <HoverScale scale={1.1}>
                    <Link 
                      href={secondBlock.cta.href}
                      target={secondBlock.cta.isExternal ? '_blank' : '_self'}
                      rel={secondBlock.cta.isExternal ? 'noopener noreferrer' : ''}
                      className="flex items-center text-white hover:text-gray-200 transition-colors font-roboto-mono"
                    >
                      <span className="mr-2">→</span>
                      {secondBlock.cta.text}
                    </Link>
                  </HoverScale>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      )}

      {/* Third Section */}
      {thirdBlock && (
        <div className="relative min-h-screen overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={getStrapiImageUrl(thirdBlock.bgImage.url)}
              alt={getImageAlt(thirdBlock.bgImage.alternativeText, 'Background')}
              fill
              className="object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
          
          <div className="relative z-10 min-h-screen flex items-center justify-start">
            <div className="container mx-auto px-4 md:px-6">
              <ScrollReveal direction="up" delay={0.2}>
                <div className="max-w-sm md:max-w-md lg:max-w-lg ml-4 md:ml-8 lg:ml-12">
                  <h3 
                    className="font-work-sans font-normal text-white mb-8 md:mb-12 text-lg md:text-xl lg:text-2xl leading-relaxed"
                  >
                    {thirdBlock.description1}
                  </h3>
                  <HoverScale scale={1.1}>
                    <Link 
                      href={thirdBlock.cta.href}
                      target={thirdBlock.cta.isExternal ? '_blank' : '_self'}
                      rel={thirdBlock.cta.isExternal ? 'noopener noreferrer' : ''}
                      className="flex items-center text-white hover:text-gray-200 font-roboto-mono transition-colors"
                    >
                      <span className="mr-2">→</span>
                      {thirdBlock.cta.text}
                    </Link>
                  </HoverScale>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      )}

      {/* Yellow "Stories & News" tag positioned at the bottom */}
      <div className="absolute bottom-0 left-4 md:left-8 lg:left-16 transform translate-y-1/2 z-30">
        <div className="bg-yellow-400 px-4 md:px-6 lg:px-8 py-2 md:py-3 shadow-lg">
          <span className="font-medium font-roboto-mono text-black text-sm md:text-base lg:text-lg">Stories & News</span>
        </div>
      </div>
    </section>
  )
}
