import React from "react";
import BooksDefault from "../../../../../assets/images/books-b1.png";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import './MemberDashboardTable.css';

const MemberDashboardTableComponent = (props) => {
    
    return (
        <>
            <div className="tbl-top-header">
                <h3>Recent uploaded books</h3>
                <Link to={'/'} className="navbar-list-btn-primary">
                    Contribute
                </Link>
            </div>
            <div className="table-responsive elm-table mt-4">
                
                <table className="table table-borderless align-items-center">
                    <thead>
                        <tr>
                            <th colSpan={2}>Book Name</th>
                            <th>Author Name</th>
                            <th>Uploaded Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src={BooksDefault} alt="Book Default" width={'30px'}/>
                            </td>
                            <td>
                                The Rule of Law
                            </td>
                            <td>
                                Sabbir Ahmed
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
                                <img src={BooksDefault} alt="Book Default" width={'30px'}/>
                            </td>
                            <td>
                                The Rule of Law
                            </td>
                            <td>
                                Imran Ahmed
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
                                <img src={BooksDefault} alt="Book Default" width={'30px'}/>
                            </td>
                            <td>
                                The Rule of Law
                            </td>
                            <td>
                                Ahmed
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
                                <img src={BooksDefault} alt="Book Default" width={'30px'}/>
                            </td>
                            <td>
                                The Rule of Law
                            </td>
                            <td>
                                Imran
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

export default MemberDashboardTableComponent;
