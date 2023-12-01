import SubscriptionComponent from "../../components/SubscriptionComponent/SubscriptionComponent";
import SideNavComponent from "../../components/SideNavComponent/SideNavComponent";
import TopBar from "../../components/TopBar";
import RMBlackSquare from "../../components/RafflesManagement/RMBlackSquare";

function Subscription() {
  return (

      <>
        <RMBlackSquare />
        <div className="lg:p-5 p-1">
          <TopBar />
        </div>
        <div>
          <h1 className="xl:text-2xl text-md font-semibold  px-10 xl:pt-10 pt-20 max-md:pt-20">
            Subscription Management
          </h1>
        </div>
        <div className="">
          <SubscriptionComponent />
        </div>
      </>

  );
}

export default Subscription;
