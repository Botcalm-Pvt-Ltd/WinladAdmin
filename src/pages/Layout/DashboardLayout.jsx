import React from 'react'
// import Inputsearch from '../components/Inputsearch'
// import RoundIcon from '../components/roundIcon'
// import UserIcon from '../components/userIcon'
import GreenCard from '../../components/GreenCard'
import { AiFillEdit, AiFillEye, AiOutlineDown } from 'react-icons/ai'
import PieChart from '../../components/Charts/PieChart'
import { PiMagnifyingGlassThin } from 'react-icons/pi';
import BarChart from '../../components/Charts/BarChart'
import Pagination from '../../components/Pagination'
import TableLight from '../../components/Tables/TableLight'
import TopBar from '../../components/TopBar'
import SideNavComponent from '../../components/SideNavComponent/SideNavComponent'
import BackSquare from '../../components/BackgroundBlackSquare/BackSquare'
import ColEightTable from '../../components/Tables/ColEightTable'
import { Outlet } from 'react-router-dom';
import Sidenav from '../../components/SideNavComponent/Sidenav';
import RMBlackSquare from '../../components/RafflesManagement/RMBlackSquare';


const DashboardLayout = () => {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="flex lg:flex-row flex-row  items-stretch justify-between bg-[#F2F5FB]">
      <Sidenav />
      <div className="w-full overflow-hidden relative pb-14">

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
