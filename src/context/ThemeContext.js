import { createContext, useState, useEffect } from 'react';

     export const ThemeContext = createContext();

     export function useTheme() {
       const [theme, setTheme] = useState('light');

       useEffect(() => {
         document.documentElement.classList.toggle('dark', theme === 'dark');
       }, [theme]);

       const toggleTheme = () => {
         setTheme(theme === 'light' ? 'dark' : 'light');
       };

       return { theme, toggleTheme };
     }