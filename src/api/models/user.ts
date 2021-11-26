export interface IUser {
    address: {
      formattedAddress: string;
      zoneId: string;
    };
    email: string;
    firstName: string;
    lastName: string;
    maxJobDistance: number;
    phoneNumber: string;
    workerId: string;
  }