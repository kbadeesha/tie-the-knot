import { Option } from "./option";

export interface FilterCategory {
  name: string;
  options: Option[];
  filterKey: string;
  type?: "dropdown" | "list";
}


export interface FilterValues {
    type: string;
    location: string;
    price: string; 
    // ... other filter keys
  }