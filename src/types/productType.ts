export interface Category {
  ID: number;
  Name: string;
  Description: string;
  CreatedAt: string;
  UpdatedAt: string;
}
export interface ProductType {
  ID: number;
  CategoryID: number;
  Name: string;
  Description: string;
  Price: number;
  StockQuantity: number;
  ImageURL: string;
  CreatedAt: string;
  UpdatedAt: string;
  Category: Category;
}

export interface CartItem {
  ID: number;
  UserID: number;
  ProductID: number;
  Quantity: number;
  UnitPrice: number;
  CreatedAt: string;
  UpdatedAt: string;
  Product: ProductType;
}

export interface Order {
  ID: number;
  UserID: number;
  RecipientName: string;
  RecipientPhone: string;
  RecipientEmail: string;
  RecipientAddress: string;
  TotalAmount: number;
  PaymentMethod: string;
  Status: string;
  CreatedAt: string;
  UpdatedAt: string;
  OrderItems: OrderItem[];
}

export interface OrderItem {
  ID: number;
  OrderID: number;
  ProductID: number;
  Quantity: number;
  UnitPrice: number;
  CreatedAt: string;
  UpdatedAt: string;
  Product: ProductType;
}

export interface User {
  ID: number;
  Email: string;
  Name: string;
  Password: string;
  AvatarURL: string;
  Role: string;
  Address: string;
  Phone: string;
  CreatedAt: string;
  UpdatedAt: string;
  CartItems: CartItem[];
}
