import React from "react";
import useAuth from "../../../hooks/useAuth";
import AdminDashboardComponent from "../../components/Dashboard/admin/AdminDashboard/AdminDashboardComponent";
import AgencyDashboardComponent from "../../components/Dashboard/agency/AgencyDashboard/AgencyDashboardComponent";
import MemberDashboardComponent from "../../components/Dashboard/member/MemberDashboard/MemberDashboardComponent";
import SuperAdminDashboardComponent from "../../components/Dashboard/superAdmin/SuperAdminDashboard/SuperAdminDashboardComponent";
import EditorDashboardComponent from "../../components/Dashboard/editor/EditorDashboard/EditorDashboardComponent";

const Dashboard = (props) => {
  // console.log("props", props);
  const { user, isLoading } = useAuth();
  return (
    <>
      {user.email && user.role === "agency" && <AgencyDashboardComponent />}
      {user.email && user.role === "super-admin" && (
        <SuperAdminDashboardComponent />
      )}
      {user.email && user.role === "member" && <MemberDashboardComponent />}
      {user.email && user.role === "admin" && <AdminDashboardComponent />}
      {user.email && user.role === "editor" && <EditorDashboardComponent />}
    </>
  );
};

export default Dashboard;
