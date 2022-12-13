export interface User {
  id: number;
  email: string;
  Transaction: Transaction[];
}

export interface Transaction {
  id: string;
  userId: number;
  productId: string;
  products: Product;
}

export interface Product {
  id: string;
  title: string;
  cost: number;
  type: "tinder" | "xbox" | "ifood" | "playstation";
}

export type UserContextData = {
  user: User | {};
  changeUserData: (user: User) => void;
};
