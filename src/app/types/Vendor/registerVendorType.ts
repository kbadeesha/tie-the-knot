export interface IVendorRegisterFormData {
    firstName?: string;
    lastName?: string;
    address?: string;
    city?: string;
    companyName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    phoneNumber?: string;
    vendorType?: string;
    selectedServices?: { [key: string]: string[] };
    minPrice?: number;
    maxPrice?: number;
    avgMinPrice?: number;
    avgMaxPrice?: number;
  }