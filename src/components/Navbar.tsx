
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { useCart } from '../contexts/CartContext';
import { useApp } from '../contexts/AppContext';
import { Bell, User, ShoppingCart, Menu, Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';

interface NavbarProps {
  onMenuClick: () => void;
  onCartClick: () => void;
  onProfileClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick, onCartClick, onProfileClick }) => {
  const { user } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const { items } = useCart();
  const { isVegMode, toggleVegMode, currentCategory, setCurrentCategory } = useApp();

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  const categories = [
    { id: 'main-course', name: 'Main Course' },
    { id: 'starters', name: 'Starters' },
    { id: 'soups', name: 'Soups' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'gourmet', name: 'Gourmet' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Button variant="ghost" size="sm" onClick={onMenuClick} className="mr-3">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">FoodieHub</h1>
              {user && (
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {getGreeting()}, {user.name}!
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 dark:text-gray-300">Veg Mode</span>
              <button
                onClick={toggleVegMode}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isVegMode ? 'bg-green-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isVegMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <Button variant="ghost" size="sm" onClick={toggleTheme}>
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button variant="ghost" size="sm">
              <Bell className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="sm" onClick={onCartClick} className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {cartItemCount}
                </Badge>
              )}
            </Button>

            <Button variant="ghost" size="sm" onClick={onProfileClick}>
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Category Selection Tabs */}
        <div className="pb-4">
          <Tabs value={currentCategory} onValueChange={setCurrentCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-xs">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
