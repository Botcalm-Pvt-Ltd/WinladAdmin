import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import UserPermisson from "./pages/UserPermison/UserPermisson";
import UserPermisson2 from "./pages/UserPermison/UserPermisson2";
import UserPermisson3 from "./pages/UserPermison/UserPermisson3";
import Settings from './pages/Settings/Settings';
import RafflesManagement from './components/RafflesManagement/RafflesManagement';
import FAQ from './components/FAQ/FAQ';
import UserManagement from './components/UserManagementComponent/UserManagementComponent';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
          <Route path='/' element={<AdminDashboard />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/RafflesManagement' element={<RafflesManagement />} />
          <Route path='/FAQ' element={<FAQ />} />
          <Route path='/UserManagement' element={<UserManagement />} />
          <Route path='/user-permisson-role-1' element={<UserPermisson />} />
          <Route path='/user-permisson-role-2' element={<UserPermisson2 />} />
          <Route path='/user-permisson-role-3' element={<UserPermisson3 />} />  
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
