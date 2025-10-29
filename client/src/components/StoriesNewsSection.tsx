// src/components/StoriesNewsSection.tsx
import Image from "next/image";
import Link from "next/link";
import { InfoSectionWithTitleBlock, WomensSectionBlock } from '@/types';
import { getStrapiImageUrl, getImageAlt } from '@/lib/strapi';
import ScrollReveal from './animations/ScrollReveal';
import HoverScale from './animations/HoverScale';
import StaggerContainer, { StaggerItem, staggerItemVariants } from './animations/StaggerContainer';

interface StoriesNewsSectionProps {
  infoWithTitleBlock?: InfoSectionWithTitleBlock;
  womensBlock: WomensSectionBlock;
}

export default function StoriesNewsSection({ infoWithTitleBlock, womensBlock }: StoriesNewsSectionProps) {
  return (
    <section className="relative">
      {/* Get Insights Section - Full screen like QlabInnovate sections */}
      {infoWithTitleBlock && (
        <div className="relative min-h-screen overflow-hidden pt-4">
          {/* Background Image */}
          <div className="absolute inset-0 z-10">
            <Image
              src={getStrapiImageUrl(infoWithTitleBlock.bgImage.url)}
              alt={getImageAlt(infoWithTitleBlock.bgImage.alternativeText, infoWithTitleBlock.title)}
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>

          <div className="relative z-20 min-h-screen flex items-center justify-start">
            <div className="container mx-auto px-4 md:px-6">
              <ScrollReveal direction="up" delay={0.2}>
                <div className="max-w-sm md:max-w-md lg:max-w-lg ml-4 md:ml-8 lg:ml-12">
                  <h3 className="font-work-sans font-normal text-white mb-8 md:mb-12 mt-32 md:mt-48 lg:mt-64 text-lg md:text-xl lg:text-2xl leading-relaxed">
                    {infoWithTitleBlock.description}
                  </h3>
                  <HoverScale scale={1.1}>
                    <Link 
                      href={infoWithTitleBlock.cta.href}
                      target={infoWithTitleBlock.cta.isExternal ? '_blank' : '_self'}
                      rel={infoWithTitleBlock.cta.isExternal ? 'noopener noreferrer' : ''}
                      className="flex items-center font-roboto-mono text-white hover:text-gray-200 transition-colors"
                    >
                      <span className="mr-2">→</span>
                      {infoWithTitleBlock.cta.text}
                    </Link>
                  </HoverScale>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      )}

      {/* News Grid Section */}
      <div className="min-h-screen bg-white flex items-center py-8">
        <div className="container mx-4 md:mx-8 lg:mx-16 xl:mx-32 px-4 md:px-8 max-w-7xl">
          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 h-auto md:h-[85vh] max-h-[1000px]">
            {/* Column 1 */}
            <StaggerItem variants={staggerItemVariants} className="flex flex-col gap-3 md:gap-4 lg:gap-5">
              {/* Link1 - shorter height */}
              <HoverScale scale={1.02} className="relative h-48 md:flex-[253] md:min-h-0 hidden md:block">
                <Image
                  src={getStrapiImageUrl(womensBlock.image1.url)}
                  alt={getImageAlt(womensBlock.image1.alternativeText, 'News image')}
                  fill
                  className="object-cover rounded-lg"
                />
              </HoverScale>

              {/* Link2 - taller height */}
              <HoverScale scale={1.02} className="relative h-64 md:flex-[526] md:min-h-0">
                <Image
                  src={getStrapiImageUrl(womensBlock.image2.url)}
                  alt={getImageAlt(womensBlock.image2.alternativeText, 'News image')}
                  fill
                  className="object-cover rounded-lg"
                />
              </HoverScale>
            </StaggerItem>

            {/* Column 2 */}
            <StaggerItem variants={staggerItemVariants} className="flex flex-col gap-3 md:gap-4 lg:gap-5">
              {/* Link3 - taller height */}
              <HoverScale scale={1.02} className="relative h-64 md:flex-[526] md:min-h-0">
                <Image
                  src={getStrapiImageUrl(womensBlock.image3.url)}
                  alt={getImageAlt(womensBlock.image3.alternativeText, 'News image')}
                  fill
                  className="object-cover rounded-lg"
                />
              </HoverScale>

              {/* Link4 - shorter height */}
              <HoverScale scale={1.02} className="relative h-48 md:flex-[253] md:min-h-0 hidden md:block">
                <Image
                  src={getStrapiImageUrl(womensBlock.image4.url)}
                  alt={getImageAlt(womensBlock.image4.alternativeText, 'News image')}
                  fill
                  className="object-cover rounded-lg"
                />
              </HoverScale>
            </StaggerItem>

            {/* Column 3 */}
            <StaggerItem variants={staggerItemVariants} className="flex flex-col gap-3 md:gap-4 lg:gap-5">
              {/* Link5 - shorter height */}
              <HoverScale scale={1.02} className="relative h-48 md:flex-[253] md:min-h-0 hidden md:block">
                <Image
                  src={getStrapiImageUrl(womensBlock.image5.url)}
                  alt={getImageAlt(womensBlock.image5.alternativeText, 'News image')}
                  fill
                  className="object-cover rounded-lg"
                />
              </HoverScale>

              {/* Link6 - shorter height with text overlay */}
              <HoverScale scale={1.02} className="relative h-64 md:flex-[526] md:min-h-0 rounded-lg overflow-hidden">
                <Image
                  src={getStrapiImageUrl(womensBlock.image6.url)}
                  alt={getImageAlt(womensBlock.image6.alternativeText, 'News image')}
                  fill
                  className="object-cover"
                />
                {/* Text overlay */}
                <div className="absolute inset-0 bg-black/43 p-3 md:p-4 lg:p-6 font-roboto-mono flex flex-col justify-center">
                  <p
                    className="text-white leading-relaxed mb-2 md:mb-4 text-xs md:text-sm"
                    style={{ fontSize: "14px", lineHeight: "20px" }}
                  >
                    {womensBlock.description1}
                  </p>
                  <Link 
                    href={womensBlock.cta.href}
                    target={womensBlock.cta.isExternal ? '_blank' : '_self'}
                    rel={womensBlock.cta.isExternal ? 'noopener noreferrer' : ''}
                    className="text-white underline text-xs self-start hover:text-gray-200 transition-colors"
                  >
                    {womensBlock.cta.text}
                  </Link>
                </div>
              </HoverScale>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>

      {/* Yellow "Meet The Team" tag positioned at the bottom */}
      <div className="absolute bottom-0 left-4 md:left-8 lg:left-16 transform translate-y-1/2 z-30">
        <div className="bg-yellow-400 px-4 md:px-6 lg:px-8 py-2 md:py-3 shadow-lg">
          <span className="font-medium font-roboto-mono text-black text-sm md:text-base lg:text-lg">
            Meet The Team
          </span>
        </div>
      </div>
    </section>
  );
}
