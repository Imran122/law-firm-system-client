import React from "react";
import { Route, Routes } from "react-router-dom";
import { MdDashboard, MdFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg"; 
import { RiQuestionnaireLine } from "react-icons/ri";
import HeaderComponent from "../../Layout/Header/HeaderComponent";
import SidebarComponent from "../../Layout/Sidebar/SidebarComponent";
import "./EditorDashboard.css";
import EditorDashboardHomeComponent from "../EditorDashboardHome/EditorDashboardHomeComponent";
import ContributeTextComponent from "../../contribute/ContributeText/ContributeTextComponent";
import ContributeTextCaseComponent from "../../contribute/ContributeTextCase/ContributeTextCaseComponent";
import ContributeTextSubAreaComponent from "../../contribute/ContributeSubArea/ContributeTextSubAreaComponent";
import MyContributionComponent from "../../contribute/MyContribution/MyContributionComponent";
import MyCSubAreaInfoComponent from "../../contribute/MyContribution/MyCSubAreaComponent/MyCSubAreaInfoComponent";
import TrashMainComponent from "../../contribute/TrashComponent/TrashMainComponent";
import { IoMdTrash } from "react-icons/io";


// links object
const EditorDashboardLinks = [
  {
    to: "/dashboard",
    icon: <MdDashboard size={24} />,
    text: "Dashboard",
  },
  {
    to: "/dashboard/temp",
    icon: <MdFavoriteBorder size={24} />,
    text: "Saved Books",
  },
  {
    to: "/dashboard/my-contribution",
    icon: <MdDashboard size={24} />,
    text: "My Contribution",
  },
  {
    to: "/dashboard/temp",
    icon: <RiQuestionnaireLine size={24} />,
    text: "My Questions",
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

const EditorDashboardComponent = () => {
  return (
    <div className="d-flex bg-lm">
      <SidebarComponent sidebarLinks={EditorDashboardLinks} />
      <div className="dashboard-header-content-container flex-grow-1">
        <HeaderComponent
          sidebarLinks={EditorDashboardLinks}
          subtitle="Manage your systems from here"
        />
        {/* content */}
        <Routes>
          <Route index element={<EditorDashboardHomeComponent />} />
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

export default EditorDashboardComponent;
