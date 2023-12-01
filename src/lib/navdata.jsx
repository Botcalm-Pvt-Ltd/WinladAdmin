import HomeIcon from "@mui/icons-material/Home";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import SettingsIcon from "@mui/icons-material/Settings";
import CategoryIcon from "@mui/icons-material/Category";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import BeenhereIcon from "@mui/icons-material/Beenhere";
export const navData = [
  {
    id: 0,
    icon: <HomeIcon />,
    text: "Home",
    link: "/",
  },
  {
    id: 1,
    icon: <SettingsIcon />,
    text: "Settings",
    link: "settings",
  },
  {
    id: 2,
    icon: <PersonAddIcon />,
    text: "Permissons",
    link: "user-permisson-role-1",
  },
  {
    id: 3,
    icon: <PersonOutlineIcon />,
    text: "Management",
    link: "Management",
  },
  {
    id: 4,
    icon: <CreditCardIcon />,
    text: "Giveaway",
    link: "Giveaway",
  },
  {
    id: 5,
    icon: <CategoryIcon />,
    text: "Category",
    link: "settings",
  },
  {
    id: 6,
    icon: <InfoIcon />,
    text: "Details",
    link: "settings",
  },
  {
    id: 7,
    icon: <HelpIcon />,
    text: "FAQ",
    link: "faq",
  },

  {
    id: 8,
    icon: <SubscriptionsIcon />,
    text: "Subscription",
    link: "subscription-management",
  },
  {
    id: 9,
    icon: <TravelExploreIcon />,
    text: "Support",
    link: "master-data-category",
  },
  {
    id: 10,
    icon: <BeenhereIcon />,
    text: "Reports",
    link: "master-data-details",
  },
];
