import { useState } from "react";
import "./SideNavComponent.css";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";
import Home from "../../assets/SideNav/Home.png";
import Settings from "../../assets/SideNav/Settings.png";
import UserManagement from "../../assets/SideNav/UserManagement.png";
import RafflesMange from "../../assets/SideNav/RafflesMange.png";
import MasterData from "../../assets/SideNav/MasterData.png";
import FAQ from "../../assets/SideNav/FAQ.png";
import Subscription from "../../assets/SideNav/Subscription.png";
import Support from "../../assets/SideNav/Support.png";
import Reports from "../../assets/SideNav/Reports.png";
import Logohome from "../../assets/SideNav/Logo-home.png";

const SideNavComponent = ({ screen }) => {
  const [expanded, setExpanded] = useState(false);

  const expandSidebar = () => {
    setExpanded((pre) => true);
  };

  const notExpandSidebar = () => {
    setExpanded((pre) => false);
  };

  return (
    <OutsideClickHandler onOutsideClick={notExpandSidebar}>
      <div
        className={`pt-20  min-h-screen h-full  pr-4 gap-4 bg-[#D6F6FF]  px-2 ${
          expanded ? "" : "side-nav-half"
        } `}
      >
        {/* <div
            onClick={expandSidebar}
            className="flex flex-row items-center mb-10 "
          ></div> */}
        <div onClick={expandSidebar} className="logo-container">
          <div className="side-nav-contain gap-5 py-0">
            <div className="">
              <img src={Logohome} alt="protect" />
            </div>
            <span className="">
              <p className="link-no-underlin font-bold invisible xl:visible text-black">
                Winlands
              </p>
            </span>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <div onClick={expandSidebar}>
          <Link to="/">
            {/* <button className="side-nav-contain">
                <img src={Home} alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin  invisible xl:visible text-black">
                    Settings
                  </p>
                </span>
              </button> */}
            <div className="flex flex-row items-center gap-3 side-nav-contain">
              <img src={Home} alt="protect" />
              <span className="mobile-hide">
                <p className="link-no-underlin font-bold invisible xl:visible text-black">
                  Home
                </p>
              </span>
            </div>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/settings">
              {/* <button className="side-nav-contain">
                  <img src={Settings} alt="protect" />
                  <span className="mobile-hide">
                    <p className="link-no-underlin  invisible xl:visible text-black">
                      Master Data
                    </p>
                  </span>
                </button> */}
              <div className="flex flex-row items-center gap-3 side-nav-contain">
                <img src={Settings} alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin font-bold invisible xl:visible text-black">
                    Settings
                  </p>
                </span>
              </div>
            </Link>
          </div>
          <div onClick={expandSidebar}>
            <Link to="/user-permisson-role-1">
              {/* <button className="side-nav-contain">
                  <img src={UserManagement} alt="protect" />
                  <span className="mobile-hide">
                    <p className="link-no-underlin  invisible xl:visible text-black">
                      FAQ
                    </p>
                  </span>
                </button> */}

              <div className="flex flex-row items-center gap-3 side-nav-contain">
                <img src={UserManagement} alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin font-bold invisible xl:visible text-black">
                    User Permisson
                  </p>
                </span>
              </div>
            </Link>
          </div>
          <div onClick={expandSidebar}>
            <Link to="/user-management">
              <button className="side-nav-contain gap-3">
                <img src={UserManagement} alt="protect" />
                <span className="mobile-hide">
                  <p className="font-bold invisible xl:visible text-black text-start">
                    User Management
                  </p>
                </span>
              </button>
              {/* <div className="flex flex-row items-center gap-2 side-nav-contain2">
                  <img src={UserManagement} alt="protect" />
                  <div className="mobile-hide">
                    <p className="text-sm font-semibold invincible xl:block">User Management</p>
                  </div>
                </div> */}
            </Link>
          </div>
          <div onClick={expandSidebar}>
            <Link to="/RafflesManagement">
              {/* <button className="side-nav-contain">
                  <img src={RafflesMange} alt="protect" />
                  <span className="mobile-hide">
                    <p className="link-no-underlin  invisible xl:visible text-black">
                      Support
                    </p>
                  </span>
                </button>
              </Link>
            </div>
            <div onClick={expandSidebar}>
              <Link to="/reports">
                <button className="side-nav-contain">
                  <img src={Reports} alt="protect" />
                  <span className="mobile-hide">
                    <p className="link-no-underlin  invisible xl:visible text-black">
                      Reports
                    </p>
                  </span>
                </button> */}
              <div className="flex flex-row items-center gap-5 side-nav-contain">
                <img src={RafflesMange} alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin font-bold invisible xl:visible text-black">
                    Raffles Manage
                  </p>
                </span>
              </div>
            </Link>
            <div onClick={expandSidebar}>
              <Link to="/master-data-category">
                {/* <button className="side-nav-contain">
                    <img src={MasterData} alt="protect" />
                    <span className="mobile-hide">
                      <p className="link-no-underlin font-bold invisible xl:visible text-black">
                        Master Data Category
                      </p>
                    </span>
                  </button> */}
                <div className="flex flex-row items-center gap-5 side-nav-contain">
                  <img src={MasterData} alt="protect" />
                  <span className="mobile-hide">
                    <p className="link-no-underlin font-bold invisible xl:visible text-black">
                      Master Data Category
                    </p>
                  </span>
                </div>
              </Link>
            </div>

            <div onClick={expandSidebar}>
              <Link to="/master-data-details">
                {/* <button className="side-nav-contain">
                    <img src={MasterData} alt="protect" />
                    <span className="mobile-hide">
                      <p className="link-no-underlin font-bold invisible xl:visible text-black">
                        Master Data Details
                      </p>
                    </span>
                  </button> */}

                <div className="flex flex-row items-center gap-5 side-nav-contain">
                  <img src={MasterData} alt="protect" />
                  <span className="mobile-hide">
                    <p className="link-no-underlin font-bold invisible xl:visible text-black">
                      Master Data Details
                    </p>
                  </span>
                </div>
              </Link>
            </div>
            <div onClick={expandSidebar}>
              <Link to="/faq">
                {/* <button className="side-nav-contain">
                    <img src={FAQ} alt="protect" />
                    <span className="mobile-hide">
                      <p className="link-no-underlin font-bold invisible xl:visible text-black">
                        FAQ
                      </p>
                    </span>
                  </button> */}
                <div className="flex flex-row items-center gap-5 side-nav-contain">
                  <img src={FAQ} alt="protect" />
                  <span className="mobile-hide">
                    <p className="link-no-underlin font-bold invisible xl:visible text-black">
                      FAQ
                    </p>
                  </span>
                </div>
              </Link>
            </div>
            <div onClick={expandSidebar}>
              <Link to="/subscription-management">
                {/* <button className="side-nav-contain">
                    <img src={Subscription} alt="protect" />
                    <span className="mobile-hide">
                      <p className="link-no-underlin font-bold invisible xl:visible text-black">
                        Subscription
                      </p>
                    </span>
                  </button> */}
                <div className="flex flex-row items-center gap-5 side-nav-contain">
                  <img src={Subscription} alt="protect" />
                  <span className="mobile-hide">
                    <p className="link-no-underlin font-bold invisible xl:visible text-black">
                      Subscription
                    </p>
                  </span>
                </div>
              </Link>
            </div>
            <div onClick={expandSidebar}>
              <Link to="/">
                {/* <button className="side-nav-contain">
                    <img src={Support} alt="protect" />
                    <span className="mobile-hide">
                      <p className="link-no-underlin font-bold invisible xl:visible text-black">
                        Support
                      </p>
                    </span>
                  </button> */}
                <div className="flex flex-row items-center gap-5 side-nav-contain">
                  <img src={Support} alt="protect" />
                  <span className="mobile-hide">
                    <p className="link-no-underlin font-bold invisible xl:visible text-black">
                      Support
                    </p>
                  </span>
                </div>
              </Link>
            </div>
            <div onClick={expandSidebar}>
              <Link to="/">
                {/* <button className="side-nav-contain">
                    <img src={Reports} alt="protect" />
                    <span className="mobile-hide">
                      <p className="link-no-underlin font-bold invisible xl:visible text-black">
                        Reports
                      </p>
                    </span>
                  </button> */}
                <div className="flex flex-row items-center gap-5 side-nav-contain">
                  <img src={Reports} alt="protect" />
                  <span className="mobile-hide">
                    <p className="link-no-underlin font-bold invisible xl:visible text-black">
                      Reports
                    </p>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default SideNavComponent;
