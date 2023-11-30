import React from "react";
import "./Membership.css";

const MemberPaymentComponent = () => {
   
    return (
        <>
            <div className="row mt-3">
                <div className="col col-12 col-lg-12">
                    
                    <div className="table-responsive pay-tab">
                        <div className="member-payments">
                            <h2>Payments</h2>
                        </div>
                        <table className="table table-borderless">
                            
                            <tbody>
                                <tr>
                                    <td>Agency Membership</td>
                                    <td>$102.99</td>
                                    <td>08 Feb 2022 </td>
                                    <td>Mastercard ****9834</td>
                                    <td><span className="success-tab">PAID SUCCESSFULLY</span></td>
                                </tr>
                                <tr>
                                    <td>Agency Membership</td>
                                    <td>$102.99</td>
                                    <td>08 Feb 2022 </td>
                                    <td>Mastercard ****9834</td>
                                    <td><span className="success-tab">PAID SUCCESSFULLY</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> 
            </div>
        </>
    );
};

export default MemberPaymentComponent;
