// Root Interface
export interface BeforeYouBuildContent {
  title: string;
  heroImage: string;
  intro: string;
  sections: Section[];
}

// Section can be one of two types
export type Section = TextWithListSection | TextBlockSection;

export interface TextWithListSection {
  type: 'text_with_list';
  title: string;
  items: SectionItem[];
}

export interface TextBlockSection {
  type: 'text_block';
  title: string;
  description: string;
}

// Reusable item interface for lists
export interface SectionItem {
  heading: string;
  description: string;
}
