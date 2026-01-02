
export interface Magazine {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  siteUrl: string;
}

export interface Service {
  id: string;
  name: string;
  path: string;
  description: string;
  longDescription: string;
  features: string[];
  imageUrl: string;
}
