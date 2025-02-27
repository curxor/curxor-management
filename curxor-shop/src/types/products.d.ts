export type Products = {
  _id: string;
  title: string;
  image: string;
  sold: number;
  status: string;
  rating: number;
  brand: string;
  origin: string;
};

export type Attributes = {
  _id: string;
  name: string;
  value: string;
  product: string;
};

export type Variants = {
  _id: string;
  name: string;
  image: string;
  product: string;
};

export type VariantOption = {
  _id: string;
  variant: string;
  status: "active" | "inactive" | "out of stock";
  stock: number;
  sold: number;
  price: number;
  SKU: string;
};
