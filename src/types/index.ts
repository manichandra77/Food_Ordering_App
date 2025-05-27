
export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'main-course' | 'starters' | 'soups' | 'desserts' | 'gourmet';
  isVeg: boolean;
  subcategory?: string;
}

export interface CartItem extends FoodItem {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  userId: string;
  createdAt: Date;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered';
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}
