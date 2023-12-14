import MasterDataCatComponent from "../../MasterDataComponent/MasterDataCatComponent";
import SideNavComponent from "../../components/SideNavComponent/SideNavComponent";
import TopBar from "../../components/TopBar";
import RMBlackSquare from "../../components/RafflesManagement/RMBlackSquare";

function MasterDataCategory() {
  return (

      <>
        <RMBlackSquare />
        <div className="xl:p-5 p-1">
          <TopBar />
        </div>
        <div>
          <h1 className="xl:text-2xl text-md font-normal  px-8 xl:pt-10 pt-20 max-md:pt-20">
            Master Data Management Category
          </h1>
        </div>
        <div className="">
          <MasterDataCatComponent />
        </div>
      </>
  );
}

export default MasterDataCategory;
