import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import useAuth from "../../../../../hooks/useAuth";
const SubAreaDisputeModalComponent = ({ setDisputeShow }) => {
  const { user, subjectAreaPostData, setSubjectAreaPostData } = useAuth();
  const [temp, setTemp] = useState({});
  const handleOnType = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...temp };
    newData[field] = value;
    setTemp(newData);
  };

  const submitData = (e) => {
    e.preventDefault();
    let items = { ...subjectAreaPostData };
    console.log("ii", items);
    if (items) {
      items["disputeResolutionList"].push(temp);

      setSubjectAreaPostData(items);
    }

    //console.log("disputeResolutionList", data);
    setDisputeShow(false);
  };

  return (
    <>
      <form onSubmit={submitData}>
        <Modal.Body>
          <div className="mb-3">
            <input
              type="text"
              name="disputeTitle"
              onChange={handleOnType}
              className="form-control lm-border"
              placeholder="Enter Dispute Title"
            />
          </div>
          <div className="mb-3">
            <textarea
              name="disputeText"
              onChange={handleOnType}
              className="form-control lm-border"
              placeholder="Enter your dispute here..."
            ></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={submitData} className="btn-savve">
            Save Changes
          </button>
        </Modal.Footer>
      </form>
    </>
  );
};

export default SubAreaDisputeModalComponent;
