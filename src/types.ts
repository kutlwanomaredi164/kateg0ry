export type ServiceCategory = 
  | 'Events & Festivals'
  | 'Portrait & Studio Shoots'
  | 'Commercial & Brand Media'
  | 'Cinema & Documentaries';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ServiceCategory;
  client: string;
  year: string;
  coverImage: string;
  galleryImages: string[];
  description: string;
  deliverables: string[];
  role: string;
  location: string;
  featured?: boolean;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
  videoPreview?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  deliverables: string[];
  image: string;
  turnaround: string;
}

export interface StatisticItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  companyTier: string;
  quote: string;
  rating: number;
  avatar: string;
  projectTitle: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  image: string;
  spanClass: string;
  cameraInfo: string;
  location: string;
  isoAperture: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  date: string;
  location: string;
  budget: string;
  message: string;
}
