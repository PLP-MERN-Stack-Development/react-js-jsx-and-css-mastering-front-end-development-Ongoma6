import React, { useContext } from 'react';
     import { Link } from 'react-router-dom';
     import { ThemeContext } from '../context/ThemeContext.js'; // Updated extension
     import Button from './Button';

     function Navbar() {
       const { theme, toggleTheme } = useContext(ThemeContext);

       return (
         <nav className="bg-gray-100 dark:bg-gray-900 p-4 shadow">
           <div className="container mx-auto flex justify-between items-center">
             <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
               Task Manager
             </Link>
             <div className="flex space-x-4">
               <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
                 Home
               </Link>
               <Link to="/tasks" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
                 Tasks
               </Link>
               <Button onClick={toggleTheme}>
                 {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
               </Button>
             </div>
           </div>
         </nav>
       );
     }

     export default Navbar;