import {React, useState} from "react";
import { Button, Modal } from "react-bootstrap";
import "./MsgFromAgent.css";

const MsgFromAgentComponent = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

  return (
    <>
        <div className="mt-3">
            <Button className="btn-notification" onClick={handleShow}>
                Send notification
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Send a notification to user</Modal.Title>
                </Modal.Header>
                <form>
                <Modal.Body>
                
                    <div className="mb-3">
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Enter users email"/>
                    </div>
                    <div className="mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter subject name"/>
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" placeholder="Enter your message">

                        </textarea>
                    </div>
                
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-notification" onClick={handleClose}>
                        Send notification
                    </Button>
                </Modal.Footer>
                </form>
            </Modal>
        </div>
        <div className="mt-3">
            {/* top performer */}
            <div className="msg-header">
                <h4>Message From Agent</h4>
            </div>
            {Array.from({ length: 4 }, (_, i) => 
            <article className="msg-card d-flex align-items-center" key={i}>
                <div>
                    <p className="fw-500 msg-title my-2" onClick={handleShow2}>
                        Here is your message!
                    </p>
                    <Modal show={show2} className="lm-modal" onHide={handleClose2}>
                        <Modal.Header closeButton>
                            <Modal.Title>Message from agent</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            Hello User,<br/>
                                Thanks for your read books.
                                Thanks for your read books.
                                Thanks for your read books.
                                Thanks for your read books.
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="btn-notification" onClick={handleClose2}>
                                Thanks
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <p className="msg-point">
                        Author - 20m
                    </p>
                </div>
            </article>
            )}

        </div>
    </>
  );
};

export default MsgFromAgentComponent;
