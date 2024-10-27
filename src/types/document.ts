export interface Document {
  id: string;
  title: string;
  resourceType: 'training' | 'exam' | 'other';
  theme: string;
  displayPage: string;
  fileUrl: string;
  fileName: string;
  fileSize: string;
  uploadDate: string;
  downloadCount: number;
}