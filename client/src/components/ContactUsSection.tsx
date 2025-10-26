"use client";
import React from "react";
import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen bg-white relative overflow-hidden flex items-center py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 xl:px-12 2xl:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-32 items-center">
          {/* Left side - Text content */}
          <div className="relative order-1 lg:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight font-roboto-mono">
              Let&#39;s Get In Touch
            </h2>
            <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed font-inter text-base md:text-lg xl:text-xl 2xl:text-2xl">
              Have a question or need assistance? Reach out to us via email,
              phone, or the contact form below. We&#39;re eager to assist you.
            </p>
          </div>

          {/* Right side - Contact form */}
          <div className="flex justify-center font-Inter order-2 lg:order-2">
            <div className="bg-white p-1 md:p-2 lg:p-4 w-full max-w-md xl:max-w-lg 2xl:max-w-xl">
              <form className="space-y-0 md:space-y-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm xl:text-base 2xl:text-lg font-medium text-gray-700 mb-2 font-inter"
                  >
                    Full Name:
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="w-full px-3 md:px-4 xl:px-5 2xl:px-6 py-2 md:py-3 border border-black rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base xl:text-lg 2xl:text-xl"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm xl:text-base 2xl:text-lg font-medium text-gray-700 mb-2 font-inter"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 md:px-4 xl:px-5 2xl:px-6 py-2 md:py-3 border border-black rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base xl:text-lg 2xl:text-xl"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm xl:text-base 2xl:text-lg font-medium text-gray-700 mb-2 font-inter"
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 md:px-4 xl:px-5 2xl:px-6 py-2 md:py-3 border border-black rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm md:text-base xl:text-lg 2xl:text-xl"
                  ></textarea>
                </div>
                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    className="w-full md:w-1/2 font-inter bg-black text-white py-2 md:py-3 px-4 md:px-6 xl:px-8 2xl:px-10 rounded-md hover:bg-gray-800 transition-colors text-sm md:text-base xl:text-lg 2xl:text-xl"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Upper left purple diagonal element */}
      <div className="absolute top-2 md:top-4 left-0 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 pointer-events-none opacity-50 md:opacity-70">
        <Image
          src="/Group purple.svg"
          alt="Purple diagonal design"
          width={452}
          height={454}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Lower right purple diagonal element */}
      <div className="absolute -bottom-24 md:-bottom-36 left-32 md:left-60 lg:left-80 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 pointer-events-none opacity-70 md:opacity-100">
        <Image
          src="/Group purple.svg"
          alt="Purple diagonal design"
          width={452}
          height={454}
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default Contact;
