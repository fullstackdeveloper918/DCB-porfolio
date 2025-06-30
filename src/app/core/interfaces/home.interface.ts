export interface ImageItem {
  id: number;
  image: string;
}

export interface HomeResponse {
  images: ImageItem[];
  status: number;
}

export interface Project {
  name: string;
  year: string;
  before_img: string;
  after_img: string;
}

export interface ProjectResponse {
  projects: Project[];
}
