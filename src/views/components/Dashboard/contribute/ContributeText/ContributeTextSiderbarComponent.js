import React, { useEffect, useState } from 'react';
import { Offcanvas, Modal, Button } from "react-bootstrap";
import { BsFilterSquareFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Accordion from 'react-bootstrap/Accordion';

import './AddBook.css';
import BookChapter from '../BookStructure/BookChapter';
import axios from 'axios';
import useAuth from '../../../../../hooks/useAuth';
import { getCookie, getLocalStorage } from '../../../../../utilities/helper';
const dataRender = [

]
const ContributeTextSiderbarComponent = () => {
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [add, setAdd] = useState(false);
    const [chapter, setChapter] = useState(false);
    const [content, setContent] = useState(false);


    const [newChapter, setNewChapter] = useState(false);
    const [chapterTitle, setChapterTitle] = useState("");
    const [chapterItem, setChapterItem] = useState({});


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const editClose = () => setEdit(false);
    const editShow = () => setEdit(true);

    const addClose = () => setAdd(false);
    const addTitle = () => setAdd(true);

    const contentClose = () => setContent(false);
    const addContent = () => setContent(true);

    const chapterClose = () => setChapter(false);
    const addChapter = () => {
        setChapter(true);
    };

    // const [bookContentList, setBookContentList] = useState([]);
    const [hirarcyData, setHirarcyData] = useState(new Map());

  const { contributeItemContext, setContributeItemContext } = useAuth();

    //fetch data from fajedb json file
    useEffect(() => {

        console.log('contributeItemContext ',contributeItemContext);
        console.log('getLocalStorage("contributeItem")', getLocalStorage("contributeItem"))
        fetch(`${process.env.REACT_APP_API}/api/contribute-content-bycontributeId?contributeId=${contributeItemContext?.contributeid}`, {
            method: "GET",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              "Authorization": `Bearer ${getCookie("token")}`
            },
          })
            .then((response) => response.json())
            .then((data) => {
                data = data.result;
                console.log('data ',data)
                const temphirarcyData = new Map();
                for (let index = 0; index < data.length; index++) {
                    const element = data[index];
                    if (temphirarcyData[element.parentcontributecontentId] == undefined) {
                        temphirarcyData[element.parentcontributecontentId] = [element];
                    } else {
                        temphirarcyData[element.parentcontributecontentId].push(element);

                    }

                }
                console.log('temphirarcyData ',temphirarcyData)

                // setBookContentList(data);
                setHirarcyData(temphirarcyData);
            });
    }, []);
    const createChapter = async () => {
        setChapter(false)

        const response = await axios.post(
            `${process.env.REACT_APP_API}/api/contribute-content-create`,
            {
                contributeId: contributeItemContext?.contributeid,
                parentcontributecontentId: "#",
                contentTitle: chapterTitle,
                content:""
            },
    
            {
              headers: {
                // authorization: `Bearer ${getCookie("token")}`,
                "Authorization": `Bearer ${getCookie("token")}`
              },
            }
          );
    
          if (response.status === 200) {
            console.log(response.data);
            if (hirarcyData["#"] == undefined) {
                hirarcyData["#"] = [response.data];
            } else {
                hirarcyData["#"].push(response.data);

            }
            setHirarcyData(hirarcyData)
            // setIsLoading(false);
            // navigate("/renter-pay/success", { replace: true });
          }

        setNewChapter(true);
    };


    const handelOnBlur = (e) => {
        const value = e.target.value;
        setChapterTitle(value);
    };
    return (
        <>
            <div className="col col-12 col-lg-12">

                <div className="mb-2 siderbar-filtering2">
                    <div className="books-title-add">
                        <h2>Add table of contents</h2>

                        <ul>
                            <li>
                                <button onClick={addChapter}>
                                    <AiOutlinePlusCircle /> Add new chapter
                                </button>
                            </li>
                        </ul>
                    </div>
                    <Modal
                        show={chapter}
                        onHide={chapterClose}
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Chapter</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    onBlur={handelOnBlur}
                                    placeholder="Enter chapter name" />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="btn-notification" onClick={createChapter}>
                                Add Chapter
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </div>

                <div className="mb-2 siderbar-filtering2 contribute-sidebar">

                    {hirarcyData["#"] && hirarcyData["#"].map((item) => (
                        <BookChapter
                            hirarcyData={hirarcyData}
                            item={item}
                            setHirarcyData={setHirarcyData}
                        />
                    ))}
                </div>

                <div className="mb-2 siderbar-filtering2">

                    <div className="filter-title">
                        <h2>Category</h2>
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
                            <button className="input-group-text lm-bg" id="basic-addon1">
                                <BsSearch />
                            </button>
                        </div>

                        <div className="form-check mb-2">
                            <input
                                className="form-check-input lm-check-in"
                                type="checkbox"
                                defaultValue={''}
                                id="compLaw" />
                            <label
                                className="form-check-label lm-check"
                                htmlFor="compLaw">
                                Comparitive law
                            </label>
                        </div>

                        <div className="form-check mb-2">
                            <input
                                className="form-check-input lm-check-in"
                                type="checkbox"
                                defaultValue={''}
                                id="comLaw" />
                            <label
                                className="form-check-label lm-check"
                                htmlFor="comLaw">
                                Competition law
                            </label>
                        </div>

                        <div className="form-check mb-2">
                            <input
                                className="form-check-input lm-check-in"
                                type="checkbox"
                                defaultValue={''}
                                id="familyLaw" />
                            <label
                                className="form-check-label lm-check"
                                htmlFor="familyLaw">
                                Family law
                            </label>
                        </div>

                        <div className="form-check mb-2">
                            <input
                                className="form-check-input lm-check-in"
                                type="checkbox"
                                defaultValue={''}
                                id="financeLaw" />
                            <label
                                className="form-check-label lm-check"
                                htmlFor="financeLaw">
                                Financial law
                            </label>
                        </div>

                        <div className="form-check mb-2">
                            <input
                                className="form-check-input lm-check-in"
                                type="checkbox"
                                defaultValue={''}
                                id="historyLaw" />
                            <label
                                className="form-check-label lm-check"
                                htmlFor="historyLaw">
                                History law
                            </label>
                        </div>

                        <div className="form-check mb-2">
                            <input
                                className="form-check-input lm-check-in"
                                type="checkbox"
                                defaultValue={''}
                                id="lawAndSociety" />
                            <label
                                className="form-check-label lm-check"
                                htmlFor="lawAndSociety">
                                Law and society
                            </label>
                        </div>

                    </div>
                </div>

                <div className="d-none d-md-block siderbar-filtering2">
                    <div className="filter-title">
                        <h2>Tags</h2>
                    </div>
                    <div className="book-filter-form mt-4 mb-3">
                        <h5>Law & Order</h5>
                        <h5>History</h5>
                        <h5>Finance</h5>
                    </div>

                </div>

                {/* <div className="d-flex align-items-center d-md-none mb-4">
                    <button className="border-0 bg-transparent ms-4" onClick={handleShow}>
                        <BsFilterSquareFill size={24} /> Filter by
                    </button>

                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton></Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className="siderbar-filtering2">

                                <div className="mb-2 books-title-add">
                                    <h2>Add table of contents</h2>

                                    <ul>
                                        <li>
                                            <button onClick={addChapter}>
                                                <AiOutlinePlusCircle /> Add new chapter
                                            </button>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mb-2 contribute-sidebar">

                                    <Modal
                                        show={edit}
                                        onHide={editClose}
                                        aria-labelledby="contained-modal-title-vcenter"
                                        centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Edit title</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter title" />
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button className="btn-notification" onClick={editClose}>
                                                Update title
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                    <Modal
                                        show={add}
                                        onHide={addClose}
                                        aria-labelledby="contained-modal-title-vcenter"
                                        centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Add title</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter title" />
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button className="btn-notification" onClick={addClose}>
                                                Add title
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>

                                    <Modal
                                        show={chapter}
                                        onHide={chapterClose}
                                        aria-labelledby="contained-modal-title-vcenter"
                                        centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Add Chapter</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter chapter name" />
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button className="btn-notification" onClick={chapterClose}>
                                                Add Chapter
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>

                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Introduction to the prison break as</Accordion.Header>
                                            <Accordion.Body>
                                                <Accordion className="lm-ar-accordion-lists con-acc-lists">
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header className="ar-book-list-title">
                                                            1. What is prison breaking?
                                                            <button onClick={editShow}>
                                                                <BiEditAlt />
                                                            </button>
                                                            <button onClick={addTitle}>
                                                                <AiOutlinePlusCircle />
                                                            </button>
                                                        </Accordion.Header>
                                                        <Accordion.Body>
                                                            <p>
                                                                1.1.1 Prison breaker laws
                                                                <button onClick={editShow}>
                                                                    <BiEditAlt />
                                                                </button>
                                                                <button onClick={addTitle}>
                                                                    <AiOutlinePlusCircle />
                                                                </button>
                                                            </p>
                                                            <p>
                                                                1.1.2 How its implemented
                                                                <button onClick={editShow}>
                                                                    <BiEditAlt />
                                                                </button>
                                                            </p>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                                <Accordion className="lm-ar-accordion-lists con-acc-lists">
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header className="ar-book-list-title">
                                                            2. Why is it illegal?
                                                            <button onClick={editShow}>
                                                                <BiEditAlt />
                                                            </button>
                                                        </Accordion.Header>
                                                        <Accordion.Body>
                                                            <p>
                                                                2.1.1 Prison breaker laws
                                                                <button onClick={editShow}>
                                                                    <BiEditAlt />
                                                                </button>
                                                            </p>
                                                            <p>
                                                                2.1.2 How its implemented
                                                                <button onClick={editShow}>
                                                                    <BiEditAlt />
                                                                </button>
                                                            </p>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>

                                </div>

                                <div className="filter-title">
                                    <h2>Category</h2>

                                </div>
                                <div className="book-filter-form mt-4 mb-3">
                                    <h4>Subject Area</h4>

                                    <div className="input-group mb-3">

                                        <input
                                            type="text"
                                            className="form-control lm-border"
                                            placeholder="Search Subject"
                                            aria-label="SearchSubject" aria-describedby="basic-addon1"
                                        />
                                        <button className="input-group-text lm-bg" id="basic-addon1">
                                            <BsSearch />
                                        </button>
                                    </div>

                                    <div className="form-check mb-2">
                                        <input
                                            className="form-check-input lm-check-in"
                                            type="checkbox"
                                            defaultValue={''}
                                            id="compLaw" />
                                        <label
                                            className="form-check-label lm-check"
                                            htmlFor="compLaw">
                                            Comparitive law
                                        </label>
                                    </div>

                                    <div className="form-check mb-2">
                                        <input
                                            className="form-check-input lm-check-in"
                                            type="checkbox"
                                            defaultValue={''}
                                            id="comLaw" />
                                        <label
                                            className="form-check-label lm-check"
                                            htmlFor="comLaw">
                                            Competition law
                                        </label>
                                    </div>

                                    <div className="form-check mb-2">
                                        <input
                                            className="form-check-input lm-check-in"
                                            type="checkbox"
                                            defaultValue={''}
                                            id="familyLaw" />
                                        <label
                                            className="form-check-label lm-check"
                                            htmlFor="familyLaw">
                                            Family law
                                        </label>
                                    </div>

                                    <div className="form-check mb-2">
                                        <input
                                            className="form-check-input lm-check-in"
                                            type="checkbox"
                                            defaultValue={''}
                                            id="financeLaw" />
                                        <label
                                            className="form-check-label lm-check"
                                            htmlFor="financeLaw">
                                            Financial law
                                        </label>
                                    </div>

                                    <div className="form-check mb-2">
                                        <input
                                            className="form-check-input lm-check-in"
                                            type="checkbox"
                                            defaultValue={''}
                                            id="historyLaw" />
                                        <label
                                            className="form-check-label lm-check"
                                            htmlFor="historyLaw">
                                            History law
                                        </label>
                                    </div>

                                    <div className="form-check mb-2">
                                        <input
                                            className="form-check-input lm-check-in"
                                            type="checkbox"
                                            defaultValue={''}
                                            id="lawAndSociety" />
                                        <label
                                            className="form-check-label lm-check"
                                            htmlFor="lawAndSociety">
                                            Law and society
                                        </label>
                                    </div>


                                </div>
                                <br />
                                <div className="filter-title">
                                    <h2>Tags</h2>
                                </div>
                                <div className="book-filter-form mt-4 mb-3">
                                    <h5>Law & Order</h5>
                                    <h5>History</h5>
                                    <h5>Finance</h5>
                                </div>

                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div> */}
            </div>
        </>
    );
};

export default ContributeTextSiderbarComponent;
