import React, { useState } from "react";
import PublicBookDetailsSidebarComponent from "./PublicBookDetailsSidebarComponent";
import PublicBookDetailsCardComponent from "./PublicBookDetailsCardComponent";
import './BooksDetails.css';

const PublicBookDetailsComponent = () => {
    const [bookItemContent, setBookItemContent] = useState({});

    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <PublicBookDetailsSidebarComponent setBookItemContent={setBookItemContent}/>
                    <PublicBookDetailsCardComponent bookItemContent={bookItemContent}/>
                </div>
            </div>
        </>
    );
};

export default PublicBookDetailsComponent;