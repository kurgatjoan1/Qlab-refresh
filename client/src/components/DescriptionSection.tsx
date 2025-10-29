// src/components/DescriptionSection.tsx
import { DescriptionSectionBlock } from '@/types';
import ScrollReveal from './animations/ScrollReveal';

interface DescriptionSectionProps {
  data: DescriptionSectionBlock;
}

export default function DescriptionSection({ data }: DescriptionSectionProps) {
  return (
    <section className="bg-white py-8 md:py-16 relative pb-16 md:pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Top paragraph */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex justify-center mb-8 md:mb-10">
            <div className="max-w-2xl text-center">
              <p 
                className="font-roboto-mono font-normal items-center text-[#484848] leading-tight md:leading-none text-lg md:text-xl lg:text-xl"
              >
                {data.description}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex mb-8 lg:mb-0 items-center">
              <h2 
                className="font-roboto-mono font-normal text-black items-center leading-tight md:leading-none text-2xl sm:text-3xl md:text-4xl lg:text-7xl"
              >
                {data.mission.split(' ').map((word, index, array) => (
                  <span key={index}>
                    {word}
                    {index < array.length - 1 && <br />}
                  </span>
                ))}
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <div>
              <p 
                className="font-roboto font-normal text-[#484848] leading-relaxed text-base md:text-lg lg:text-xl"
              >
                {data.bussinessModel1}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Yellow "Qlab Innovate" tag positioned at the bottom with higher z-index */}
      <div className="absolute bottom-0 left-4 md:left-8 lg:left-16 transform translate-y-1/2 z-30">
        <div className="bg-yellow-400 px-4 md:px-6 lg:px-8 py-2 md:py-3 shadow-lg">
          <span className="font-medium font-roboto-mono text-black text-sm md:text-base lg:text-lg">Qlab Innovate</span>
        </div>
      </div>
    </section>
  )
}
