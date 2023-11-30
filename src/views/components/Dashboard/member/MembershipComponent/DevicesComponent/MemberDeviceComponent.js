import React from "react";
import {BiTrash} from "react-icons/bi";
import "../Membership.css";

const MemberDeviceComponent = () => {
  return (
    <>
        <div className="row">
            <div className="col col-12 col-lg-6">
                <div className="table-responsive device-tab">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <td>Device 1</td>
                                <td><span>THIS DEVICE</span></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>OS</td>
                                <td>Windows 10</td>
                            </tr>
                            <tr>
                                <td>Browser</td>
                                <td>Chrome Dev 101.0.4951.54</td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td>202.124.8.132</td>
                            </tr>
                            <tr>
                                <td>Logged In</td>
                                <td>23 Feb 2022</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <button className="btn-remove-device">
                                        <BiTrash/>
                                        Remove this device
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="col col-12 col-lg-6">
                <div className="table-responsive device-tab">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <td>Device 2</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>OS</td>
                                <td>Windows 10</td>
                            </tr>
                            <tr>
                                <td>Browser</td>
                                <td>Chrome Dev 101.0.4951.54</td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td>202.124.8.132</td>
                            </tr>
                            <tr>
                                <td>Logged In</td>
                                <td>8 days ago</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <button className="btn-remove-device">
                                        <BiTrash/>
                                        Remove this device
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  );
};

export default MemberDeviceComponent;
