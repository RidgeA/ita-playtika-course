export interface Product {
  id: string;
  category: string;
  subcategory: string;
  article?: string;
  name: string;
  price: number;
  quantity: number;
  manufacturer: string;
  color?: Product;
}

interface ProductUpdate extends Partial<Omit<Product, 'id'>> {
}
