import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksContactUs extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contact_uses';
  info: {
    displayName: 'contact us';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    email: Schema.Attribute.String;
    fullName: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image1: Schema.Attribute.Media<'images'>;
    image2: Schema.Attribute.Media<'images'>;
    message: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksDescriptionSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_description_sections';
  info: {
    displayName: 'Description Section';
  };
  attributes: {
    bussinessModel1: Schema.Attribute.RichText;
    description: Schema.Attribute.Text;
    mission: Schema.Attribute.String;
  };
}

export interface BlocksFooter extends Struct.ComponentSchema {
  collectionName: 'components_blocks_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    aboutUs: Schema.Attribute.Component<'elements.link', false>;
    contactUs: Schema.Attribute.Component<'elements.link', false>;
    facebook: Schema.Attribute.Component<'elements.link', false>;
    home: Schema.Attribute.Component<'elements.link', false>;
    instagram: Schema.Attribute.Component<'elements.link', false>;
    linkedIn: Schema.Attribute.Component<'elements.link', false>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    mission: Schema.Attribute.String;
    newsBlogs: Schema.Attribute.Component<'elements.link', false>;
    partner: Schema.Attribute.Component<'elements.link', false>;
    startUps: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
  };
}

export interface BlocksInfoSectionWithTitle extends Struct.ComponentSchema {
  collectionName: 'components_blocks_info_section_with_titles';
  info: {
    displayName: 'info section with title';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images'>;
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface BlocksInfoSectionWithoutTitle extends Struct.ComponentSchema {
  collectionName: 'components_blocks_info_section_without_titles';
  info: {
    displayName: 'info section without title';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images'>;
    cta: Schema.Attribute.Component<'elements.link', false>;
    description1: Schema.Attribute.RichText;
  };
}

export interface BlocksMeetTheTeamSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_meet_the_team_sections';
  info: {
    displayName: 'Meet the team section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    image1: Schema.Attribute.Media<'images'>;
    image2: Schema.Attribute.Media<'images'>;
    image3: Schema.Attribute.Media<'images'>;
    memberDescription1: Schema.Attribute.String;
    memberDescription2: Schema.Attribute.String;
    memberDescription3: Schema.Attribute.String;
    memberName1: Schema.Attribute.String;
    memberName2: Schema.Attribute.String;
    memberName3: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksWomenSSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_women_s_sections';
  info: {
    displayName: "women's section";
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    description1: Schema.Attribute.RichText;
    image1: Schema.Attribute.Media<'images'>;
    image2: Schema.Attribute.Media<'images'>;
    image3: Schema.Attribute.Media<'images'>;
    image4: Schema.Attribute.Media<'images'>;
    image5: Schema.Attribute.Media<'images'>;
    image6: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.contact-us': BlocksContactUs;
      'blocks.description-section': BlocksDescriptionSection;
      'blocks.footer': BlocksFooter;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.info-section-with-title': BlocksInfoSectionWithTitle;
      'blocks.info-section-without-title': BlocksInfoSectionWithoutTitle;
      'blocks.meet-the-team-section': BlocksMeetTheTeamSection;
      'blocks.women-s-section': BlocksWomenSSection;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
    }
  }
}
