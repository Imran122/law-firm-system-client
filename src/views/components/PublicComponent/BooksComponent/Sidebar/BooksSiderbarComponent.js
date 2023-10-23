import {React, useState} from "react";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { BsFilterSquareFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import '../Books.css';

const BooksSiderbarComponent = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <div className="col col-12 col-lg-2 ms-4">
                <div className="d-none d-md-block siderbar-filtering books-sidebar-bg">
                    <div className="filter-title">
                        <h3>Filter by</h3>
                        <Link to={'/books'}>
                            Reset filter
                        </Link>
                    </div>
                    <div className="book-filter-form mt-4 mb-3">
                        <h4>Book Category</h4>

                        <div className="input-group mb-3">
                            
                            <input 
                                type="text" 
                                className="form-control lm-border" 
                                placeholder="Search Author" 
                                aria-label="SearchAuthor" aria-describedby="basic-addon1"
                                />
                            <span className="input-group-text lm-bg" id="basic-addon1">
                                <BsSearch/>
                            </span>
                        </div>

                        <div className="form-check mb-2">
                            <input 
                                className="form-check-input lm-check-in" 
                                type="checkbox" 
                                defaultValue={''}
                                id="checkLaw"/>
                            <label 
                                className="form-check-label lm-check" 
                                htmlFor="checkLaw">
                                Law
                            </label>
                        </div>

                        <div className="form-check mb-2">
                            <input 
                                className="form-check-input lm-check-in" 
                                type="checkbox" 
                                defaultValue={''}
                                id="checkPolitics"/>
                            <label 
                                className="form-check-label lm-check" 
                                htmlFor="checkPolitics">
                                Politics & Relations
                            </label>
                        </div>

                        <div className="form-check mb-2">
                            <input 
                                className="form-check-input lm-check-in" 
                                type="checkbox" 
                                defaultValue={''}
                                id="checkHistory"/>
                            <label 
                                className="form-check-label lm-check" 
                                htmlFor="checkHistory">
                                History
                            </label>
                        </div>

                        <div className="form-check mb-2">
                            <input 
                                className="form-check-input lm-check-in" 
                                type="checkbox" 
                                defaultValue={''}
                                id="checkEconomics"/>
                            <label 
                                className="form-check-label lm-check" 
                                htmlFor="checkEconomics">
                                Economics
                            </label>
                        </div>

                    </div>

                    <div className="book-filter-form mt-4 mb-3">
                        <h4>Author</h4>

                        <div className="input-group mb-3">
                            
                            <input 
                                type="text" 
                                className="form-control lm-border" 
                                placeholder="Search Author" 
                                aria-label="SearchAuthor" aria-describedby="basic-addon1"
                                />
                            <span className="input-group-text lm-bg" id="basic-addon1">
                                <BsSearch/>
                            </span>
                        </div>

                        <div className="form-check mb-2">
                            <input 
                                className="form-check-input lm-check-in" 
                                type="checkbox" 
                                defaultValue={''}
                                id="checkAuth1"/>
                            <label 
                                className="form-check-label lm-check" 
                                htmlFor="checkAuth1">
                                Tom Bingham
                            </label>
                        </div>

                        <div className="form-check mb-2">
                            <input 
                                className="form-check-input lm-check-in" 
                                type="checkbox" 
                                defaultValue={''}
                                id="checkAuth2"/>
                            <label 
                                className="form-check-label lm-check" 
                                htmlFor="checkAuth2">
                                John Grisham
                            </label>
                        </div>

                        <div className="form-check mb-2">
                            <input 
                                className="form-check-input lm-check-in" 
                                type="checkbox" 
                                defaultValue={''}
                                id="checkAuth3"/>
                            <label 
                                className="form-check-label lm-check" 
                                htmlFor="checkAuth3">
                                Glanville Williams
                            </label>
                        </div>

                        <div className="form-check mb-2">
                            <input 
                                className="form-check-input lm-check-in" 
                                type="checkbox" 
                                defaultValue={''}
                                id="checkAuth4"/>
                            <label 
                                className="form-check-label lm-check" 
                                htmlFor="checkAuth4">
                                Isaac Newton
                            </label>
                        </div>

                    </div>

                    <div className="book-filter-form mt-4 mb-3">
                        <h4>Publisher</h4>

                        <div className="input-group mb-3">
                            
                            <input 
                                type="text" 
                                className="form-control lm-border" 
                                placeholder="Search Publisher" 
                                aria-label="SearchPublisher" aria-describedby="basic-addon1"
                                />
                            <span className="input-group-text lm-bg" id="basic-addon1">
                                <BsSearch/>
                            </span>
                        </div>

                        <div className="form-check mb-2">
                            <input 
                                className="form-check-input lm-check-in" 
                                type="checkbox" 
                                defaultValue={''}
                                id="checkPub1"/>
                            <label 
                                className="form-check-label lm-check" 
                                htmlFor="checkPub1">
                                Wiley
                            </label>
                        </div>

                        <div className="form-check mb-2">
                            <input 
                                className="form-check-input lm-check-in" 
                                type="checkbox" 
                                defaultValue={''}
                                id="checkPub2"/>
                            <label 
                                className="form-check-label lm-check" 
                                htmlFor="checkPub2">
                                McMilan
                            </label>
                        </div>

                        <div className="form-check mb-2">
                            <input 
                                className="form-check-input lm-check-in" 
                                type="checkbox" 
                                defaultValue={''}
                                id="checkPub3"/>
                            <label 
                                className="form-check-label lm-check" 
                                htmlFor="checkPub3">
                                Spring Nature
                            </label>
                        </div>

                        <div className="form-check mb-2">
                            <input 
                                className="form-check-input lm-check-in" 
                                type="checkbox" 
                                defaultValue={''}
                                id="checkPub4"/>
                            <label 
                                className="form-check-label lm-check" 
                                htmlFor="checkPub4">
                                Simon & Schuster
                            </label>
                        </div>

                    </div>

                </div>
                <div className="d-flex align-items-center d-md-none mb-4">
                    <button className="border-0 bg-transparent ms-4" onClick={handleShow}>
                        <BsFilterSquareFill size={24} /> Filter by
                    </button>

                    <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton></Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className="siderbar-filtering">
                                <div className="filter-title">
                                    <h3>Filter by</h3>
                                    <Link to={'/books'}>
                                        Reset filter
                                    </Link>
                                </div>
                                <div className="book-filter-form mt-4 mb-3">
                                    <h4>Book Category</h4>

                                    <div className="input-group mb-3">
                                        
                                        <input 
                                            type="text" 
                                            className="form-control lm-border" 
                                            placeholder="Search Author" 
                                            aria-label="SearchAuthor" aria-describedby="basic-addon1"
                                            />
                                        <span className="input-group-text lm-bg" id="basic-addon1">
                                            <BsSearch/>
                                        </span>
                                    </div>

                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input lm-check-in" 
                                            type="checkbox" 
                                            defaultValue={''}
                                            id="checkLaw"/>
                                        <label 
                                            className="form-check-label lm-check" 
                                            htmlFor="checkLaw">
                                            Law
                                        </label>
                                    </div>

                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input lm-check-in" 
                                            type="checkbox" 
                                            defaultValue={''}
                                            id="checkPolitics"/>
                                        <label 
                                            className="form-check-label lm-check" 
                                            htmlFor="checkPolitics">
                                            Politics & Relations
                                        </label>
                                    </div>

                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input lm-check-in" 
                                            type="checkbox" 
                                            defaultValue={''}
                                            id="checkHistory"/>
                                        <label 
                                            className="form-check-label lm-check" 
                                            htmlFor="checkHistory">
                                            History
                                        </label>
                                    </div>

                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input lm-check-in" 
                                            type="checkbox" 
                                            defaultValue={''}
                                            id="checkEconomics"/>
                                        <label 
                                            className="form-check-label lm-check" 
                                            htmlFor="checkEconomics">
                                            Economics
                                        </label>
                                    </div>

                                </div>

                                <div className="book-filter-form mt-4 mb-3">
                                    <h4>Author</h4>

                                    <div className="input-group mb-3">
                                        
                                        <input 
                                            type="text" 
                                            className="form-control lm-border" 
                                            placeholder="Search Author" 
                                            aria-label="SearchAuthor" aria-describedby="basic-addon1"
                                            />
                                        <span className="input-group-text lm-bg" id="basic-addon1">
                                            <BsSearch/>
                                        </span>
                                    </div>

                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input lm-check-in" 
                                            type="checkbox" 
                                            defaultValue={''}
                                            id="checkAuth1"/>
                                        <label 
                                            className="form-check-label lm-check" 
                                            htmlFor="checkAuth1">
                                            Tom Bingham
                                        </label>
                                    </div>

                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input lm-check-in" 
                                            type="checkbox" 
                                            defaultValue={''}
                                            id="checkAuth2"/>
                                        <label 
                                            className="form-check-label lm-check" 
                                            htmlFor="checkAuth2">
                                            John Grisham
                                        </label>
                                    </div>

                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input lm-check-in" 
                                            type="checkbox" 
                                            defaultValue={''}
                                            id="checkAuth3"/>
                                        <label 
                                            className="form-check-label lm-check" 
                                            htmlFor="checkAuth3">
                                            Glanville Williams
                                        </label>
                                    </div>

                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input lm-check-in" 
                                            type="checkbox" 
                                            defaultValue={''}
                                            id="checkAuth4"/>
                                        <label 
                                            className="form-check-label lm-check" 
                                            htmlFor="checkAuth4">
                                            Isaac Newton
                                        </label>
                                    </div>

                                </div>

                                <div className="book-filter-form mt-4 mb-3">
                                    <h4>Publisher</h4>

                                    <div className="input-group mb-3">
                                        
                                        <input 
                                            type="text" 
                                            className="form-control lm-border" 
                                            placeholder="Search Publisher" 
                                            aria-label="SearchPublisher" aria-describedby="basic-addon1"
                                            />
                                        <span className="input-group-text lm-bg" id="basic-addon1">
                                            <BsSearch/>
                                        </span>
                                    </div>

                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input lm-check-in" 
                                            type="checkbox" 
                                            defaultValue={''}
                                            id="checkPub1"/>
                                        <label 
                                            className="form-check-label lm-check" 
                                            htmlFor="checkPub1">
                                            Wiley
                                        </label>
                                    </div>

                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input lm-check-in" 
                                            type="checkbox" 
                                            defaultValue={''}
                                            id="checkPub2"/>
                                        <label 
                                            className="form-check-label lm-check" 
                                            htmlFor="checkPub2">
                                            McMilan
                                        </label>
                                    </div>

                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input lm-check-in" 
                                            type="checkbox" 
                                            defaultValue={''}
                                            id="checkPub3"/>
                                        <label 
                                            className="form-check-label lm-check" 
                                            htmlFor="checkPub3">
                                            Spring Nature
                                        </label>
                                    </div>

                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input lm-check-in" 
                                            type="checkbox" 
                                            defaultValue={''}
                                            id="checkPub4"/>
                                        <label 
                                            className="form-check-label lm-check" 
                                            htmlFor="checkPub4">
                                            Simon & Schuster
                                        </label>
                                    </div>

                                </div>

                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            </div>
        </>
    );
};

export default BooksSiderbarComponent;