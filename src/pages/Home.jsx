import React from 'react';
   import Card from '../components/Card';
   import Button from '../components/Button';
   import { Link } from 'react-router-dom';

   function Home() {
     return (
       <Card className="text-center">
         <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
           Welcome to Task Manager
         </h1>
         <p className="text-gray-600 dark:text-gray-300 mt-2">
           Manage your tasks efficiently with our MERN stack application.
         </p>
         <Link to="/tasks">
           <Button className="mt-4">View Tasks</Button>
         </Link>
       </Card>
     );
   }

   export default Home;