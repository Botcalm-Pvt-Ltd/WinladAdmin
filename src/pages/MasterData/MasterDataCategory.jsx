import MasterDataCatComponent from "../../MasterDataComponent/MasterDataCatComponent";
import SideNavComponent from "../../components/SideNavComponent/SideNavComponent";
import TopBar from "../../components/TopBar";
import RMBlackSquare from "../../components/RafflesManagement/RMBlackSquare";

function MasterDataCategory() {
  return (
    <div className="flex lg:flex-row flex-row  items-start justify-between">
      <SideNavComponent />
      <div className="w-full lg:w-full bg-white overflow-hidden">
        <RMBlackSquare />
        <div className="lg:p-5 p-1">
          <TopBar />
        </div>
        <div>
          <h1 className="xl:text-2xl text-md font-semibold  px-10 xl:pt-10 pt-20 max-md:pt-20">
            Master Data Management Category
          </h1>
        </div>
        <div className="">
          <MasterDataCatComponent />
        </div>
      </div>
    </div>
  );
}

export default MasterDataCategory;
