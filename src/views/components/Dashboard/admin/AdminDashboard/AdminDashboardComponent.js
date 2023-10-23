import React from "react";
import { Route, Routes } from "react-router-dom";
import { GiWhiteBook } from "react-icons/gi";
import { MdDashboard, MdArticle } from "react-icons/md";
import { BiLogOut } from "react-icons/bi"; 
import { HiUserGroup } from "react-icons/hi"; 
import HeaderComponent from "../../Layout/Header/HeaderComponent";
import SidebarComponent from "../../Layout/Sidebar/SidebarComponent";
import AdminDashboardHomeComponent from "../AdminDashboardHome/AdminDashboardHomeComponent";
import AdminAllBooksComponent from "../AdminAllBooks/AdminAllBooksComponent";
import ContributeTextComponent from "../../contribute/ContributeText/ContributeTextComponent";
import ContributeTextCaseComponent from "../../contribute/ContributeTextCase/ContributeTextCaseComponent";
import ContributeTextSubAreaComponent from "../../contribute/ContributeSubArea/ContributeTextSubAreaComponent";

import "./AdminDashboard.css";
import MyContributionComponent from "../../contribute/MyContribution/MyContributionComponent";
import MyCSubAreaInfoComponent from "../../contribute/MyContribution/MyCSubAreaComponent/MyCSubAreaInfoComponent";
import TrashMainComponent from "../../contribute/TrashComponent/TrashMainComponent";
import { IoMdTrash } from "react-icons/io";
// links object
const AdminDashboardLinks = [
  {
    to: "/dashboard",
    icon: <MdDashboard size={24} />,
    text: "Dashboard",
  },
  {
    to: "/dashboard/temp",
    icon: <MdArticle size={24} />,
    text: "All Articles",
  },
  {
    to: "/dashboard/all-books",
    icon: <GiWhiteBook size={24} />,
    text: "All Books",
  },
  {
    to: "/dashboard/my-contribution",
    icon: <MdDashboard size={24} />,
    text: "My Contribution",
  },
  {
    to: "/dashboard/temp",
    icon: <HiUserGroup size={24} />,
    text: "Users",
  },
  // {
  //   to: "/dashboard/trash",
  //   icon: <IoMdTrash size={24} />,
  //   text: "Trash",
  // },
  {
    to: "/dashboard/temp",
    icon: <BiLogOut size={24} />,
    text: "Log Out",
  }
];

const AdminDashboardComponent = () => {
  return (
    <div className="d-flex bg-lm">
      <SidebarComponent sidebarLinks={AdminDashboardLinks} />
      <div className="dashboard-header-content-container flex-grow-1">
        <HeaderComponent
          sidebarLinks={AdminDashboardLinks}
          subtitle="Manage your systems from here"
        />
        {/* content */}
        <Routes>
          <Route index element={<AdminDashboardHomeComponent />} />
          <Route path="all-books/*" element={<AdminAllBooksComponent />} />
          <Route
            path="my-contribution/*"
            element={<MyContributionComponent />}
          />
          {/* <Route
                path="trash"
                element={<TrashMainComponent />}
              /> */}
          <Route path="contribute-text-upload" element={<ContributeTextComponent />} />
          <Route path="contribute-text-upload-sub-area" element={<ContributeTextSubAreaComponent />} />
          <Route path="contribute-text-update-sub-area/:id" element={<MyCSubAreaInfoComponent />} />
          <Route path="contribute-text-upload-case-law" element={<ContributeTextCaseComponent />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboardComponent;
