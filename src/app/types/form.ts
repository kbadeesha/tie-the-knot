export interface RegisterForm {
    firstName?: string;
    lastName?: string;
    partnerFirstName?: string;
    partnerLastName?: string;
    weddingDate?: string | null;
    isDateDecided?: boolean;
    email?: string;
    password?: string;
    status?:string
  }