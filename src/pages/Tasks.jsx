import React, { useState, useEffect } from 'react';
     import { fetchTasks, addTask, updateTask, deleteTask, fetchUsers } from '../api/api';
     import TaskForm from '../components/TaskForm';
     import TaskCard from '../components/TaskCard';
     import Button from '../components/Button';
     import Card from '../components/Card';
     import { useLocalStorage } from '../hooks/useLocalStorage';

     function Tasks() {
       const [tasks, setTasks] = useState([]);
       const [users, setUsers] = useState([]);
       const [error, setError] = useState('');
       const [loading, setLoading] = useState(false);
       const [filter, setFilter] = useLocalStorage('taskFilter', 'all');
       const [page, setPage] = useState(1);
       const [total, setTotal] = useState(0);
       const [search, setSearch] = useState('');
       const limit = 6;

       useEffect(() => {
         loadTasks();
         loadUsers();
       }, [page, search, filter]);

       const loadTasks = async () => {
         setLoading(true);
         try {
           const { tasks: fetchedTasks, total: fetchedTotal } = await fetchTasks(page, limit, search);
           const filteredTasks = filter === 'all'
             ? fetchedTasks
             : fetchedTasks.filter(task => task.status === filter);
           setTasks(filteredTasks);
           setTotal(fetchedTotal);
           setError('');
         } catch (error) {
           setError('Failed to fetch tasks');
         } finally {
           setLoading(false);
         }
       };

       const loadUsers = async () => {
         try {
           const data = await fetchUsers();
           setUsers(data);
         } catch (error) {
           setError('Failed to fetch users');
         }
       };

       const addTaskHandler = async (newTask) => {
         try {
           await addTask(newTask);
           loadTasks();
         } catch (error) {
           setError('Failed to add task');
         }
       };

       const updateTaskHandler = async (id, status) => {
         try {
           await updateTask(id, { status });
           loadTasks();
         } catch (error) {
           setError('Failed to update task');
         }
       };

       const deleteTaskHandler = async (id) => {
         try {
           await deleteTask(id);
           loadTasks();
         } catch (error) {
           setError('Failed to delete task');
         }
       };

       const handleSearch = (e) => {
         setSearch(e.target.value);
         setPage(1);
       };

       return (
         <Card className="space-y-4">
           <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
             Task Manager
           </h2>
           {error && <p className="text-red-500">{error}</p>}
           {loading && <p className="text-gray-600 dark:text-gray-400">Loading...</p>}
           <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
             <input
               type="text"
               value={search}
               onChange={handleSearch}
               placeholder="Search tasks..."
               className="p-2 border rounded dark:bg-gray-700 dark:text-white mb-2 md:mb-0"
             />
             <div className="flex space-x-2">
               <Button onClick={() => setFilter('all')} variant={filter === 'all' ? 'primary' : 'secondary'}>
                 All
               </Button>
               <Button onClick={() => setFilter('pending')} variant={filter === 'pending' ? 'primary' : 'secondary'}>
                 Pending
               </Button>
               <Button onClick={() => setFilter('completed')} variant={filter === 'completed' ? 'primary' : 'secondary'}>
                 Completed
               </Button>
             </div>
           </div>
           <TaskForm onAdd={addTaskHandler} />
           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
             {tasks.map(task => (
               <TaskCard
                 key={task._id}
                 task={task}
                 onUpdate={updateTaskHandler}
                 onDelete={deleteTaskHandler}
               />
             ))}
           </div>
           <div className="flex justify-between mt-4">
             <Button
               onClick={() => setPage(prev => Math.max(prev - 1, 1))}
               disabled={page === 1}
               variant="secondary"
             >
               Previous
             </Button>
             <span className="text-gray-600 dark:text-gray-400">
               Page {page} of {Math.ceil(total / limit)}
             </span>
             <Button
               onClick={() => setPage(prev => prev + 1)}
               disabled={page >= Math.ceil(total / limit)}
               variant="secondary"
             >
               Next
             </Button>
           </div>
           <div className="mt-4">
             <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Users</h3>
             <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
               {users.map(user => (
                 <li key={user.id}>{user.name} ({user.email})</li>
               ))}
             </ul>
           </div>
         </Card>
       );
     }

     export default Tasks;