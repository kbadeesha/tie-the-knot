// app/types/vendor.ts

export interface Vendor {
  id: string;
  name: string;
  type: string;
  location: string;
  rating: number;
  tagline: string;
  quickResponder: boolean;
  images: string[];
  logo: string;
  address: string;
  startingPrice: number;
  description: string;
  feedbacks: Feedback[];
  socials:Socials;
}

export interface Feedback {
  comment: string;
  clientName: string;
  daysAgo: number;
}

export interface Socials {
  facebook?: string | null;
  instagram?: string | null;
  website?: string | null;
  tiktok?: string | null;
  [key: string]: string | null | undefined;  // To allow flexibility for future platforms
}