import React from "react";
import { Route, Routes } from "react-router-dom";
import { IoMdContract, IoMdTrash } from "react-icons/io";
import { GiWhiteBook, GiClawHammer } from "react-icons/gi";
import { MdDashboard, MdArticle, MdInsights } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { FiPackage } from "react-icons/fi";
import HeaderComponent from "../../Layout/Header/HeaderComponent";
import SidebarComponent from "../../Layout/Sidebar/SidebarComponent";
import "./SuperAdminDashboard.css";
import SuperAdminDashboardHomeComponent from "../SuperAdminDashboardHome/SuperAdminDashboardHomeComponent";
import AdminAddComponent from "../AdminAddComponent/AdminAddComponent";
import ContributeTextComponent from "../../contribute/ContributeText/ContributeTextComponent";
import ContributeTextCaseComponent from "../../contribute/ContributeTextCase/ContributeTextCaseComponent";
import ContributeTextSubAreaComponent from "../../contribute/ContributeSubArea/ContributeTextSubAreaComponent";
import SuperAdminUsersComponent from "../SuperAdminUsersComponent/SuperAdminUsersComponent";
import SuperAdminPackagesComponent from "../SuperAdminPackages/SuperAdminPackagesComponent";
import SuperAdminAddPackageComponent from "../SuperAdminPackages/SuperAdminAddPackage/SuperAdminAddPackageComponent";
import SuperAdminEditPackageComponent from "../SuperAdminPackages/SuperAdminEditPackage/SuperAdminEditPackageComponent";
import SuperAdminCustomPackageComponent from "../SuperAdminCustomPackageComponent/SuperAdminCustomPackageComponent";
import SuperAdminNewContributionComponent from "../SuperAdminNewContributionComponent/SuperAdminNewContributionComponent";
import SuperAdminAllArticlesComponent from "../SuperAdminAllArticlesComponent/SuperAdminAllArticlesComponent";
import SuperAdminAllBooksComponent from "../SuperAdminAllBooksComponent/SuperAdminAllBooksComponent";
import SuperAdminAllInsightsComponent from "../SuperAdminAllInsightsComponent/SuperAdminAllInsightsComponent";
import SuperAdminAllCaseLawComponent from "../SuperAdminAllCaseLawComponent/SuperAdminAllCaseLawComponent";
import SuperAdminAllLawsComponent from "../SuperAdminAllLawsComponent/SuperAdminAllLawsComponent";
import SuperAdminAllSubAreaComponent from "../SuperAdminAllSubAreaComponent/SuperAdminAllSubAreaComponent";
import MyContributionComponent from "../../contribute/MyContribution/MyContributionComponent";
import MyCSubAreaInfoComponent from "../../contribute/MyContribution/MyCSubAreaComponent/MyCSubAreaInfoComponent";
import TrashMainComponent from "../../contribute/TrashComponent/TrashMainComponent";
// links object
const SuperAdminDashboardLinks = [
  {
    to: "/dashboard",
    icon: <MdDashboard size={24} />,
    text: "Dashboard",
  },
  {
    to: "/dashboard/new-contributions",
    icon: <IoMdContract size={24} />,
    text: "New Contributions",
  },
  {
    to: "/dashboard/all-articles",
    icon: <MdArticle size={24} />,
    text: "All Articles",
  },
  {
    to: "/dashboard/all-books",
    icon: <GiWhiteBook size={24} />,
    text: "All Books",
  },
  {
    to: "/dashboard/all-insights",
    icon: <MdInsights size={24} />,
    text: "All Insights",
  },
  {
    to: "/dashboard/all-case-law",
    icon: <GiClawHammer size={24} />,
    text: "All CaseLaw",
  },
  {
    to: "/dashboard/all-laws",
    icon: <GiWhiteBook size={24} />,
    text: "All Laws",
  },
  {
    to: "/dashboard/all-subarea",
    icon: <GiWhiteBook size={24} />,
    text: "All Sub Area",
  },
  {
    to: "/dashboard/super-admin-package-list",
    icon: <FiPackage size={24} />,
    text: "Package Lists",
  },
  {
    to: "/dashboard/custom-package",
    icon: <FiPackage size={24} />,
    text: "Custom Package",
  }
  ,
  {
    to: "/dashboard/trash",
    icon: <IoMdTrash size={24} />,
    text: "Trash",
  },
  {
    to: "/dashboard/users",
    icon: <HiUserGroup size={24} />,
    text: "Users",
  },
  {
    to: "/dashboard/temp",
    icon: <BiLogOut size={24} />,
    text: "Log Out",
  },
];

const SuperAdminDashboardComponent = () => {
  return (

        <div className="d-flex bg-lm">
          <SidebarComponent sidebarLinks={SuperAdminDashboardLinks} />
          <div className="dashboard-header-content-container flex-grow-1">
            <HeaderComponent
              sidebarLinks={SuperAdminDashboardLinks}
              subtitle="Manage your systems from here"
            />
            {/* content */}
            <Routes>
              <Route index element={<SuperAdminDashboardHomeComponent />} />
              <Route path="add-admin" element={<AdminAddComponent />} />
              <Route path="new-contributions" element={<SuperAdminNewContributionComponent/>}/>
              <Route path="all-articles/*" element={<SuperAdminAllArticlesComponent/>}/>
              <Route path="all-books/*" element={<SuperAdminAllBooksComponent/>}/>
              <Route path="all-insights/*" element={<SuperAdminAllInsightsComponent/>}/>
              <Route path="all-case-law/*" element={<SuperAdminAllCaseLawComponent/>}/>
              <Route path="all-laws/*" element={<SuperAdminAllLawsComponent/>}/>
              <Route path="all-subarea/*" element={<SuperAdminAllSubAreaComponent/>}/>
              <Route path="contribute-text-upload" element={<ContributeTextComponent />} />
              <Route path="contribute-text-upload-case-law" element={<ContributeTextCaseComponent />} />
              <Route path="contribute-text-upload-sub-area" element={<ContributeTextSubAreaComponent />} />
              <Route path="contribute-text-update-sub-area/:id" element={<MyCSubAreaInfoComponent />} />
              {/* <Route
                path="my-contribution/*"
                element={<MyContributionComponent />}
              /> */}
              <Route
                path="trash"
                element={<TrashMainComponent />}
              />
              
              <Route path="users/*" element={<SuperAdminUsersComponent />} />
              <Route path="super-admin-package-list/*" element={<SuperAdminPackagesComponent />} />
              <Route path="super-admin-add-package/*" element={<SuperAdminAddPackageComponent />} />
              <Route path="super-admin-edit-package/:id" element={<SuperAdminEditPackageComponent />} />
              <Route path="custom-package/*" element={<SuperAdminCustomPackageComponent />} />
            </Routes>
          </div>
        </div>

  );
};

export default SuperAdminDashboardComponent;
