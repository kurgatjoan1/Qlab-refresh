import { ContactFormData, ContactSubmissionResponse } from '@/types';

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

export async function submitContactForm(formData: ContactFormData): Promise<ContactSubmissionResponse> {
  const response = await fetch(`${STRAPI_API_URL}/api/contact-submissions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: formData,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Failed to submit form');
  }

  return response.json();
}

