export interface ICoupleOnBoardFormData {
    firstName: string;
    lastName: string;
    status: string;
    partnerFirstName: string;
    partnerLastName: string;
    address: string;
    city: string;
    }
  
    export interface ICoupleOnBoardPayload {
      role: string;
      address: string;
    city: string;
      firstName: string;
      lastName: string;
      client:{
        planStatus: string;
        partnerFirstName: string;
        partnerLastName: string;
      }
    }
  
  