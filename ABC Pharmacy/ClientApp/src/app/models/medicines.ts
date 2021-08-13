export interface IMedicines {
  id?: number;
  fullName: string;
  brand: string;
  price: number;
  quantity: number;
  expiryDate: Date;
  notes: string;
}

export class Medicines implements IMedicines {
  id?: number;
  fullName: string;
  brand: string;
  price: number;
  quantity: number;
  expiryDate: Date;
  notes: string;
}
