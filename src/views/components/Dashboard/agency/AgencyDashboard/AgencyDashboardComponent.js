import React from "react";
import { Route, Routes } from "react-router-dom";
import { MdDashboard, MdFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg"; 
import { FaChessQueen } from "react-icons/fa"; 
import { RiQuestionnaireLine } from "react-icons/ri";
import HeaderComponent from "../../Layout/Header/HeaderComponent";
import SidebarComponent from "../../Layout/Sidebar/SidebarComponent";
import "./AgencyDashboard.css";
import AgencyDashboardHomeComponent from "../AgencyDashboardHome/AgencyDashboardHomeComponent";
import ContributeTextComponent from "../../contribute/ContributeText/ContributeTextComponent";
import ContributeTextCaseComponent from "../../contribute/ContributeTextCase/ContributeTextCaseComponent";
import ContributeTextSubAreaComponent from "../../contribute/ContributeSubArea/ContributeTextSubAreaComponent";
import MyContributionComponent from "../../contribute/MyContribution/MyContributionComponent";
import MyCSubAreaInfoComponent from "../../contribute/MyContribution/MyCSubAreaComponent/MyCSubAreaInfoComponent";
import TrashMainComponent from "../../contribute/TrashComponent/TrashMainComponent";
import { IoMdTrash } from "react-icons/io";

// links object
const AgencyDashboardLinks = [
  {
    to: "/dashboard",
    icon: <MdDashboard size={24} />,
    text: "Dashboard",
  },
  {
    to: "/dashboard/temp",
    icon: <MdFavoriteBorder size={24} />,
    text: "Saved Insights",
  },
  {
    to: "/dashboard/temp",
    icon: <RiQuestionnaireLine size={24} />,
    text: "My Questions",
  },
  {
    to: "/dashboard/my-contribution",
    icon: <MdDashboard size={24} />,
    text: "My Contribution",
  },
  {
    to: "/dashboard/temp",
    icon: <FaChessQueen size={24} />,
    text: "Membership",
  },
  {
    to: "/dashboard/temp",
    icon: <CgProfile size={24} />,
    text: "Profile",
   }
  // {
  //   to: "/dashboard/trash",
  //   icon: <IoMdTrash size={24} />,
  //   text: "Trash",
  // }
];

const AgencyDashboardComponent = () => {
  return (
    <div className="d-flex bg-lm">
      <SidebarComponent sidebarLinks={AgencyDashboardLinks} />
      <div className="dashboard-header-content-container flex-grow-1">
        <HeaderComponent
          sidebarLinks={AgencyDashboardLinks}
          subtitle="Manage your systems from here"
        />
        {/* content */}
        <Routes>
          <Route index element={<AgencyDashboardHomeComponent />} />
          <Route
            path="my-contribution/*"
            element={<MyContributionComponent />}
          />
          {/* <Route
                path="trash"
                element={<TrashMainComponent />}
              /> */}
          <Route path="contribute-text-upload" element={<ContributeTextComponent />} />
          <Route path="contribute-text-upload-case-law" element={<ContributeTextCaseComponent />} />
          <Route path="contribute-text-upload-sub-area" element={<ContributeTextSubAreaComponent />} />
          <Route path="contribute-text-update-sub-area/:id" element={<MyCSubAreaInfoComponent />} />
        </Routes>
      </div>
    </div>
  );
};

export default AgencyDashboardComponent;
