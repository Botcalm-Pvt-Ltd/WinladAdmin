import styles from "./sidenav.module.css";
import { NavLink } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { navData } from "../../lib/navdata";
import { useState } from "react";
import Logohome from "../../assets/SideNav/main_logo.png";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export default function Sidenav() {
  const [open, setopen] = useState(true);
  const toggleOpen = () => {
    setopen(!open);
  };
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
        return (
          <NavLink key={item.id} className={styles.sideitem} to={item.link}>
            {item.icon}
            <span className={styles.linkText}>{item.text}</span>
          </NavLink>
        );
      })}

      <NavLink className={`${styles.sideitem} mt-10`} to="">
        <LogoutOutlinedIcon />
        <span className={styles.linkText}>Sign Out</span>
      </NavLink>
    </div>
  );
}
