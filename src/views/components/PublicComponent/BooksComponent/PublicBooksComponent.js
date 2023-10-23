import React from "react";
import BooksSiderbarComponent from "./Sidebar/BooksSiderbarComponent";
import BooksCardComponent from "./BooksCard/BooksCardComponent";
import './Books.css';

const PublicBooksComponent = () => {

    return (
        <>
            <div className="container-fluid">
                <div className="row mt-5">
                    <BooksSiderbarComponent/>
                    <BooksCardComponent/>
                </div>
            </div>
        </>
    );
};

export default PublicBooksComponent;