import qs from "qs";
import { fetchAPI } from "../utils/fetch-api";


const STRAPI_API_URL = process.env.STRAPI_API_URL;

const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        "blocks.hero-section": {
          populate: {
            backgroundImage: {
              fields: ["url", "alternativeText"],
            },
            logo: {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
            
          },
        },
        "blocks.description-section": {
          populate: "*",
        },
        "blocks.info-section-with-title": {
          populate: {
            bgImage: {
              fields: ["url", "alternativeText"],
            },
            
            cta: true,
          },
        },
        "blocks.info-section-without-title": {
          populate: {
            bgImage: {
              fields: ["url", "alternativeText"],
            },
            
            cta: true,
          },
        },
        "blocks.info-section-without-title": {
          populate: {
            bgImage: {
              fields: ["url", "alternativeText"],
            },
            
            cta: true,
          },
        },
        "blocks.info-section-with-title": {
          populate: {
            bgImage: {
              fields: ["url", "alternativeText"],
            },
            
            cta: true,
          },
        },
       "blocks.women-s-section": {
          populate: {
            image1: {
              fields: ["url", "alternativeText"],
            },
            image2: {
              fields: ["url", "alternativeText"],
            },
            image3: {
              fields: ["url", "alternativeText"],
            },
            image4: {
              fields: ["url", "alternativeText"],
            },
            image5: {
              fields: ["url", "alternativeText"],
            },
            image6: {
              fields: ["url", "alternativeText"],
            },
            
            cta: true,
          },
        },
        "blocks.meet-the-team-section": {
          populate: {
            image1: {
              fields: ["url", "alternativeText"],
            },
            image2: {
              fields: ["url", "alternativeText"],
            },
            image3: {
              fields: ["url", "alternativeText"],
            },
            
            cta: true,
          },
        },
        "blocks.contact-us": {
          populate: {
            image1: {
              fields: ["url", "alternativeText"],
            },
            image2: {
              fields: ["url", "alternativeText"],
            },
            
          },
        },
        "blocks.footer": {
          populate: {
            logo: {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
            home: true,
            aboutUs: true,
            newsBlogs: true,
            partner: true,
            contactUs: true,
            startUps: true,
            instagram: true,
            facebook: true,
            linkedIn: true,
          },
        },
      },
    },
  },

});

export async function getHomePage() {
  const path = "/api/home-page";
  const url = new URL(path, STRAPI_API_URL);
  url.search = homePageQuery;

  return await fetchAPI(url.href, { method: "GET" });
}

