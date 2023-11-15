import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'
import UserPermisson from "./pages/UserPermison/UserPermisson";
import UserPermisson2 from "./pages/UserPermison/UserPermisson2";
import UserPermisson3 from "./pages/UserPermison/UserPermisson3";
import UserManagement from './pages/UserManagement/UserManagement'; 

import RafflesManagement from './components/RafflesManagement/RafflesManagement';
import AddRiffles from './components/RafflesManagement/AddRaffles'

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/user-permisson-role-1" element={<UserPermisson />} />
          <Route path="/user-permisson-role-2" element={<UserPermisson2 />} />
          <Route path="/user-permisson-role-3" element={<UserPermisson3 />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/RafflesManagement" element={<RafflesManagement />} />
          <Route path="/addRiffles" element={<AddRiffles />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
