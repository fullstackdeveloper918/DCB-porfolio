export interface ImageItem {
  id: number;
  image: string;
}

export interface HomeResponse {
  images: ImageItem[];
  status: number;
}
