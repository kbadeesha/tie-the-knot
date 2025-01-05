export interface IVendorRegisterFormData {
    address?: string;
    city?: string;
    companyName?: string;
    phoneNumber?: string;
    vendorType?: string;
    vendorServices?: { [key: string]: string[] };
    minPrice?: number;
    maxPrice?: number;
    avgMinPrice?: number;
    avgMaxPrice?: number;
    vows:boolean;
  }