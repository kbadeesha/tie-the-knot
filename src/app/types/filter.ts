import { Option } from "./option";

export interface FilterCategory {
  name: string;
  options?: Option[];
  filterKey: string;
  type: 'dropdown' |'checkbox'| 'list' | 'price' | 'availability' | 'capacity' | 'indoor-outdoor' | 'venue-type' | 'included' | 'award-winners' | 'amenities' | 'event-types' | 'location'; 
}


export interface FilterValues {
    type: string | null;
    location: string | null;
    price: string; 
    capacity:string
    minPrice: number | null;
    maxPrice: number | null;
    // ... other filter keys
  }