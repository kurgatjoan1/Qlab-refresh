/**
 * Get the full URL for a Strapi image
 * @param url - The relative URL from Strapi (e.g., "/uploads/image.jpg")
 * @returns The full URL with the Strapi base URL
 */
export function getStrapiImageUrl(url: string | null | undefined): string {
  if (!url) return '';
  
  // If the URL is already absolute, return it as is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  
  // Otherwise, prepend the Strapi API URL
  const strapiUrl = process.env.STRAPI_API_URL || 'http://localhost:1337';
  return `${strapiUrl}${url}`;
}

/**
 * Get the alt text for an image, with fallback
 * @param alternativeText - The alternative text from Strapi
 * @param fallback - Fallback text if alternativeText is null
 * @returns The alt text to use
 */
export function getImageAlt(alternativeText: string | null | undefined, fallback: string = ''): string {
  return alternativeText || fallback;
}

