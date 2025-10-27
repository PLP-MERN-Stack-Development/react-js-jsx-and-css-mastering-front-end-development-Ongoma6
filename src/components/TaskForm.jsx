import React, { useState } from 'react';
   import Button from './Button';

   function TaskForm({ onAdd }) {
     const [title, setTitle] = useState('');
     const [status, setStatus] = useState('pending');
     const [priority, setPriority] = useState('low');
     const [errors, setErrors] = useState({});

     const handleSubmit = (e) => {
       e.preventDefault();
       const newErrors = {};
       if (!title) newErrors.title = 'Title is required';
       if (!status) newErrors.status = 'Status is required';
       if (!priority) newErrors.priority = 'Priority is required';
       if (Object.keys(newErrors).length > 0) {
         setErrors(newErrors);
         return;
       }
       onAdd({ title, status, priority });
       setTitle('');
       setStatus('pending');
       setPriority('low');
       setErrors({});
     };

     return (
       <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6 grid gap-4 md:grid-cols-2">
         <div>
           <label className="block text-gray-700 dark:text-gray-300">Task Title</label>
           <input
             type="text"
             value={title}
             onChange={(e) => setTitle(e.target.value)}
             className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
             placeholder="Enter task title"
           />
           {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
         </div>
         <div>
           <label className="block text-gray-700 dark:text-gray-300">Status</label>
           <select
             value={status}
             onChange={(e) => setStatus(e.target.value)}
             className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
           >
             <option value="pending">Pending</option>
             <option value="in-progress">In Progress</option>
             <option value="completed">Completed</option>
           </select>
           {errors.status && <p className="text-red-500 text-sm">{errors.status}</p>}
         </div>
         <div>
           <label className="block text-gray-700 dark:text-gray-300">Priority</label>
           <select
             value={priority}
             onChange={(e) => setPriority(e.target.value)}
             className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
           >
             <option value="low">Low</option>
             <option value="medium">Medium</option>
             <option value="high">High</option>
           </select>
           {errors.priority && <p className="text-red-500 text-sm">{errors.priority}</p>}
         </div>
         <div className="md:col-span-2">
           <Button type="submit" variant="primary">Add Task</Button>
         </div>
       </form>
     );
   }

   export default TaskForm;