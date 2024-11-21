export interface IUserOnBoardFormData {
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    status: string;
    partnerFirstName: string;
    partnerLastName: string;
    }
  
    export interface IUserOnBoardPayload {
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
  
  