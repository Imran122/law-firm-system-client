import React from "react";
import chartImg from "../../../../../assets/images/chart.png";
import { RiQuestionnaireLine } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
import { BiNote } from "react-icons/bi";
import AgencyMsgFromAdminComponent from "../AgencyMsgFromAdmin/AgencyMsgFromAdminComponent";
import AgencyDashboardTableComponent from "../AgencyDashboardTableComponent/AgencyDashboardTableComponent";
import AgencyTopPerformerComponent from "../AgencyTopPerformer/AgencyTopPerformerComponent";
import "./AgencyDashboardHome.css";

const AgencyDashboardHomeComponent = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col col-12 col-lg-8">
          <div className="not-dashboard-home-left-col">          

            <div className="mt-4 row row-cols-1 row-cols-xl-1 g-x-md-1 g-x-xxl-4">

              <div className="col">
                <div className="content-wrapper">

                  <div className="row g-4 mb-4 flex-wrap">

                    <div className="col col-6 col-lg-4">
                      <article className="member-total-count-card d-md-flex justify-content-between align-items-center p-4 h-100">
                        <div className="mb-2 mb-md-0">
                          <h5 className="fw-bolder">29</h5>
                          <small>Question Asked</small>
                        </div>
                        <div className="member-top-total-icon1">
                          <RiQuestionnaireLine />
                        </div>
                        
                      </article>
                    </div>
                    {/* this month bookings card */}
                    <div className="col col-6 col-lg-4">
                      <article className="member-total-count-card d-md-flex justify-content-between align-items-center p-4 h-100">
                        <div className="mb-2 mb-md-0">
                          <h5 className="fw-bolder">56</h5>
                          <small>Articles Contributed</small>
                        </div>
                        <div className="member-top-total-icon2">
                          <BiNote />
                        </div>
                      </article>
                    </div>
                    <div className="col col-12 col-lg-4">
                      <article className="member-total-count-card d-md-flex justify-content-between align-items-center p-4 h-100">
                        <div className="mb-2 mb-md-0">
                          <h5 className="fw-bolder">82</h5>
                          <small>Books Contributed</small>
                        </div>
                        <div className="member-top-total-icon3">
                          <IoBookOutline />
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col mt-4">
                <div className="content-wrapper">
                  <AgencyDashboardTableComponent/>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="col col-12 col-lg-4">
          <div className="not-dashboard-home-right-col">
            <AgencyTopPerformerComponent/>
            <AgencyMsgFromAdminComponent/>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgencyDashboardHomeComponent;
