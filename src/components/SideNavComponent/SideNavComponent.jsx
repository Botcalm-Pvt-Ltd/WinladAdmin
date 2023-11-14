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
          className={`pt-20  h-${screen} pr-2 rounded-r-xl space-y-4 bg-[#D6F6FF]  px-5 ${
            expanded ? "" : "side-nav-half"
          } w-12 xl:w-full    `}
        >
          <div
            onClick={expandSidebar}
            className="flex flex-row items-center mb-10 "
          ></div>

          <Link to="/profile">
            <div>
              <img src={Logohome} alt="user" />
            </div>
          </Link>
          <div className="flex flex-col space-y-4">
            <div onClick={expandSidebar}>
              <button className="side-nav-contain">
                <img src={Home} alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin font-bold invisible xl:visible text-black">
                    Home
                  </p>
                </span>
              </button>
            </div>

            <div onClick={expandSidebar}>
              <Link to="/">
                <button className="side-nav-contain">
                  <img src={Settings} alt="protect" />
                  <span className="mobile-hide">
                    <p className="link-no-underlin font-bold invisible xl:visible text-black">
                      Settings
                    </p>
                  </span>
                </button>
              </Link>
            </div>
            <div onClick={expandSidebar}>
              <Link to="/user-permisson-role-1">
                <button className="side-nav-contain">
                  <img src={UserManagement} alt="protect" />
                  <span className="mobile-hide">
                    <p className="link-no-underlin font-bold invisible xl:visible text-black">
                      UserManagent
                    </p>
                  </span>
                </button>
              </Link>
            </div>

            <div onClick={expandSidebar}>
              <Link to="/">
                <button className="side-nav-contain">
                  <img src={RafflesMange} alt="protect" />
                  <span className="mobile-hide">
                    <p className="link-no-underlin font-bold invisible xl:visible text-black">
                      Raffles Mange
                    </p>
                  </span>
                </button>
              </Link>
              <div onClick={expandSidebar}>
                <Link to="/">
                  <button className="side-nav-contain">
                    <img src={MasterData} alt="protect" />
                    <span className="mobile-hide">
                      <p className="link-no-underlin font-bold invisible xl:visible text-black">
                        Master Data
                      </p>
                    </span>
                  </button>
                </Link>
              </div>
              <div onClick={expandSidebar}>
                <Link to="/">
                  <button className="side-nav-contain">
                    <img src={FAQ} alt="protect" />
                    <span className="mobile-hide">
                      <p className="link-no-underlin font-bold invisible xl:visible text-black">
                        FAQ
                      </p>
                    </span>
                  </button>
                </Link>
              </div>
              <div onClick={expandSidebar}>
                <Link to="/">
                  <button className="side-nav-contain">
                    <img src={Subscription} alt="protect" />
                    <span className="mobile-hide">
                      <p className="link-no-underlin font-bold invisible xl:visible text-black">
                        Subscription
                      </p>
                    </span>
                  </button>
                </Link>
              </div>
              <div onClick={expandSidebar}>
                <Link to="/">
                  <button className="side-nav-contain">
                    <img src={Support} alt="protect" />
                    <span className="mobile-hide">
                      <p className="link-no-underlin font-bold invisible xl:visible text-black">
                        Support
                      </p>
                    </span>
                  </button>
                </Link>
              </div>
              <div onClick={expandSidebar}>
                <Link to="/">
                  <button className="side-nav-contain">
                    <img src={Reports} alt="protect" />
                    <span className="mobile-hide">
                      <p className="link-no-underlin font-bold invisible xl:visible text-black">
                        Reports
                      </p>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    );
};

export default SideNavComponent




