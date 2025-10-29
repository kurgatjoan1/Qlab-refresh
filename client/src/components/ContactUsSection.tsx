"use client";
import React, { useState, FormEvent } from "react";
import Image from "next/image";
import { ContactUsSectionBlock } from '@/types';
import { getStrapiImageUrl, getImageAlt } from '@/lib/strapi';
import { submitContactForm } from '@/utils/contact-form';
import ScrollReveal from './animations/ScrollReveal';
import { motion } from 'framer-motion';

interface ContactUsSectionProps {
  data: ContactUsSectionBlock;
}

const Contact: React.FC<ContactUsSectionProps> = ({ data }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      await submitContactForm(formData);
      setSubmitStatus('success');
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        message: '',
      });
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit form');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  return (
    <section className="min-h-screen bg-white relative overflow-hidden flex items-center py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 xl:px-12 2xl:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-32 items-center">
          {/* Left side - Text content */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="relative order-1 lg:order-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight font-roboto-mono">
                {data.heading}
              </h2>
              <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed font-inter text-base md:text-lg xl:text-xl 2xl:text-2xl">
                {data.description}
              </p>
            </div>
          </ScrollReveal>

          {/* Right side - Contact form */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex justify-center font-Inter order-2 lg:order-2">
            <div className="bg-white p-1 md:p-2 lg:p-4 w-full max-w-md xl:max-w-lg 2xl:max-w-xl">
              {submitStatus === 'success' && (
                <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  {errorMessage || 'Failed to send message. Please try again.'}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-0 md:space-y-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm xl:text-base 2xl:text-lg font-medium text-gray-700 mb-2 font-inter"
                  >
                    {data.fullName}:
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 md:px-4 xl:px-5 2xl:px-6 py-2 md:py-3 border border-black rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base xl:text-lg 2xl:text-xl disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm xl:text-base 2xl:text-lg font-medium text-gray-700 mb-2 font-inter"
                  >
                    {data.email}:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 md:px-4 xl:px-5 2xl:px-6 py-2 md:py-3 border border-black rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base xl:text-lg 2xl:text-xl disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm xl:text-base 2xl:text-lg font-medium text-gray-700 mb-2 font-inter"
                  >
                    {data.message}:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 md:px-4 xl:px-5 2xl:px-6 py-2 md:py-3 border border-black rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm md:text-base xl:text-lg 2xl:text-xl disabled:bg-gray-100 disabled:cursor-not-allowed"
                  ></textarea>
                </div>
                <div className="flex justify-center pt-2">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full md:w-1/2 font-inter bg-black text-white py-2 md:py-3 px-4 md:px-6 xl:px-8 2xl:px-10 rounded-md hover:bg-gray-800 transition-colors text-sm md:text-base xl:text-lg 2xl:text-xl disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                  </motion.button>
                </div>
              </form>
            </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Upper left purple diagonal element */}
      <div className="absolute top-2 md:top-4 left-0 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 pointer-events-none opacity-50 md:opacity-70">
        <Image
          src={getStrapiImageUrl(data.image1.url)}
          alt={getImageAlt(data.image1.alternativeText, 'Decorative design')}
          width={452}
          height={454}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Lower right purple diagonal element */}
      <div className="absolute -bottom-24 md:-bottom-36 left-32 md:left-60 lg:left-80 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 pointer-events-none opacity-70 md:opacity-100">
        <Image
          src={getStrapiImageUrl(data.image2.url)}
          alt={getImageAlt(data.image2.alternativeText, 'Decorative design')}
          width={452}
          height={454}
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default Contact;
