// src/components/HeroSection.tsx
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { HeroSectionBlock } from '@/types';
import { getStrapiImageUrl, getImageAlt } from '@/lib/strapi';

interface HeroSectionProps {
  data: HeroSectionBlock;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const backgroundImageUrl = getStrapiImageUrl(data.backgroundImage.url);
  const logoImageUrl = getStrapiImageUrl(data.logo.image.url);
  const logoAlt = getImageAlt(data.logo.image.alternativeText, data.logo.text);

  return (
    <section 
      className="relative min-h-screen w-full bg-no-repeat bg-center bg-cover flex items-center"
      style={{
        backgroundImage: `url('${backgroundImageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        filter: 'contrast(1.2)',
      }}
    >
      {/* Header with Logo and Menu */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <div className="flex flex-col h-full p-6 md:p-8 lg:p-6">
          {/* Menu Icon - Top */}
          <div className="flex justify-start">
            <button className="text-white hover:text-gray-300 transition-colors">
              <Menu className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
            </button>
          </div>
          
          {/* Spacer to push logo to 3/4 height */}
          <div className="flex-grow flex items-end pb-[20vh]">
            {/* Logo - Positioned at 3/4 of screen height */}
            <div className="flex items-center">
              <Image
                src={logoImageUrl}
                alt={logoAlt}
                width={140}
                height={50}
                className="h-10 w-auto md:h-12 lg:h-14"
                priority
                style={{
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
