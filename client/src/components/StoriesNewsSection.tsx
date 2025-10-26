// src/components/StoriesNewsSection.tsx
import Image from "next/image";

export default function StoriesNewsSection() {
  return (
    <section className="relative">
      {/* Get Insights Section - Full screen like QlabInnovate sections */}
      <div className="relative min-h-screen overflow-hidden pt-4">
        {/* Background Image */}
        <div className="absolute inset-0 z-10">
          <Image
            src="/4.jpg"
            alt="Two men in conversation background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        <div className="relative z-20 min-h-screen flex items-center justify-start">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-sm md:max-w-md lg:max-w-lg ml-4 md:ml-8 lg:ml-12">
              <h3 className="font-work-sans font-normal text-white mb-8 md:mb-12 mt-32 md:mt-48 lg:mt-64 text-lg md:text-xl lg:text-2xl leading-relaxed">
                Get insight into the African tech
                <br />
                ecosystem.
              </h3>
              <button className="flex items-center font-roboto-mono text-white hover:text-gray-200 transition-colors">
                <span className="mr-2">→</span>
                Explore Qlab
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* News Grid Section */}
      <div className="min-h-screen bg-white flex items-center py-8">
        <div className="container mx-4 md:mx-8 lg:mx-16 xl:mx-32 px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 h-auto md:h-[85vh] max-h-[1000px]">
            {/* Column 1 */}
            <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
              {/* Link1 - shorter height */}
              <div className="relative h-48 md:flex-[253] md:min-h-0 hidden md:block">
                <Image
                  src="/Link1.png"
                  alt="Person working"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Link2 - taller height */}
              <div className="relative h-64 md:flex-[526] md:min-h-0">
                <Image
                  src="/link2.png"
                  alt="Presentation"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
              {/* Link3 - taller height */}
              <div className="relative h-64 md:flex-[526] md:min-h-0">
                <Image
                  src="/Link3.png"
                  alt="Speaker"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Link4 - shorter height */}
              <div className="relative h-48 md:flex-[253] md:min-h-0 hidden md:block">
                <Image
                  src="/Link4.png"
                  alt="Speaker"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
              {/* Link5 - shorter height */}
              <div className="relative h-48 md:flex-[253] md:min-h-0 hidden md:block">
                <Image
                  src="/Link5.png"
                  alt="Team photo"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Link6 - shorter height with text overlay */}
              <div className="relative h-64 md:flex-[526] md:min-h-0 rounded-lg overflow-hidden">
                <Image
                  src="/Link6.png"
                  alt="Background image"
                  fill
                  className="object-cover"
                />
                {/* Text overlay */}
                <div className="absolute inset-0 bg-black/43 p-3 md:p-4 lg:p-6 font-roboto-mono flex flex-col justify-center">
                  <p
                    className="text-white leading-relaxed mb-2 md:mb-4 text-xs md:text-sm"
                    style={{ fontSize: "14px", lineHeight: "20px" }}
                  >
                      Women workers in
                      <br />
                      popular ride-
                      <br />
                      hailing and
                      <br />
                      delivery platforms
                      <br />
                      are conspicuous by
                      <br />
                      their absence in
                      <br />
                      Uganda, Tanzania
                      <br />
                      and Kenya. The
                      <br />
                    FairWork..
                  </p>
                  <button className="text-white underline text-xs self-start hover:text-gray-200 transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
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
