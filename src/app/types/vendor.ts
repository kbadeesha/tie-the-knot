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
  address: string;
  startingPrice: number;
  description: string;
  feedbacks: Feedback[];
}

export interface Feedback {
  comment: string;
  clientName: string;
  daysAgo: number;
}
