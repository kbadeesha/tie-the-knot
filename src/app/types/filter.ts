import { Option } from "./option";

export interface FilterCategory {
  name: string;
  options?: Option[];
  filterKey: string;
  type: 'dropdown' | 'list' | 'price' | 'availability' | 'capacity' | 'indoor-outdoor' | 'venue-type' | 'included' | 'award-winners' | 'amenities' | 'event-types'; 
}


export interface FilterValues {
    type: string;
    location: string;
    price: string; 
    capacity:string
    minPrice: number | null;
    maxPrice: number | null;
    // ... other filter keys
  }