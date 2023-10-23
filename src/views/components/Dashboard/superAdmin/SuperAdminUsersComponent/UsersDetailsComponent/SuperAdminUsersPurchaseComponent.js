import {React, useState} from "react";
import { Button, Modal } from "react-bootstrap";
import defaultMember from "../../../../../../assets/images/default-member.png";
import "../Users.css";

const SuperAdminUsersPurchaseComponent = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="row">
                <div className="col col-12 col-lg-12">
                    <div className="users-tbl-box">
                        {Array.from({ length: 2 }, (_, i) =>
                        <div className="row users-tbl mt-3" key={i}>
                            <div className="col col-3 col-lg-1">
                                <img src={defaultMember} alt="Users"/>
                            </div>
                            <div className="col col-9 col-lg-6">
                                <h3><strong>Norman fleck</strong> purchased premium membership</h3>
                                <p>2h ago</p>
                            </div>
                            <div className="col col-6 col-lg-2 offset-lg-1 mb-2">
                                <button className="btn-cancel">
                                    Cancel
                                </button>
                            </div>
                            <div className="col col-6 col-lg-2">
                                <button className="btn-accept">
                                    Accept
                                </button>
                            </div>
                        </div>
                        )}
                    </div>
                </div> 
            </div>
        </>
    );
};

export default SuperAdminUsersPurchaseComponent;
