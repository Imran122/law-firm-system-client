import React, { useEffect, useState } from 'react';
import { Offcanvas, Modal, Button } from "react-bootstrap";
import { BsFilterSquareFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import useAuth from '../../../../../hooks/useAuth';
import { getCookie } from '../../../../../utilities/helper';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookContent = ({ hirarcyData, item, setHirarcyData, level }) => {

    const { contentItemContext, setContentItemContext } = useAuth();
    const { contributeItemContext, setContributeItemContext } = useAuth();

    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [add, setAdd] = useState(false);
    const [newSubContent, setNewSubContent] = useState(false);
    const [subContentTitle, setSubContentTitle] = useState("");
    const [subContentItem, setSubContentItem] = useState({});
    const [chapter, setChapter] = useState(false);
    const [content, setContent] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const editClose = () => setEdit(false);
    const editShow = () => setEdit(true);

    const addClose = () => setAdd(false);
    //toast
    const showToastMessage = () => {
        toast.success("data save successfully!", {
        position: toast.POSITION.TOP_RIGHT,
        });
    };
    const createSubContent = async () => {
        setAdd(false);
        console.log('sub content ', item);
        const response = await axios.post(
            `${process.env.REACT_APP_API}/api/contribute-content-create`,
            {
                contributeId: contributeItemContext?.contributeid,
                parentcontributecontentId: item._id,
                contentTitle: subContentTitle,
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
            console.log('response.data ', response.data);
            setSubContentItem(response.data);

            let xx = hirarcyData;

            if (hirarcyData[item._id] == undefined) {
                hirarcyData[item._id] = [response.data];
            } else {
                hirarcyData[item._id].push(response.data);

            }
            console.log('hirarcyData ', hirarcyData);
            setHirarcyData(hirarcyData)
            // setIsLoading(false);
            // navigate("/renter-pay/success", { replace: true });
        }
        setNewSubContent(true);
    };
    const [title, setTitle] = useState("");
    useEffect(() => {
        console.log('item.........',item)
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


    const addTitle = () => setAdd(true);

    const contentClose = () => setContent(false);
    const addContent = () => setContent(true);

    const chapterClose = () => setChapter(false);
    const addChapter = () => {
        setChapter(true);
    };

    const handelOnBlur = (e) => {
        const value = e.target.value;
        setSubContentTitle(value);
    };

    const contentOpen = (e) => {
        console.log("clickkkkkkkk...", item);
        setContentItemContext(item);
    }

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
                            onBlur={handelOnBlur}
                            placeholder="Enter title" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-notification" onClick={createSubContent}>
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
                            placeholder="Enter content name" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-notification" onClick={contentClose}>
                        Add Content
                    </Button>
                </Modal.Footer>
            </Modal>

            {
                level <= 1 ? <>
                    <Accordion className="lm-ar-accordion-lists con-acc-lists">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="ar-book-list-title">
                                <ul>
                                    <li>
                                        <span onClick={contentOpen}>{title}</span>
                                        <button onClick={editShow}>
                                            <BiEditAlt />
                                        </button>
                                        <button onClick={addTitle}>
                                            <AiOutlinePlusCircle />
                                        </button>
                                    </li>
                                </ul>

                            </Accordion.Header>
                            <Accordion.Body className="lm-sub-content-body">
                                {/* {
                            newSubContent && <BookContent
                                hirarcyData={true}
                                item={subContentItem}
                            />
                        } */}

                                {hirarcyData[item?._id] && hirarcyData[item?._id].map((item) => (
                                    <BookContent
                                        hirarcyData={hirarcyData}
                                        item={item}
                                        setHirarcyData={setHirarcyData}
                                        level={level + 1}
                                    />
                                ))}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </> : <>

                <div className="lm-ar-accordion-lists con-acc-lists">
                    <div eventKey="0">
                        <div className="ar-book-list-title">
                            <ul>
                                <li>
                                    <span onClick={contentOpen}>{item?.contentTitle}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                </>
            }

        </>
    );
};

export default BookContent;