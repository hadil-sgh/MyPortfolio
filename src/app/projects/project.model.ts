export interface Project {
  title: string;
  slug: string;
  tags: string[];
  description: string;
  imageFolder: string;
  imageFiles: string[];
  thumbnail: string | null;
  images: string[];
}
