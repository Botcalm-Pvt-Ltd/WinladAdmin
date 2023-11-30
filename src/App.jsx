import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import UserPermisson from "./pages/UserPermison/UserPermisson";
// import UserPermisson2 from "./pages/UserPermison/UserPermisson2";
// import UserPermisson3 from "./pages/UserPermison/UserPermisson3";
import UserManagement from "./pages/UserManagement/UserManagement";
import RafflesManagement from "./components/RafflesManagement/RafflesManagement";
import AddRiffles from "./components/RafflesManagement/AddRaffles";
import MasterDataCategory from "./pages/MasterData/MasterDataCategory";
import MasterDataDetails from "./pages/MasterData/MasterDataDetails";
import Subscription from "./pages/Subscription/Subscription";
import AddFAQ from "./components/FAQ/AddFAQ";
import FAQ from "./components/FAQ/FAQ";
import Settings from './pages/Settings/Settings';
import RafflesManagement from './components/RafflesManagement/RafflesManagement';
import FAQ from './components/FAQ/FAQ';
import UserManagement from './components/UserManagementComponent/UserManagementComponent';

function App() {
  return (
    <>
<<<<<<< HEAD
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
=======
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/user-permisson-role-1" element={<UserPermisson />} />
          {/* <Route path="/user-permisson-role-2" element={<UserPermisson2 />} />
          <Route path="/user-permisson-role-3" element={<UserPermisson3 />} /> */}
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/RafflesManagement" element={<RafflesManagement />} />
          <Route path="/addRiffles" element={<AddRiffles />} />
          <Route
            path="/master-data-category"
            element={<MasterDataCategory />}
          />
          <Route path="/master-data-details" element={<MasterDataDetails />} />
          <Route path="/subscription-management" element={<Subscription />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/AddFAQ" element={<AddFAQ />} />
            <Route path='/settings' element={<Settings />} />
        </Routes>
      </BrowserRouter> 
>>>>>>> 3ba71e07be6f4a9c15b8a9703ce6e20c8beba727
    
    </>
  );
}

export default App;
