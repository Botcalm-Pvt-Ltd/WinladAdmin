import React from 'react'
import TopBar from '../../components/TopBar'
import { Outlet } from 'react-router-dom';
import Sidenav from '../../components/SideNavComponent/Sidenav';
import RMBlackSquare from '../../components/RafflesManagement/RMBlackSquare';


const DashboardLayout = () => {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="flex lg:flex-row flex-row  items-stretch justify-between bg-[#F2F5FB]">
      <Sidenav />
      <div className="w-full overflow-hidden relative pb-10">

        <RMBlackSquare />
        <div className="xl:p-5 p-1">
          <TopBar />
        </div>

        <Outlet />
        <footer className="bg-zinc-700 w-full text-white p-1 text-center absolute bottom-0 left-0">
          © Copyright {currentYear}
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
