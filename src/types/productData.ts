export interface ProductData {
    id?: number;
    title: string;
    price: number;
    description: string;
    category?: string;
    image: string;
    rating?: {
      rate: number;
      count: number;
    }	
}