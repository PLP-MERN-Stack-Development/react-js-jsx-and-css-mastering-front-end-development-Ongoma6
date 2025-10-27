import { Routes, Route } from 'react-router-dom';
     import Layout from './components/Layout';
     import Home from './pages/Home';
     import Tasks from './pages/Tasks';

     function App() {
       return (
         <Layout>
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/tasks" element={<Tasks />} />
           </Routes>
         </Layout>
       );
     }

     export default App;