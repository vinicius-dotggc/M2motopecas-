
export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'pneus' | 'oleo' | 'pecas' | 'baterias';
  description: string;
  image: string;
  specs?: string[];
  compatibility?: string[];
  gallery?: string[];
}

export interface GroundingSource {
  title?: string;
  uri: string;
}

export enum ImageSize {
  S1K = '1K',
  S2K = '2K',
  S4K = '4K'
}

export enum AspectRatio {
  R1_1 = '1:1',
  R2_3 = '2:3',
  R3_2 = '3:2',
  R3_4 = '3:4',
  R4_3 = '4:3',
  R9_16 = '9:16',
  R16_9 = '16:9',
  R21_9 = '21:9'
}