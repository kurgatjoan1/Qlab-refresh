// Base types
export interface LinkProps {
  id: number;
  text: string;
  href: string;
  isExternal: boolean;
}

export interface ImageProps {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
}

export interface LogoProps {
  id: number;
  text: string;
  image: ImageProps;
}

// Block component types
export interface HeroSectionBlock {
  __component: "blocks.hero-section";
  id: number;
  backgroundImage: ImageProps;
  logo: LogoProps;
}

export interface DescriptionSectionBlock {
  __component: "blocks.description-section";
  id: number;
  description: string;
  mission: string;
  bussinessModel1: string;
}

export interface InfoSectionWithTitleBlock {
  __component: "blocks.info-section-with-title";
  id: number;
  title: string;
  description: string;
  bgImage: ImageProps;
  cta: LinkProps;
}

export interface InfoSectionWithoutTitleBlock {
  __component: "blocks.info-section-without-title";
  id: number;
  description1: string;
  bgImage: ImageProps;
  cta: LinkProps;
}

export interface WomensSectionBlock {
  __component: "blocks.women-s-section";
  id: number;
  description1: string;
  image1: ImageProps;
  image2: ImageProps;
  image3: ImageProps;
  image4: ImageProps;
  image5: ImageProps;
  image6: ImageProps;
  cta: LinkProps;
}

export interface MeetTheTeamSectionBlock {
  __component: "blocks.meet-the-team-section";
  id: number;
  title: string;
  memberName1: string;
  memberDescription1: string;
  memberName2: string;
  memberDescription2: string;
  memberName3: string;
  memberDescription3: string;
  image1: ImageProps;
  image2: ImageProps;
  image3: ImageProps;
  cta: LinkProps;
}

export interface ContactUsSectionBlock {
  __component: "blocks.contact-us";
  id: number;
  title: string;
  heading: string;
  description: string;
  fullName: string;
  email: string;
  message: string;
  image1: ImageProps;
  image2: ImageProps;
}

export interface FooterBlock {
  __component: "blocks.footer";
  id: number;
  mission: string;
  logo: LogoProps;
  home: LinkProps;
  aboutUs: LinkProps;
  newsBlogs: LinkProps;
  partner: LinkProps;
  contactUs: LinkProps;
  startUps: LinkProps;
  instagram: LinkProps;
  facebook: LinkProps;
  linkedIn: LinkProps;
}

// Union type for all blocks
export type Block =
  | HeroSectionBlock
  | DescriptionSectionBlock
  | InfoSectionWithTitleBlock
  | InfoSectionWithoutTitleBlock
  | WomensSectionBlock
  | MeetTheTeamSectionBlock
  | ContactUsSectionBlock
  | FooterBlock;

// API Response types
export interface HomePageData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: Block[];
}

export interface HomePageResponse {
  data: HomePageData;
  meta: Record<string, unknown>;
}

// Contact Form Types
export interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
}

export interface ContactSubmissionResponse {
  data: {
    id: number;
    documentId: string;
    fullName: string;
    email: string;
    message: string;
    submittedAt: string;
    status: 'new' | 'read' | 'replied' | 'archived';
    createdAt: string;
    updatedAt: string;
    publishedAt: string | null;
  };
  meta: Record<string, unknown>;
}
