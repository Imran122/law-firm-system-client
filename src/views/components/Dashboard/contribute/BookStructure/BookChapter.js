import React, { useEffect, useState } from 'react';
import { Offcanvas, Modal, Button } from "react-bootstrap";
import { BsFilterSquareFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Accordion from 'react-bootstrap/Accordion';
import BookContent from './BookContent';
import axios from 'axios';
import useAuth from '../../../../../hooks/useAuth';
import "./BooksStructure.css"
import { getCookie } from '../../../../../utilities/helper';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BookChapter = ({ hirarcyData, item, setHirarcyData }) => {

    const { contentItemContext, setContentItemContext } = useAuth();
    const { contributeItemContext, setContributeItemContext } = useAuth();

    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [add, setAdd] = useState(false);
    const [chapter, setChapter] = useState(false);
    const [content, setContent] = useState(false);

    const [newContent, setNewContent] = useState(false);
    const [contentTitle, setContentTitle] = useState("");
    const [contentItem, setContentItem] = useState({});

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
    const showToastMessage = () => {
        toast.success("data save successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
    };
    const createContent = async () => {
        setContent(false);
        console.log('book chapter ', item);
        const response = await axios.post(
            `${process.env.REACT_APP_API}/api/contribute-content-create`,
            {
                contributeId: contributeItemContext?.contributeid,
                parentcontributecontentId: item._id,
                contentTitle: contentTitle,
                content: ""
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
            if (hirarcyData[item._id] == undefined) {
                hirarcyData[item._id] = [response.data];
            } else {
                hirarcyData[item._id].push(response.data);

            }
            setHirarcyData(hirarcyData)
            console.log('hirarcyData ', hirarcyData);
            // setIsLoading(false);
            // navigate("/renter-pay/success", { replace: true });
        }
        setNewContent(true);
    };

    const handelOnBlur = (e) => {
        const value = e.target.value;
        setContentTitle(value);
    };

    const contentOpen = (e) => {
        console.log("clickkkkkkkk");
        setContentItemContext(item);
    }

    const [title, setTitle] = useState("");
    useEffect(() => {
        console.log('item.........', item)
        setTitle(
            item?.contentTitle === undefined
                ? ""
                : item?.contentTitle
        );
    }, [item]);
    function onChangeTitle(e) {
        setTitle(e.target.value);
    }
    const updateTitle = async () => {
        setEdit(false);
        const response = await axios.put(
            `${process.env.REACT_APP_API}/api/contribute-content-update`,
            {
                contributecontentId: item?._id,
                content: item?.content,
                contentTitle: title,
            },

            {
                headers: {
                    "Authorization": `Bearer ${getCookie("token")}`
                },
            }
        );

        if (response.status === 200) {
            showToastMessage();
            item.contentTitle=title
 
            const newData = { ...contentItemContext };
            newData["contentTitle"] = title;
            setContentItemContext(newData);
            
            console.log("response.data after content update ", response.data);
        }
    };

    return (
        <>
            <ToastContainer />

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
                            placeholder="Enter title" 
                            value={title}
                            onChange={onChangeTitle}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-notification" onClick={updateTitle}>
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
                show={content}
                onHide={contentClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Content</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            onBlur={handelOnBlur}
                            placeholder="Enter content name" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-notification" onClick={createContent}>
                        Add Content
                    </Button>
                </Modal.Footer>
            </Modal>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <ul className="lmbooksContent">

                            <li>
                                <span onClick={contentOpen}>{title}</span>
                                <button onClick={editShow} className="cEdit">
                                    <BiEditAlt />
                                </button>
                            </li>
                            <li className="mt-2">
                                <button className="btn-add-member" onClick={addContent}>
                                    <AiOutlinePlusCircle /> Add new content
                                </button>
                            </li>
                        </ul>
                    </Accordion.Header>
                    <Accordion.Body>


                        {hirarcyData[item._id] && hirarcyData[item._id].map((item) => (
                            <BookContent
                                hirarcyData={hirarcyData}
                                item={item}
                                setHirarcyData={setHirarcyData}
                                level={1}
                            />
                        ))}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

export default BookChapter;