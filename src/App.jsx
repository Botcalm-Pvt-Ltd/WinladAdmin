import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import UserPermisson from "./pages/UserPermison/UserPermisson";
// import UserPermisson2 from "./pages/UserPermison/UserPermisson2";
// import UserPermisson3 from "./pages/UserPermison/UserPermisson3";
import UserManagement from "./pages/UserManagement/UserManagement";
import MasterDataCategory from "./pages/MasterData/MasterDataCategory";
import MasterDataDetails from "./pages/MasterData/MasterDataDetails";
import Subscription from "./pages/Subscription/Subscription";
import Settings from './pages/Settings/Settings';
import DashboardLayout from "./pages/Layout/DashboardLayout";
import Login from "./pages/login/Login";
import { AuthProvider } from "./utils/AuthContext";
import GiveawayManagement from "./pages/GiveawayManagement/GiveawayManagement";
import FAQ from "./pages/FAQ/FAQ.jsx";

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
            <Route path="Management" element={<GiveawayManagement />} />
            <Route path="master-data-category" element={<MasterDataCategory />}/>
            <Route path="master-data-details" element={<MasterDataDetails />} />
            <Route path="subscription-management" element={<Subscription />} />
            <Route path="FAQ" element={<FAQ/>} />
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
