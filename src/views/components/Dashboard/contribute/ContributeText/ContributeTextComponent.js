import React from "react";
import ContributeTextFormComponent from "./ContributeTextFormComponent";
import ContributeTextSiderbarComponent from "./ContributeTextSiderbarComponent";
const ContributeTextComponent = () => {
    
  return (
    <>
        <div className="row g-0">
            <div className="col col-12 col-lg-8">
                <div className="not-dashboard-home-left-col">
           
                    <div className="row row-cols-1 row-cols-xl-1 g-x-md-1 g-x-xxl-4">
                        {/* earning statistics col */}
                        <div className="col">
                            <div className="content-wrapper">
                                <ContributeTextFormComponent/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="col col-12 col-lg-4">
                <div className="not-dashboard-home-right-col">
                    <ContributeTextSiderbarComponent/>
                </div>
            </div>
        </div>
    </>
  );
};

export default ContributeTextComponent;
