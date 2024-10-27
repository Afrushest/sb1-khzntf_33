export interface News {
  id: string;
  title: string;
  type: 'training' | 'services' | 'other';
  theme: string;
  content: string;
  images: string[];
  publishDate: string;
  viewCount: number;
}