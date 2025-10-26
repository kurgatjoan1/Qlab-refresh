// src/components/MeetTheTeamSection.tsx
import Image from 'next/image'

export default function MeetTheTeamSection() {
  const teamMembers = [
    {
      name: "Frankline Mogoi",
      role: "Head of Qlab",
      image: "/team/Ellipse 1 frank.svg"
    },
    {
      name: "Samuel Mwangi",
      role: "Senior Ui/Ux",
      image: "/team/Ellipse sam.svg"
    },
    {
      name: "Clinton Sabali",
      role: "Junior Project Manager",
      image: "/team/Ellipse clinton.svg"
    }
  ]

  return (
    <section className="relative bg-black text-white min-h-screen font-roboto-mono flex items-center py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 xl:px-12 2xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-24 mb-8 md:mb-12 xl:mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-64 xl:h-64 2xl:w-80 2xl:h-80 mx-auto mb-4 md:mb-6 xl:mb-8">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h4 className="font-bold text-lg md:text-xl xl:text-2xl 2xl:text-3xl mb-1">{member.name}</h4>
              <p className="text-gray-400 text-base md:text-lg xl:text-xl 2xl:text-2xl">{member.role}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="flex items-center justify-center mx-auto text-white hover:text-yellow-400 transition-colors text-base md:text-lg xl:text-xl 2xl:text-2xl">
            <span className="mr-2">→</span>
            View All
          </button>
        </div>
      </div>

      {/* Yellow "Contact Us" tag positioned at the bottom */}
      <div className="absolute bottom-0 left-4 md:left-8 lg:left-16 transform translate-y-1/2 z-30">
        <div className="bg-yellow-400 px-4 md:px-6 lg:px-8 py-2 md:py-3 shadow-lg">
          <span className="font-medium font-roboto-mono text-black text-sm md:text-base lg:text-lg">Contact Us</span>
        </div>
      </div>
    </section>
  )
}