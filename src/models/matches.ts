export interface IJobTitle {
  name: string;
  imageUrl: string;
}

export interface IAddress {
  formattedAddress: string;
  zoneId: string;
}

export interface IReportTo {
  name: string;
  phone?: string;
}

export interface ICompany {
  name: string;
  address: IAddress;
  reportTo: IReportTo;
}

export interface IShift {
  startDate: Date;
  endDate: Date;
}

export interface IJob {
  jobId: string;
  jobTitle: IJobTitle;
  company: ICompany;
  wagePerHourInCents: number;
  milesToTravel: number;
  shifts: IShift[];
  branch: string;
  branchPhoneNumber: string;
  requirements?: string[];
}
