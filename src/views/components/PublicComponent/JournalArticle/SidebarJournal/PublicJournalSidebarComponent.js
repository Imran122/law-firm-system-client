import {React, useState} from "react";
import { Link } from "react-router-dom";
import { BsFilterSquareFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import Accordion from 'react-bootstrap/Accordion';
import Select from 'react-select';
import '../JournalArticle.css';

const PublicJournalSidebarComponent = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const sJournal = [
        { value: 'journal1', label: 'The Journal of Competitive la...' },
        { value: 'journal2', label: 'The Journal of Competitive la...' },
        { value: 'journal3', label: 'The Journal of Competitive la...' }
      ];
    
    const jyears = [
        { value: '2009', label: '2009' },
        { value: '2010', label: '2010' },
        { value: '2011', label: '2011' },
        { value: '2012', label: '2012' },
        { value: '2013', label: '2013' },
        { value: '2014', label: '2014' }
      ];

    const jvolume = [
        { value: '65', label: '65' },
        { value: '66', label: '66' },
        { value: '67', label: '67' },
        { value: '68', label: '68' },
        { value: '69', label: '69' },
        { value: '70', label: '70' }
      ];

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            background: "#fff",
            borderColor: "#eaecf0",
            boxShadow: state.isFocused ? null : null,
            "&:hover": {
            // Overwrittes the different states of border
            borderColor: "#eaecf0",
            },
        }),
    };

    return (
        <>

            <div className="col col-12 col-lg-2 ja-sidebar-w mt-4">
                <button className="d-md-none border-0 bg-transparent ms-4" onClick={handleShow}>
                    <BsFilterSquareFill size={24} /> Filter by
                </button>
                <div className={show ? "d-md-block siderbar-filtering ja-sidebar-bg mt-4" : "d-none d-md-block siderbar-filtering ja-sidebar-bg"}>
                    <div className="filter-title">
                        <h3>Filter by</h3>
                        <Link to={'/books'}>
                            Reset filter
                        </Link>
                    </div>
                    <div className="book-filter-form mt-4 mb-3">

                        <div className="input-group mb-3">
                            
                            <input 
                                type="text" 
                                className="form-control lm-border" 
                                placeholder="Journal Keyword Search" 
                                aria-label="JournalKeywordSearch" aria-describedby="basic-addon1"
                                />
                            <button className="input-group-text lm-bg" id="basic-addon1">
                                <BsSearch/>
                            </button>
                        </div>

                        <h4>Article type</h4>

                        <div className="input-group mb-3">
                            
                            <input 
                                type="text" 
                                className="form-control lm-border" 
                                placeholder="Search article type" 
                                aria-label="SearchArticleType" aria-describedby="basic-addon2"
                                />
                            <button className="input-group-text lm-bg" id="basic-addon2">
                                <BsSearch/>
                            </button>
                        </div>

                        <div className="form-check mb-2">
                            <input 
                                className="form-check-input lm-check-in" 
                                type="checkbox" 
                                defaultValue={''}
                                id="rearchArticle"/>
                            <label 
                                className="form-check-label lm-check" 
                                htmlFor="rearchArticle">
                                Research Article (121)
                            </label>
                        </div>

                        <div className="form-check mb-2">
                            <input 
                                className="form-check-input lm-check-in" 
                                type="checkbox" 
                                defaultValue={''}
                                id="bookReview"/>
                            <label 
                                className="form-check-label lm-check" 
                                htmlFor="bookReview">
                                Book Review (232)
                            </label>
                        </div>

                        <div className="form-check mb-2">
                            <input 
                                className="form-check-input lm-check-in" 
                                type="checkbox" 
                                defaultValue={''}
                                id="others"/>
                            <label 
                                className="form-check-label lm-check" 
                                htmlFor="others">
                                Others (351)
                            </label>
                        </div>

                        <div className="form-check mb-2">
                            <input 
                                className="form-check-input lm-check-in" 
                                type="checkbox" 
                                defaultValue={''}
                                id="caseReport"/>
                            <label 
                                className="form-check-label lm-check" 
                                htmlFor="caseReport">
                                Case Report (834)
                            </label>
                        </div>

                        <div className="form-check mb-2">
                            <input 
                                className="form-check-input lm-check-in" 
                                type="checkbox" 
                                defaultValue={''}
                                id="editorial"/>
                            <label 
                                className="form-check-label lm-check" 
                                htmlFor="editorial">
                                Editorial (328)
                            </label>
                        </div>

                        <div className="form-check mb-2">
                            <input 
                                className="form-check-input lm-check-in" 
                                type="checkbox" 
                                defaultValue={''}
                                id="briefReport"/>
                            <label 
                                className="form-check-label lm-check" 
                                htmlFor="briefReport">
                                Brief Report (688)
                            </label>
                        </div>

                        <div className="form-check mb-2">
                            <input 
                                className="form-check-input lm-check-in" 
                                type="checkbox" 
                                defaultValue={''}
                                id="booksRecieved"/>
                            <label 
                                className="form-check-label lm-check" 
                                htmlFor="booksRecieved">
                                Books Received (332)
                            </label>
                        </div>

                    </div>

                    <div className="book-filter-form mt-4 mb-3">
                        <h4>Subject area</h4>

                        <div className="input-group mb-3">
                            
                            <input 
                                type="text" 
                                className="form-control lm-border" 
                                placeholder="Search subject" 
                                aria-label="SearchSubject" aria-describedby="basic-addon1"
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
                                id="sub1"/>
                            <label 
                                className="form-check-label lm-check" 
                                htmlFor="sub1">
                                Subject area
                            </label>
                        </div>

                        <div className="form-check mb-2">
                            <input 
                                className="form-check-input lm-check-in" 
                                type="checkbox" 
                                defaultValue={''}
                                id="sub2"/>
                            <label 
                                className="form-check-label lm-check" 
                                htmlFor="sub2">
                                Comparitive law
                            </label>
                        </div>

                        <div className="form-check mb-2">
                            <input 
                                className="form-check-input lm-check-in" 
                                type="checkbox" 
                                defaultValue={''}
                                id="sub3"/>
                            <label 
                                className="form-check-label lm-check" 
                                htmlFor="sub3">
                                Competition law
                            </label>
                        </div>

                        <div className="form-check mb-2">
                            <input 
                                className="form-check-input lm-check-in" 
                                type="checkbox" 
                                defaultValue={''}
                                id="sub4"/>
                            <label 
                                className="form-check-label lm-check" 
                                htmlFor="sub4">
                                Family law
                            </label>
                        </div>

                        <div className="form-check mb-2">
                            <input 
                                className="form-check-input lm-check-in" 
                                type="checkbox" 
                                defaultValue={''}
                                id="sub5"/>
                            <label 
                                className="form-check-label lm-check" 
                                htmlFor="sub5">
                                Financial law
                            </label>
                        </div>

                    </div>

                    <div className="book-filter-form journal-accordion mt-4 mb-3">
                        
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Journal Citation</Accordion.Header>
                                <Accordion.Body>
                                    <div className="mb-3">
                                        <label htmlFor="sJournal" className="form-label">Select Journal</label>
                                        <Select 
                                            options={sJournal} 
                                            styles={customStyles}
                                            id="sJournal" 
                                            />
                                    </div>
                                    <div className="row">
                                        <div className="col col-6">
                                            <div className="mb-3">
                                                <label htmlFor="jyears" className="form-label">Year</label>
                                                <Select 
                                                    options={jyears} 
                                                    styles={customStyles}
                                                    id="jyears" 
                                                    />
                                            </div>
                                        </div>
                                        <div className="col col-6">
                                            <div className="mb-3">
                                                <label htmlFor="jvolume" className="form-label">Volume</label>
                                                <Select 
                                                    options={jvolume} 
                                                    styles={customStyles}
                                                    id="jvolume" 
                                                    />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Issue</label>
                                        <input type="text" placeholder="Competition" className="form-control lm-border"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Page Number</label>
                                        <input type="text" placeholder="100" className="form-control lm-border"/>
                                    </div>
                                    <div className="mb-3">
                                        <button className="btn btn-primary">Apply filter</button> 
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <div className="mt-4 mb-3">
                            <label className="form-label">Publishing Date</label>
                            <input type="date" placeholder="28 Apr 2022" className="form-control lm-border"/>
                        </div>

                    </div>

                </div>
                
            </div>
        </>
    );
};

export default PublicJournalSidebarComponent;