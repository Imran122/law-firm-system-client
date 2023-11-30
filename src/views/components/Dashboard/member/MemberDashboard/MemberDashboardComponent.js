import React from "react";
import { Route, Routes } from "react-router-dom";
import { MdDashboard, MdFavoriteBorder, MdPayments } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaChessQueen } from "react-icons/fa";
import HeaderComponent from "../../Layout/Header/HeaderComponent";
import SidebarComponent from "../../Layout/Sidebar/SidebarComponent";
import "./MemberDashboard.css";
import MemberDashboardHomeComponent from "../MemberDashboardHome/MemberDashboardHomeComponent";
import MemberMembershipComponent from "../MembershipComponent/MemberMembershipComponent";
import MembershipUpgradeComponent from "../MembershipComponent/MembershipUpgradeComponent";
import ContributeTextComponent from "../../contribute/ContributeText/ContributeTextComponent";
import ContributeTextCaseComponent from "../../contribute/ContributeTextCase/ContributeTextCaseComponent";
import ContributeTextSubAreaComponent from "../../contribute/ContributeSubArea/ContributeTextSubAreaComponent";
import MemberPaymentComponent from "../MemberPayment/MemberPaymentComponent";
import MemberCustomPaymentComponent from "../MemberCustomPayment/MemberCustomPaymentComponent";
import MemberSavedBooksComponent from "../MemberSavedBooks/MemberSavedBooksComponent";
import MemberSavedJournalArtComponent from "../MemberSavedJournalArticles/MemberSavedJournalArtComponent";
import PaymentSuccess from "../MemberPayment/PaymentSuccess";
import MyContributionComponent from "../../contribute/MyContribution/MyContributionComponent";
import MyCSubAreaInfoComponent from "../../contribute/MyContribution/MyCSubAreaComponent/MyCSubAreaInfoComponent";
import TrashMainComponent from "../../contribute/TrashComponent/TrashMainComponent";
import { IoMdTrash } from "react-icons/io";
import MemberProfileComponent from "../MemberProfile/MemberProfileComponent";

// links object
const MemberDashboardLinks = [
  {
    to: "/dashboard",
    icon: <MdDashboard size={24} />,
    text: "Dashboard",
  },
  {
    to: "/dashboard/saved-books",
    icon: <MdFavoriteBorder size={24} />,
    text: "Saved Books",
  },
  {
    to: "/dashboard/saved-contents",
    icon: <MdFavoriteBorder size={24} />,
    text: "Saved  Contents",
  },
  {
    to: "/dashboard/temp",
    icon: <MdFavoriteBorder size={24} />,
    text: "View Documents",
  },
  {
    to: "/dashboard/my-contribution",
    icon: <MdDashboard size={24} />,
    text: "My Contribution",
  },
  {
    to: "/dashboard/membership",
    icon: <FaChessQueen size={24} />,
    text: "Membership",
  },
  {
    to: "/dashboard/profile",
    icon: <CgProfile size={24} />,
    text: "Profile",
  }
  // {
  //   to: "/dashboard/trash",
  //   icon: <IoMdTrash size={24} />,
  //   text: "Trash",
  // }
];

const MemberDashboardComponent = () => {
  return (
    <div className="d-flex bg-lm">
      <SidebarComponent sidebarLinks={MemberDashboardLinks} />
      <div className="dashboard-header-content-container flex-grow-1">
        <HeaderComponent
          sidebarLinks={MemberDashboardLinks}
          subtitle="Manage your systems from here"
        />
        {/* content */}
        <Routes>
          <Route index element={<MemberDashboardHomeComponent />} />
          <Route path="membership/*" element={<MemberMembershipComponent />} />
          <Route path="saved-books/*" element={<MemberSavedBooksComponent />} />
          <Route
            path="my-contribution/*"
            element={<MyContributionComponent />}
          />
          <Route
            path="profile/*"
            element={<MemberProfileComponent />}
          />
          {/* <Route
                path="trash"
                element={<TrashMainComponent />}
              /> */}
          <Route
            path="saved-contents/*"
            element={<MemberSavedJournalArtComponent />}
          />
          <Route path="payment/:_id" element={<MemberPaymentComponent />} />
          <Route path="payment-success/" element={<PaymentSuccess />} />

          <Route
            path="membership/upgrade"
            element={<MembershipUpgradeComponent />}
          />
          <Route
            path="contribute-text-upload"
            element={<ContributeTextComponent />}
          />
          <Route
            path="contribute-text-upload-case-law"
            element={<ContributeTextCaseComponent />}
          />
          <Route
            path="contribute-text-upload-sub-area"
            element={<ContributeTextSubAreaComponent />}
          />
          <Route path="contribute-text-update-sub-area/:id" element={<MyCSubAreaInfoComponent />} />
        </Routes>
      </div>
    </div>
  );
};

export default MemberDashboardComponent;
