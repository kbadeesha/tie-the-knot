export interface IUserRegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  status: string;
  partnerFirstName: string;
  partnerLastName: string;
  }

  export interface IUserRegisterPayload {
    role: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    client:{
      planStatus: string;
      partnerFirstName: string;
      partnerLastName: string;
    }
  }

