import React from "react";
import defaultUser from "../../../../../assets/images/default-user-img.png";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import './DashboardTable.css';

const SuperAdminDashboardTableComponent = (props) => {
    
    return (
        <>
            <div className="tbl-top-header">
                <h3>Admin Lists</h3>
                <Link to={'/dashboard/add-admin'} className="navbar-list-btn-primary">
                    Add an admin
                </Link>
            </div>
            <div className="table-responsive elm-table mt-4">
                
                <table className="table table-borderless align-items-center">
                    <thead>
                        <tr>
                            <th colSpan={2}>Admin Name</th>
                            <th>Email</th>
                            <th>Joined date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src={defaultUser} alt="Book Default" width={'30px'}/>
                            </td>
                            <td>
                                Sabbir Ahmed
                            </td>
                            <td>
                               test@test.com 
                            </td>
                            <td>
                                21-04-2022, 10:12 AM
                            </td>
                            <td>
                                <span className="badge bg-success">Approved</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={defaultUser} alt="Book Default" width={'30px'}/>
                            </td>
                            <td>
                                Sabbir Ahmed
                            </td>
                            <td>
                               test@test.com 
                            </td>
                            <td>
                                21-04-2022, 10:12 AM
                            </td>
                            <td>
                                <span className="badge bg-warning">Pending</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={defaultUser} alt="Book Default" width={'30px'}/>
                            </td>
                            <td>
                                Sabbir Ahmed
                            </td>
                            <td>
                               test@test.com 
                            </td>
                            <td>
                                21-04-2022, 10:12 AM
                            </td>
                            <td>
                                <span className="badge bg-warning">Pending</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={defaultUser} alt="Book Default" width={'30px'}/>
                            </td>
                            <td>
                                Sabbir Ahmed
                            </td>
                            <td>
                               test@test.com 
                            </td>
                            <td>
                                21-04-2022, 10:12 AM
                            </td>
                            <td>
                                <span className="badge bg-danger">Not Approved</span>
                            </td>
                        </tr>
                        
                    </tbody>
                        
                </table>
                <nav className="d-flex justify-content-center lm-pagination">
                    <ul className="pagination">
                        <li className="page-item">
                            <button className="page-link" aria-label="Previous">
                                <BsChevronLeft/>
                            </button>
                        </li>
                        <li className="page-item">
                            <button className="page-link lmp-active">1</button>
                        </li>
                        <li className="page-item">
                            <button className="page-link">2</button>
                        </li>
                        <li className="page-item">
                            <button className="page-link">3</button>
                        </li>
                        <li className="page-item">
                            <button className="page-link" aria-label="Next">
                                <BsChevronRight/>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
      );
};

export default SuperAdminDashboardTableComponent;
