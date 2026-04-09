export type ProductState = {
  items: Product[];
  loading: boolean;
  error: string;
};

export type Product = {
  id: string;
  product_name: string;
  image_url: string;
  Price: number;
  Category: string;
};
