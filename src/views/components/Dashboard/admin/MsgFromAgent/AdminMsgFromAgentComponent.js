import {React, useState} from "react";
import { Button, Modal } from "react-bootstrap";
import "./MsgFromAgent.css";

const AdminMsgFromAgentComponent = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
        <div className="mt-1">
            {/* top performer */}
            <div className="msg-header">
                <h4 className="card-title card-title-dash">Message from Agent</h4>
            </div>
            {Array.from({ length: 4 }, (_, i) => 
            <article className="msg-card d-flex align-items-center mb-1" key={i}>
                <div>
                    <p className="fw-500 msg-title my-2" onClick={handleShow}>
                        Here is your message!
                    </p>
                    <Modal show={show} className="lm-modal" onHide={handleClose}>
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
                            <Button className="btn-notification" onClick={handleClose}>
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

export default AdminMsgFromAgentComponent;
