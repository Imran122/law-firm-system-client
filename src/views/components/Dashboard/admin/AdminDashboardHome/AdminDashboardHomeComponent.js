import React from "react";
import chartImg from "../../../../../assets/images/chart.png";
import AdminTopPerformerComponent from "../TopPerformer/AdminTopPerformerComponent";
import AdminRecentUploadBooksComponent from "../RecentUploadedBooks/AdminRecentUploadBooksComponent";
import AdminMsgFromAgentComponent from "../MsgFromAgent/AdminMsgFromAgentComponent";
import "./AdminDashboardHome.css";

const AdminDashboardHomeComponent = () => {
  return (
    <div className="row g-0">
      <div className="col col-12 col-lg-8">
        <div className="not-dashboard-home-left-col">
          {/* booking request card */}
          

          <div className="mt-4 row row-cols-1 row-cols-xl-1 g-x-md-1 g-x-xxl-4">
            {/* earning statistics col */}
            <div className="col">
              <div className="content-wrapper">
                 {/* start of bookings count cards */}
                <div className="row g-4 mb-4 flex-wrap">
                  {/* upcoming bookings card */}
                  <div className="col col-6 col-lg-4">
                    <article className="upcoming-bookings-count-card d-md-flex justify-content-between align-items-center p-4 h-100">
                      <div className="mb-2 mb-md-0">
                        <h5>Total</h5>
                        <small>Books</small>
                      </div>
                      <h2 className="fw-bolder">
                        25
                      </h2>
                    </article>
                  </div>
                  {/* this month bookings card */}
                  <div className="col col-6 col-lg-4">
                    <article className="this-month-bookings-count-card d-md-flex justify-content-between align-items-center p-4 h-100">
                      <div className="mb-2 mb-md-0">
                        <h5>Total</h5>
                        <small>Insight</small>
                      </div>
                      <h2 className="fw-bolder">
                        26
                      </h2>
                    </article>
                  </div>
                  {/* third bookings card */}
                  <div className="col col-12 col-lg-4">
                    <article className="total-bookings-count-card d-md-flex justify-content-between align-items-center p-4 h-100">
                      <div className="mb-2 mb-md-0">
                        <h5>Total</h5>
                        <small>Agent</small>
                      </div>
                      <h2 className="fw-bolder">
                        60
                      </h2>
                    </article>
                  </div>
                </div>
                {/* end of bookings count cards */}
              </div>
            </div>
            {/* chart col */}
            <div className="col mt-4">
              <div className="content-wrapper border text-center mb-4 mb-xl-0">
                <img className="img-fluid" src={chartImg} alt="chart" />
              </div>
            </div>
            {/* table statistics col */}
            <div className="col mt-4">
              <div className="content-wrapper">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col col-12 col-lg-4">
        <div className="not-dashboard-home-right-col">
          <AdminTopPerformerComponent/>
          <AdminRecentUploadBooksComponent/>
          <AdminMsgFromAgentComponent/>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardHomeComponent;
