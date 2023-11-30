import React from "react";
import EarningStatsCardComponent from "../EarningStatsCard/EarningStatsCardComponent";
import "./EarningStats.css";

const EarningStatsComponent = () => {

  return (
    <div className="row g-2 g-xxl-3">
      <div className="col col-6 col-lg-3">
        <EarningStatsCardComponent
          startTime="Today's"
          endTime="Yesterdays"
          startEarning={'888'}
          endEarning={'500'}
        />
      </div>
      <div className="col col-6 col-lg-3">
        <EarningStatsCardComponent
          startTime="This Weeks"
          endTime="Last Weeks"
          startEarning={'888'}
          endEarning={'950'}
        />
      </div>
      <div className="col col-6 col-lg-3">
        <EarningStatsCardComponent
          startTime="This Months"
          endTime="Last Months"
          startEarning={'888'}
          endEarning={'950'}
        />
      </div>
      <div className="col col-6 col-lg-3">
        <EarningStatsCardComponent
          startTime="This Years"
          endTime="Last Years"
          startEarning={'888'}
          endEarning={'450'}
        />
      </div>
      {/*    <div className="col col-12">
        <div
          className="content-wrapper border d-flex justify-content-between align-items-center"
          style={{ padding: 20 }}
        >
          <div className="">
            <h4 className="mb-1">$8693</h4>
            <small>Current balance</small>
          </div>
          <button className="button-style primary-button cr-button">
            Withdraw
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default EarningStatsComponent;