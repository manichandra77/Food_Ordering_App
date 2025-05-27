
import React from 'react';
import { FoodItem } from '../types';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Plus } from 'lucide-react';

interface FoodCardProps {
  item: FoodItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ item }) => {
  const { addItem } = useCart();

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        <Badge 
          className={`absolute top-2 left-2 ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}
        >
          {item.isVeg ? '🌱 Veg' : '🍖 Non-Veg'}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
          {item.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
          {item.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-green-600 dark:text-green-400">
            ₹{item.price}
          </span>
          <Button onClick={() => addItem(item)} size="sm">
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FoodCard;
