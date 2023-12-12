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


const DashboardLayout = () => {
  
  return (
    <div className="flex lg:flex-row flex-row  items-stretch justify-between">
      <Sidenav />
      <div className="w-full lg:w-full bg-white overflow-hidden  xl:px-3">
        <Outlet/>
      </div>
    </div>
  );
};

export default DashboardLayout;
