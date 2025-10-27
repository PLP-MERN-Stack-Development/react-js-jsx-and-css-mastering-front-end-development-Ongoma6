import React from 'react';
     import { ThemeContext, useTheme } from './ThemeContext';

     function ThemeWrapper({ children }) {
       const themeData = useTheme();

       return (
         <ThemeContext.Provider value={themeData}>
           {children}
         </ThemeContext.Provider>
       );
     }

     export default ThemeWrapper;