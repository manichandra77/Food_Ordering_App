
import React, { useState, useMemo } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useApp } from '../contexts/AppContext';
import { mockFoodItems } from '../data/mockData';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import FoodCard from '../components/FoodCard';
import CartModal from '../components/CartModal';
import AuthModal from '../components/AuthModal';
import ProfileModal from '../components/ProfileModal';
import CheckoutModal from '../components/CheckoutModal';

const Index = () => {
  const { user } = useAuth();
  const { isVegMode, currentCategory } = useApp();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const filteredItems = useMemo(() => {
    return mockFoodItems.filter(item => {
      const categoryMatch = item.category === currentCategory;
      const vegMatch = !isVegMode || item.isVeg;
      return categoryMatch && vegMatch;
    });
  }, [currentCategory, isVegMode]);

  const handleProfileClick = () => {
    if (user) {
      setIsProfileOpen(true);
    } else {
      setIsAuthOpen(true);
    }
  };

  const getCategoryTitle = () => {
    const categoryMap: { [key: string]: string } = {
      'main-course': 'Main Course',
      'starters': 'Starters',
      'soups': 'Soups',
      'desserts': 'Desserts',
      'gourmet': 'Gourmet'
    };
    return categoryMap[currentCategory] || 'Menu';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar 
        onMenuClick={() => setIsSidebarOpen(true)}
        onCartClick={() => setIsCartOpen(true)}
        onProfileClick={handleProfileClick}
      />
      
      <Sidebar 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {getCategoryTitle()}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {isVegMode ? 'Showing vegetarian options only' : 'Showing all available items'}
          </p>
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No items found for this category.
            </p>
            {isVegMode && (
              <p className="text-gray-400 dark:text-gray-500 mt-2">
                Try turning off veg mode to see more options.
              </p>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </main>

      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <AuthModal 
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

      <ProfileModal 
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      <CheckoutModal 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </div>
  );
};

export default Index;
