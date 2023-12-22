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
import DashboardLayout from "./pages/Layout/DashboardLayout";
import Login from "./pages/login/Login";
import { AuthProvider } from "./utils/AuthContext";

function App() {
  return (
    <>
      <BrowserRouter>
      <AuthProvider>
        <Routes>      
          <Route path="/" element={<DashboardLayout />} >
            <Route path="" element={<AdminDashboard />} />
            <Route path="user-permisson-role-1" element={<UserPermisson />} />
            <Route path="user-management" element={<UserManagement />} />
            <Route path="Management" element={<RafflesManagement />} />
            {/* <Route path="addRiffles" element={<AddRiffles />} /> */}
            <Route path="master-data-category" element={<MasterDataCategory />}/>
            <Route path="master-data-details" element={<MasterDataDetails />} />
            <Route path="subscription-management" element={<Subscription />} />
            <Route path="FAQ" element={<FAQ />} />
            {/* <Route path="AddFAQ" element={<AddFAQ />} /> */}
            <Route path='settings' element={<Settings />} />
          </Route>
         
          <Route path='login' element={<Login />} />
        </Routes>
        </AuthProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
