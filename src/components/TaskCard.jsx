import React from 'react';
   import Button from './Button';

   function TaskCard({ task, onUpdate, onDelete }) {
     return (
       <div className="animate-fade-in bg-white dark:bg-gray-800 p-4 mb-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
         <h3 className="text-lg md:text-xl font-semibold">{task.title}</h3>
         <p className="text-gray-600 dark:text-gray-300">Status: {task.status}</p>
         <p className="text-gray-600 dark:text-gray-300">Priority: {task.priority}</p>
         <div className="mt-2 flex space-x-2">
           <Button onClick={() => onUpdate(task._id, 'completed')} variant="primary">Complete</Button>
           <Button onClick={() => onDelete(task._id)} variant="danger">Delete</Button>
         </div>
       </div>
     );
   }

   export default TaskCard;