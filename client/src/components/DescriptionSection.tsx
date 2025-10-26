// src/components/DescriptionSection.tsx
export default function DescriptionSection() {
  return (
    <section className="bg-white py-8 md:py-16 relative pb-16 md:pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Top paragraph */}
        <div className="flex justify-center mb-8 md:mb-10">
          <div className="max-w-2xl text-center">
            <p 
              className="font-roboto-mono font-normal text-[#484848] leading-tight md:leading-none text-lg md:text-xl lg:text-xl"
            >
              We are a firm that invests human capital rather than cash in
              Africa&#39;s leading startups, with a mission to establish 100
              companies generating $10M+ in revenue, address critical
              challenges through digital innovation
            </p>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          <div className="flex mb-8 lg:mb-0 items-center">
            <h2 
              className="font-roboto-mono font-normal text-black leading-tight md:leading-none text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            >
              Catalyzing<br />
              Africa&#39;s<br />
              Digital Future
            </h2>
          </div>
          <div>
            <p 
              className="font-roboto font-normal text-[#484848] leading-relaxed text-base md:text-lg lg:text-xl"
            >
              Qlab is securing $30 million in funding to launch 100 high-
              impact startups across Africa, focusing on digital solutions
              that address the continent&#39;s most pressing challenges. By
              investing human capital instead of cash, we empower
              visionary entrepreneurs with the expertise, mentorship, and
              resources needed to scale their ventures. This initiative aims
              to drive economic growth, create sustainable jobs, and
              position Africa as a global leader in tech innovation.
            </p>
          </div>
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