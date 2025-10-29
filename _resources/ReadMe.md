<!-- make sure to use node v22.2.0 for both the client and server -->
fnm env --use-on-cd --shell powershell | Out-String |Invoke-Expression                                                
fnm v22.2.0

<!-- to run for both -->
use "npm run dev"

<!-- API query for the landing page -->
{
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
};

<!-- url to test -->
http://localhost:1337/api/home-page?populate[blocks][on][blocks.hero-section][populate][backgroundImage][fields][0]=url&populate[blocks][on][blocks.hero-section][populate][backgroundImage][fields][1]=alternativeText&populate[blocks][on][blocks.hero-section][populate][logo][populate][image][fields][0]=url&populate[blocks][on][blocks.hero-section][populate][logo][populate][image][fields][1]=alternativeText&populate[blocks][on][blocks.description-section][populate]=*&populate[blocks][on][blocks.info-section-with-title][populate][bgImage][fields][0]=url&populate[blocks][on][blocks.info-section-with-title][populate][bgImage][fields][1]=alternativeText&populate[blocks][on][blocks.info-section-with-title][populate][cta]=true&populate[blocks][on][blocks.info-section-without-title][populate][bgImage][fields][0]=url&populate[blocks][on][blocks.info-section-without-title][populate][bgImage][fields][1]=alternativeText&populate[blocks][on][blocks.info-section-without-title][populate][cta]=true&populate[blocks][on][blocks.women-s-section][populate][image1][fields][0]=url&populate[blocks][on][blocks.women-s-section][populate][image1][fields][1]=alternativeText&populate[blocks][on][blocks.women-s-section][populate][image2][fields][0]=url&populate[blocks][on][blocks.women-s-section][populate][image2][fields][1]=alternativeText&populate[blocks][on][blocks.women-s-section][populate][image3][fields][0]=url&populate[blocks][on][blocks.women-s-section][populate][image3][fields][1]=alternativeText&populate[blocks][on][blocks.women-s-section][populate][image4][fields][0]=url&populate[blocks][on][blocks.women-s-section][populate][image4][fields][1]=alternativeText&populate[blocks][on][blocks.women-s-section][populate][image5][fields][0]=url&populate[blocks][on][blocks.women-s-section][populate][image5][fields][1]=alternativeText&populate[blocks][on][blocks.women-s-section][populate][image6][fields][0]=url&populate[blocks][on][blocks.women-s-section][populate][image6][fields][1]=alternativeText&populate[blocks][on][blocks.women-s-section][populate][cta]=true&populate[blocks][on][blocks.meet-the-team-section][populate][image1][fields][0]=url&populate[blocks][on][blocks.meet-the-team-section][populate][image1][fields][1]=alternativeText&populate[blocks][on][blocks.meet-the-team-section][populate][image2][fields][0]=url&populate[blocks][on][blocks.meet-the-team-section][populate][image2][fields][1]=alternativeText&populate[blocks][on][blocks.meet-the-team-section][populate][image3][fields][0]=url&populate[blocks][on][blocks.meet-the-team-section][populate][image3][fields][1]=alternativeText&populate[blocks][on][blocks.meet-the-team-section][populate][cta]=true&populate[blocks][on][blocks.contact-us][populate][image1][fields][0]=url&populate[blocks][on][blocks.contact-us][populate][image1][fields][1]=alternativeText&populate[blocks][on][blocks.contact-us][populate][image2][fields][0]=url&populate[blocks][on][blocks.contact-us][populate][image2][fields][1]=alternativeText&populate[blocks][on][blocks.footer][populate][logo][populate][image][fields][0]=url&populate[blocks][on][blocks.footer][populate][logo][populate][image][fields][1]=alternativeText&populate[blocks][on][blocks.footer][populate][home]=true&populate[blocks][on][blocks.footer][populate][aboutUs]=true&populate[blocks][on][blocks.footer][populate][newsBlogs]=true&populate[blocks][on][blocks.footer][populate][partner]=true&populate[blocks][on][blocks.footer][populate][contactUs]=true&populate[blocks][on][blocks.footer][populate][startUps]=true&populate[blocks][on][blocks.footer][populate][instagram]=true&populate[blocks][on][blocks.footer][populate][facebook]=true&populate[blocks][on][blocks.footer][populate][linkedIn]=true



<!-- Output -->
{
    "data": {
        "id": 3,
        "documentId": "qdmse81wwu44e4qntwgpk111",
        "createdAt": "2025-10-27T02:03:36.034Z",
        "updatedAt": "2025-10-27T03:20:02.485Z",
        "publishedAt": "2025-10-27T03:20:03.470Z",
        "blocks": [
            {
                "__component": "blocks.hero-section",
                "id": 3,
                "backgroundImage": {
                    "id": 32,
                    "documentId": "r25kv6m8i86ard7a3e99ufgg",
                    "url": "/uploads/Rectangle_132_8794c7003d.svg",
                    "alternativeText": null
                },
                "logo": {
                    "id": 5,
                    "text": "qlab logo",
                    "image": {
                        "id": 12,
                        "documentId": "u1gjbpt3oaw1ytlwuft7tvz2",
                        "url": "/uploads/qlab_logo_935e3073ff.png",
                        "alternativeText": null
                    }
                }
            },
            {
                "__component": "blocks.description-section",
                "id": 3,
                "description": "We are a firm that invests human capital rather than cash in Africa’s leading startups, with a mission to establish 100 companies generating $10M+ in revenue, address critical challenges through digital innovation",
                "mission": "Catalyzing Africa’s  Digital Future",
                "bussinessModel1": "Qlab is securing $30 million in funding to launch 100 high-impact startups across Africa, focusing on digital solutions that address the continent’s most pressing challenges. By investing human capital instead of cash, we empower visionary entrepreneurs with the expertise, mentorship, and resources needed to scale their ventures. This initiative aims to drive economic growth, create sustainable jobs, and position Africa as a global leader in tech innovation."
            },
            {
                "__component": "blocks.info-section-with-title",
                "id": 5,
                "title": "Qlab Innovate",
                "description": "Accelerate your journey to product-market fit with precision and speed.",
                "bgImage": {
                    "id": 8,
                    "documentId": "hj9y1w3zepa50je82567sx0i",
                    "url": "/uploads/1_9842ffdf49.jpg",
                    "alternativeText": null
                },
                "cta": {
                    "id": 31,
                    "text": "Learn More",
                    "href": "/learn-more",
                    "isExternal": false
                }
            },
            {
                "__component": "blocks.info-section-without-title",
                "id": 5,
                "description1": "Raising $30M to launch 100 transformative startups in Africa.",
                "bgImage": {
                    "id": 9,
                    "documentId": "bf0cyvwhbwwkqul53v7640b3",
                    "url": "/uploads/2_18f949ad60.jpg",
                    "alternativeText": null
                },
                "cta": {
                    "id": 32,
                    "text": "Explore",
                    "href": "/explore",
                    "isExternal": false
                }
            },
            {
                "__component": "blocks.info-section-without-title",
                "id": 6,
                "description1": "Our Co partner is a world-class digital firm focused on technical product development, innovation management, market research, data science, and digital transformation. \n",
                "bgImage": {
                    "id": 13,
                    "documentId": "gvwj5cu3qlgqpodhxxs5wk4p",
                    "url": "/uploads/3_4f5878d10f.jpg",
                    "alternativeText": null
                },
                "cta": {
                    "id": 33,
                    "text": "Learn More",
                    "href": "/learn-more",
                    "isExternal": false
                }
            },
            {
                "__component": "blocks.info-section-with-title",
                "id": 6,
                "title": "Stories & News",
                "description": "Get insight into the African tech ecosystem.",
                "bgImage": {
                    "id": 14,
                    "documentId": "vihkc2ado5i90zdka8aamjcr",
                    "url": "/uploads/4_ab2ca354ef.jpg",
                    "alternativeText": null
                },
                "cta": {
                    "id": 34,
                    "text": "Explore Qlab",
                    "href": "/qlab",
                    "isExternal": false
                }
            },
            {
                "__component": "blocks.women-s-section",
                "id": 3,
                "description1": "Women workers in popular ride-hailing and delivery platforms are conspicuous by their absence in Uganda, Tanzania and Kenya. The Fairwork..",
                "image1": {
                    "id": 23,
                    "documentId": "y9my47c551rxo6ommvxduvcu",
                    "url": "/uploads/Link1_85d1db9f60.png",
                    "alternativeText": null
                },
                "image2": {
                    "id": 31,
                    "documentId": "m6meuhchq5kyrqdoysig5ieo",
                    "url": "/uploads/link2_9660e5af51.png",
                    "alternativeText": null
                },
                "image3": {
                    "id": 33,
                    "documentId": "bsp6ryo9ri2sjvj9y6bbyozd",
                    "url": "/uploads/Link3_cf74cc5fb4.png",
                    "alternativeText": null
                },
                "image4": {
                    "id": 29,
                    "documentId": "v0b9p0crv5uoaagvef5p6yz3",
                    "url": "/uploads/Link4_acf3f0abfa.png",
                    "alternativeText": null
                },
                "image5": {
                    "id": 4,
                    "documentId": "vqzo4guoeumc8apnt5578ig8",
                    "url": "/uploads/Link5_e15e6674f3.png",
                    "alternativeText": null
                },
                "image6": {
                    "id": 11,
                    "documentId": "jjpf7s61liypbzckk4xlar2y",
                    "url": "/uploads/Link6_6a86200e0c.png",
                    "alternativeText": null
                },
                "cta": {
                    "id": 35,
                    "text": "Read More",
                    "href": "/women-workers",
                    "isExternal": false
                }
            },
            {
                "__component": "blocks.meet-the-team-section",
                "id": 3,
                "title": "Meet the Team",
                "memberName1": "Frankline Mogoi",
                "memberDescription1": "Head of Qlab",
                "memberName2": "Samuel Mwangi",
                "memberDescription2": "Senior UI/UX",
                "memberName3": "Clinton Sabali",
                "memberDescription3": "Junior Project Manager",
                "image1": {
                    "id": 36,
                    "documentId": "wxcqvp88j0bqkfbx1cg3y136",
                    "url": "/uploads/Ellipse_1_frank_38294717c1.svg",
                    "alternativeText": null
                },
                "image2": {
                    "id": 34,
                    "documentId": "o7jxoqulngbbhsa8fzk0fqjj",
                    "url": "/uploads/Ellipse_sam_67a112239f.svg",
                    "alternativeText": null
                },
                "image3": {
                    "id": 35,
                    "documentId": "ttaprc4wv7ocjrpnv2ket82l",
                    "url": "/uploads/Ellipse_clinton_3c0b07fece.svg",
                    "alternativeText": null
                },
                "cta": {
                    "id": 36,
                    "text": "View All",
                    "href": "/team",
                    "isExternal": false
                }
            },
            {
                "__component": "blocks.contact-us",
                "id": 3,
                "title": "Contact Us",
                "heading": "Let’s Get In Touch",
                "description": "Have a question or need assistance? Reach out to us via email, \nphone, or the contact form below. We're eager to assist you.",
                "fullName": "Full Name",
                "email": "Email",
                "message": "Message",
                "image1": {
                    "id": 20,
                    "documentId": "jpe8hjc6h716eto20m0w6q2k",
                    "url": "/uploads/Group_purple_dfa73e3b82.svg",
                    "alternativeText": null
                },
                "image2": {
                    "id": 20,
                    "documentId": "jpe8hjc6h716eto20m0w6q2k",
                    "url": "/uploads/Group_purple_dfa73e3b82.svg",
                    "alternativeText": null
                }
            },
            {
                "__component": "blocks.footer",
                "id": 3,
                "mission": "Catalyzing Africa’s  Digital Future",
                "logo": {
                    "id": 6,
                    "text": "qlab logo",
                    "image": {
                        "id": 12,
                        "documentId": "u1gjbpt3oaw1ytlwuft7tvz2",
                        "url": "/uploads/qlab_logo_935e3073ff.png",
                        "alternativeText": null
                    }
                },
                "home": {
                    "id": 37,
                    "text": "Home",
                    "href": "/",
                    "isExternal": false
                },
                "aboutUs": {
                    "id": 38,
                    "text": "About Us",
                    "href": "/about-us",
                    "isExternal": false
                },
                "newsBlogs": {
                    "id": 39,
                    "text": "News & Blogs",
                    "href": "/news-blogs",
                    "isExternal": false
                },
                "partner": {
                    "id": 40,
                    "text": "Partners",
                    "href": "/partners",
                    "isExternal": false
                },
                "contactUs": {
                    "id": 41,
                    "text": "Contact Us",
                    "href": "/about-us",
                    "isExternal": false
                },
                "startUps": {
                    "id": 42,
                    "text": "Startups",
                    "href": "/startups",
                    "isExternal": false
                },
                "instagram": {
                    "id": 43,
                    "text": "Instagram",
                    "href": "/instagram",
                    "isExternal": true
                },
                "facebook": {
                    "id": 44,
                    "text": "Facebook",
                    "href": "/facebook",
                    "isExternal": true
                },
                "linkedIn": {
                    "id": 45,
                    "text": "LinkedIn",
                    "href": "/linkedin",
                    "isExternal": true
                }
            }
        ]
    },
    "meta": {}
}