import React from "react";
import defaultUser from "../../../../../assets/images/default-user-img.png"
import "./AgencyTopPerformer.css";

const AgencyTopPerformerComponent = () => {
  return (
    <>
        <div className="tp-card">
            <div className="d-flex justify-content-between align-items-center mb-1">
                <div className="msg-header">
                    <h4 className="card-title card-title-dash">Top Performer</h4>
                </div>
            </div>
            <div className="mt-1">
                {Array.from({ length: 4 }, (_, i) => 
                <div className="wrapper d-flex align-items-center justify-content-between py-2 top-performer-card" key={i}>
                    <div className="d-flex tp-cardp">
                        <img className="img-fluid top-performer-card-thumb" src={defaultUser} alt="user" />
                        <div className="wrapper ms-3">
                            <p className="mb-1">Brandon Washington</p>
                            <small className="text-muted mb-0">162543</small>
                        </div>
                    </div>
                    <div className="text-muted text-small">
                        1h ago
                    </div>
                </div>
                )}

            </div>
        </div>
    </>
  );
};

export default AgencyTopPerformerComponent;
