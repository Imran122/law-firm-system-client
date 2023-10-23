import { React, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import lawGroup from "../../../../../../assets/images/law-group.png";
import defaultMember from "../../../../../../assets/images/default-member.png";
import "../Membership.css";
import { ToastContainer, toast } from "react-toastify";
import { getCookie } from "../../../../../../utilities/helper";

const MemberListsComponent = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState({});
    const [allmember, setAllmember] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleOnType = (e) => {
        const value = e.target.value;
        setEmail({ email: value });
    };

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API}/api/all-member`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${getCookie("token")}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setAllmember(data)
            });
    }, []);

    const handleAddMember = (e) => {
        // const searchText = e.target.value;
        e.preventDefault();
        setShow(false);
        console.log(email);
        fetch(`${process.env.REACT_APP_API}/api/memberadd`, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                authorization: `Bearer ${getCookie("token")}`,
            },
            body: JSON.stringify(email),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('data', data);
                if (data.allmember.length> allmember.length) {
                    setAllmember(data.allmember)
                }
                toast.success(data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                  });
            })
            .catch((err) => {
                console.log('err', err);
            })
    };

    const memberRemove = (e) => {
        // const searchText = e.target.value;
        const value = e.target.value;
        console.log(value)
        fetch(`${process.env.REACT_APP_API}/api/delete-member?memberId=${value}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${getCookie("token")}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('data delte',data);
                // setAllmember(data)
                let tempvalue = [...allmember];

                tempvalue = tempvalue.filter(item => item._id != value);

                setAllmember(tempvalue)
            });
    };
    const bocomeAgent = (e) => {
        // const searchText = e.target.value;
        const value = e.target.value;
        console.log(value)
        fetch(`${process.env.REACT_APP_API}/api/become-agent`, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${getCookie("token")}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('data delte',data);
                // setAllmember(data)
                toast.success(data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                  });
            });
    };
    return (
        <>
        <ToastContainer />

            <div className="row">
                <div className="col col-12 col-lg-12">
                    <button className="btn-add-member" onClick={bocomeAgent}>
                        Become a agent
                    </button>
                    <div className="member-tbl mt-3">
                        <div className="row agents-tbl">
                            <div className="col col-3 col-lg-2">
                                <img src={lawGroup} alt="Group" />
                            </div>
                            <div className="col col-9 col-lg-4">
                                <h3>YIT LAW GROUP</h3>
                                <p>82 People · Agent since 2018 <span className="agent-tab">AGENTS</span></p>
                            </div>
                            <div className="col col-6 col-lg-3 mb-3">
                                <button className="btn-edit-member">
                                    Edit informations
                                </button>
                            </div>
                            <div className="col col-6 col-lg-3">
                                <button className="btn-add-member" onClick={handleShow}>
                                    Add a Member
                                </button>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Add a Member</Modal.Title>
                                    </Modal.Header>
                                    <form>
                                        <Modal.Body>

                                            <div className="mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="email"
                                                    onChange={handleOnType}
                                                    placeholder="Email" />
                                            </div>

                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button className="btn-invite-member" onClick={handleAddMember}>
                                                Invite Member
                                            </Button>
                                        </Modal.Footer>
                                    </form>
                                </Modal>
                            </div>
                        </div>
                        <h2 className="mt-3">All Members</h2>
                        {allmember.map((item) => (
                        <div className="member-lists mt-4" key={item._id}>
                            <div className="row">
                                <div className="col col-2 col-lg-2">
                                    <img src={defaultMember} alt="User" />
                                </div>
                                <div className="col col-6 col-lg-7">
                                    <h3>{item.firstname}</h3>
                                    <p>Member since {item.createdAt}</p>
                                </div>
                                <div className="col col-4 col-lg-3">
                                    <button className="btn-remove-member" value={item._id} onClick={memberRemove}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
};

export default MemberListsComponent;
