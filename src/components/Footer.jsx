import React from 'react';

   function Footer() {
     return (
       <footer className="bg-gray-100 dark:bg-gray-900 p-4 mt-auto">
         <div className="container mx-auto text-center text-gray-600 dark:text-gray-400">
           <p>&copy; {new Date().getFullYear()} Task Manager. All rights reserved.</p>
           <div className="flex justify-center space-x-4 mt-2">
             <a href="#" className="hover:text-blue-500">Privacy Policy</a>
             <a href="#" className="hover:text-blue-500">Terms of Service</a>
             <a href="#" className="hover:text-blue-500">Contact</a>
           </div>
         </div>
       </footer>
     );
   }

   export default Footer;