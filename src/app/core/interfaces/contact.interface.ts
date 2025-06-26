export interface ContactInfo {
  title: string;
  subheading: string;
  description: string;
  status: number;
  company: Company[];
}

export interface Company {
  name: string;
  address: Address[];
  contact: Contact[];
}

export interface Address {
  line1: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
}

export interface Contact {
  email: string;
  phone: string;
}
