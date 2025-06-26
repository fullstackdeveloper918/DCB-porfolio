export interface Builder20ClubData {
  heading: string;
  subheading: string;
  description: string;
  status: number;
  projects: Builder20Project[];
}

interface Builder20Project {
  title: string;
  image: string;
  name: string;
  logo: string;
  link: string;
}
