import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import useAuth from "../../../../../hooks/useAuth";

const SubAreaFeatureModalComponent = ({ setFeatureShow }) => {
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
    items["featuredList"].push(temp);

    setSubjectAreaPostData(items);
    //console.log("disputeResolutionList", data);
    setFeatureShow(false);
  };
  return (
    <>
      <form onSubmit={submitData}>
        <Modal.Body>
          <div className="mb-3">
            <input
              type="text"
              name="featuredTitle"
              onChange={handleOnType}
              className="form-control lm-border"
              placeholder="Enter Feature Title"
            />
          </div>
          <div className="mb-3">
            <textarea
              name="featuredText"
              onChange={handleOnType}
              className="form-control lm-border"
              placeholder="Enter your feature here..."
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

export default SubAreaFeatureModalComponent;
