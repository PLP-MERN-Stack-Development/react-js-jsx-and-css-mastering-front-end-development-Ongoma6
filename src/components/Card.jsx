import React from 'react';

   function Card({ children, className = '' }) {
     return (
       <div className={`bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md ${className}`}>
         {children}
       </div>
     );
   }

   export default Card;