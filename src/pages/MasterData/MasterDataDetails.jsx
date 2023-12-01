import MasterDataDetailsComponent from "../../MasterDataComponent/MasterDataDetailsComponent";
import SideNavComponent from "../../components/SideNavComponent/SideNavComponent";
import Sidenav from "../../components/SideNavComponent/Sidenav";
import TopBar from "../../components/TopBar";
import RMBlackSquare from "../../components/RafflesManagement/RMBlackSquare";

function MasterDataDetails() {
  return (
      <>
        <RMBlackSquare />
        <div className="lg:p-5 p-1">
          <TopBar />
        </div>
        <div>
          <h1 className="xl:text-2xl text-md font-semibold  px-10 xl:pt-10 pt-20 max-md:pt-20">
            Master Data Management Details
          </h1>
        </div>
        <div className="">
          <MasterDataDetailsComponent />
        </div>
      </>
  
  );
}

export default MasterDataDetails;
