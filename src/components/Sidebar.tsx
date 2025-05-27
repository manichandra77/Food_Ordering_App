
import React from 'react';
import { useApp } from '../contexts/AppContext';
import { Button } from './ui/button';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuOptions = [
  { id: 'about', name: 'About Us', icon: '📖' },
  { id: 'contact', name: 'Contact', icon: '📞' },
  { id: 'help', name: 'Help & Support', icon: '❓' },
  { id: 'feedback', name: 'Feedback', icon: '💬' },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const handleMenuSelect = (optionId: string) => {
    // Handle menu option selection
    console.log(`Selected: ${optionId}`);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />
      )}
      <div className={`fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Menu</h2>
          <div className="space-y-2">
            {menuOptions.map((option) => (
              <Button
                key={option.id}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => handleMenuSelect(option.id)}
              >
                <span className="mr-3 text-lg">{option.icon}</span>
                {option.name}
              </Button>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">About FoodieHub</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              FoodieHub is your premier destination for authentic Indian cuisine. We bring you the finest selection of traditional and modern dishes, prepared with love and the freshest ingredients.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
