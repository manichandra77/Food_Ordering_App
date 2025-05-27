
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { User, Moon, Sun, Info, X } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const { user, signOut } = useAuth();
  const { isDark, toggleTheme } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Profile</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {user && (
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-medium">{user.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{user.email}</p>
              </div>
            </div>
          )}
          
          <Separator />
          
          <div className="space-y-3">
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={toggleTheme}
            >
              {isDark ? <Sun className="h-4 w-4 mr-3" /> : <Moon className="h-4 w-4 mr-3" />}
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </Button>
            
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <Info className="h-4 w-4 mr-3" />
                About Us
              </Button>
              <div className="pl-7 text-sm text-gray-600 dark:text-gray-300">
                <p>FoodieHub is your ultimate destination for authentic Indian cuisine. We bring together the finest flavors from across India, prepared with love and traditional recipes passed down through generations.</p>
                <p className="mt-2">Our mission is to deliver not just food, but an experience that celebrates the rich culinary heritage of India. From spicy curries to delicate desserts, every dish tells a story.</p>
                <p className="mt-2">Founded in 2024, we've been serving thousands of satisfied customers with fresh, quality ingredients and exceptional service.</p>
              </div>
            </div>
          </div>
          
          <Separator />
          
          <Button 
            variant="destructive" 
            className="w-full"
            onClick={() => {
              signOut();
              onClose();
            }}
          >
            Sign Out
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileModal;
