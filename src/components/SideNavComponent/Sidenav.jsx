import styles from "./sidenav.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { navData } from "../../lib/navdata";
import { useEffect, useState } from "react";
import Logohome from "../../assets/SideNav/main_logo.png";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useAuth } from "../../utils/AuthContext";

export default function Sidenav() {
  const [open, setopen] = useState(true);
  const {logout} = useAuth();
  const navigate = useNavigate();
  const [selectedNav, setSelectedNav] = useState(0);
  // State to manage visibility of each submenu
  const [subMenuVisibility, setSubMenuVisibility] = useState({});
  const toggleOpen = () => {
    setopen(!open);
  };

  const toggleSubMenu = (itemId) => {
    setSubMenuVisibility((prevVisibility) => ({
      ...prevVisibility,
      [itemId]: !prevVisibility[itemId],
    }));
  };
  const handleLogout = ()=>{
    logout();
    
  }

  // useEffect to reset submenu visibility when sidebar is closed
  useEffect(() => {
    if (!open) {
      setSubMenuVisibility({});
    }
  }, [open]);
  return (
    <div className={open ? styles.sidenav : styles.sidenavClosed}>
      <button className={styles.menuBtn} onClick={toggleOpen}>
        {open ? (
          <KeyboardDoubleArrowLeftIcon />
        ) : (
          <KeyboardDoubleArrowRightIcon />
        )}
      </button>
      <div className="side-nav-contain gap-5 py-0 px-[15px] items-center">
        <div className={`${open ? "" : "w-full"}`}>
          <img src={Logohome} alt="protect" className="mx-auto" />
        </div>
        <span className={`${open ? "" : "hidden"}`}>
          <p className="font-bold  text-white">Winlands</p>
        </span>
      </div>
      {navData.map((item) => {
        if (item.subnav) {
          return (
            <div key={item.id}>
              <NavLink className={styles.sideitem} onClick={() => toggleSubMenu(item.id)}>{item.icon}
                <span className={styles.linkText}>{item.text}</span>
                <div className="ml-auto">
                  {open &&<FaChevronDown  className={`transform transition-[500]  ${subMenuVisibility[item.id] ? 'rotate-180' : 'rotate-0'} `}/>}
                </div>
              </NavLink>
              {subMenuVisibility[item.id] && item.subnav.map((sub) => (
                <NavLink key={sub.id} to={sub.link} className={`${styles.subitem} ${selectedNav === sub.id ? 'bg-gray-600' : ''} `} onClick={()=>setSelectedNav(sub.id)}>
                  {sub.icon}
                  <span className={styles.linkText}>{sub.text}</span>
                </NavLink>
              ))}
           </div>
          );
        } else {
          return (
            <NavLink key={item.id} className={`${styles.sideitem} ${selectedNav === item.id ? 'bg-gray-400' : ''}`} to={item.link} onClick={()=>setSelectedNav(item.id)}>
              {item.icon}
              <span className={styles.linkText}>{item.text}</span>
            </NavLink>
          );
        }
      })}

      <NavLink className={`${styles.sideitem} mt-10`} onClick={handleLogout}>
        <LogoutOutlinedIcon />
        <span className={styles.linkText}>Sign Out</span>
      </NavLink>
    </div>
  );
}
