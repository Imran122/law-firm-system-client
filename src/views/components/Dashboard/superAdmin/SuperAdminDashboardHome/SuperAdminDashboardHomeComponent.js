import React from "react";
import chartImg from "../../../../../assets/images/chart.png";
import EarningStatsComponent from "../EarningStats/EarningStatsComponent";
import SuperAdminDashboardTableComponent from "../SuperAdminDashboardTableComponent/SuperAdminDashboardTableComponent";
import SuperAdminTopPerformerComponent from "../TopPerformer/SuperAdminTopPerformerComponent";
import SuperadminRecentUploadBooksComponent from "../RecentUploadedBooks/SuperadminRecentUploadBooksComponent";
import MsgFromAgentComponent from "../MsgFromAgent/MsgFromAgentComponent";
import "./SuperAdminDashboardHome.css";

const SuperAdminDashboardHomeComponent = () => {
  return (
    <div className="row g-0">
      <div className="col col-12 col-lg-8">
        <div className="not-dashboard-home-left-col">
          {/* booking request card */}
          

          <div className="mt-4 row row-cols-1 row-cols-xl-1 g-x-md-1 g-x-xxl-4">
            {/* chart col */}
            <div className="col">
              <div className="content-wrapper border text-center mb-4 mb-xl-0">
                <img className="img-fluid" src={chartImg} alt="chart" />
              </div>
            </div>
            {/* earning statistics col */}
            <div className="col mt-4">
              <div className="content-wrapper">
                <EarningStatsComponent />
              </div>
            </div>
            {/* table statistics col */}
            <div className="col mt-4">
              <div className="content-wrapper">
                <SuperAdminDashboardTableComponent />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col col-12 col-lg-4">
        <div className="not-dashboard-home-right-col">
          <SuperAdminTopPerformerComponent/>
          <SuperadminRecentUploadBooksComponent/>
          <MsgFromAgentComponent/>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboardHomeComponent;
