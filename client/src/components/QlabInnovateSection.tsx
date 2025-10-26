// src/components/QlabInnovateSection.tsx
import Image from 'next/image'

export default function QlabInnovateSection() {
  return (
    <section className="relative">
      {/* Accelerate Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/1.jpg"
            alt="Woman with tablet background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
        <div className="relative z-10 min-h-screen flex items-center justify-start">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-sm md:max-w-md lg:max-w-lg ml-4 md:ml-8 lg:ml-12">
              <h3 
                className="font-work-sans font-normal text-white mb-8 md:mb-12 text-lg md:text-xl lg:text-2xl leading-relaxed"
              >
                Accelerate your journey to product-market fit<br />
                with precision and speed.
              </h3>
              <button className="flex items-center text-white hover:text-gray-200 transition-colors font-roboto-mono">
                <span className="mr-2">→</span>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Raising Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/2.jpg"
            alt="Man speaking background"
            fill
            className="object-cover"
          />
          {/* Teal overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
        <div className="relative z-10 min-h-screen flex items-center justify-start">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-sm md:max-w-md lg:max-w-lg ml-4 md:ml-8 lg:ml-12">
              <h3 
                className="font-work-sans font-normal text-white mb-8 md:mb-12 text-lg md:text-xl lg:text-2xl leading-relaxed"
              >
                Raising $30M to launch 100 transformative<br />
                startups in Africa.
              </h3>
              <button className="flex items-center text-white hover:text-gray-200 transition-colors font-roboto-mono">
                <span className="mr-2">→</span>
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Co Partner Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/3.jpg"
            alt="Business meeting background"
            fill
            className="object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
        <div className="relative z-10 min-h-screen flex items-center justify-start">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-sm md:max-w-md lg:max-w-lg ml-4 md:ml-8 lg:ml-12">
              <h3 
                className="font-work-sans font-normal text-white mb-8 md:mb-12 text-lg md:text-xl lg:text-2xl leading-relaxed"
              >
                Our Co partner is a world-class digital firm<br />
                focused on technical product development,<br />
                innovation management, market research,<br />
                data science, and digital transformation.
              </h3>
              <button className="flex items-center text-white hover:text-gray-200 font-roboto-mono transition-colors">
                <span className="mr-2">→</span>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Yellow "Stories & News" tag positioned at the bottom */}
      <div className="absolute bottom-0 left-4 md:left-8 lg:left-16 transform translate-y-1/2 z-30">
        <div className="bg-yellow-400 px-4 md:px-6 lg:px-8 py-2 md:py-3 shadow-lg">
          <span className="font-medium font-roboto-mono text-black text-sm md:text-base lg:text-lg">Stories & News</span>
        </div>
      </div>
    </section>
  )
}