
import React, { createContext, useContext, useState } from 'react';

interface AppContextType {
  isVegMode: boolean;
  toggleVegMode: () => void;
  currentCategory: string;
  setCurrentCategory: (category: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVegMode, setIsVegMode] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('main-course');

  const toggleVegMode = () => setIsVegMode(!isVegMode);

  return (
    <AppContext.Provider value={{ isVegMode, toggleVegMode, currentCategory, setCurrentCategory }}>
      {children}
    </AppContext.Provider>
  );
};
