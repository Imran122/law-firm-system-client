import React from "react";
import Books from "../../../../../assets/images/books-b1.png"
import "./RecentUploadBooks.css";

const AdminRecentUploadBooksComponent = () => {
  return (
    <>
        <div className="tp-card mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="msg-header">
                    <h4 className="card-title card-title-dash">Recent Uploaded Books</h4>
                </div>
            </div>
            <div className="mt-3">
                {Array.from({ length: 4 }, (_, i) => 
                <div className="wrapper d-flex align-items-center justify-content-between py-2 recent-upload-card" key={i}>
                    <div className="d-flex ">
                        <img className="img-fluid recent-upload-card-thumb" src={Books} alt="Books" />
                        <div className="wrapper ms-3">
                            <h2 className="ms-1 mb-1 ru-book-title">Book Name</h2>
                            <small className="ms-1 mb-1 text-muted">Author Name</small><br/>
                            <small className="ms-1 mb-1 text-muted">Date: 30-06-2022</small>
                        </div>
                    </div>
                </div>
                )}

            </div>
        </div>
    </>
  );
};

export default AdminRecentUploadBooksComponent;
