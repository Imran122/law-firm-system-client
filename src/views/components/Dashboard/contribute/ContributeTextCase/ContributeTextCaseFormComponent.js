import React, { useEffect, useState } from "react";
import { DefaultEditor } from "react-simple-wysiwyg";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../../../hooks/useAuth";
import "./CaseLaw.css";
import axios from "axios";
import { getCookie } from "../../../../../utilities/helper";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContributeTextCaseFormComponent = () => {
  //toast
  const showToastMessage = () => {
    toast.success("data save successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const {
    contentItemContext,
    contributeItemContext,
    setContentItemContext,
    isLoading,
    setIsLoading,
  } = useAuth();

  const [html, setHtml] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [html, setHtml] = useState('');

  // modal state start

  const [summary, setSummary] = useState(false);
  const summaryClose = () => setSummary(false);
  const summaryShow = () => setSummary(true);

  const [headnotes, setHeadnotes] = useState(false);
  const headnotesClose = () => setHeadnotes(false);
  const headnotesShow = () => setHeadnotes(true);

  const [opinions, setOpinions] = useState(false);
  const opinionsClose = () => setOpinions(false);
  const opinionsShow = () => setOpinions(true);

  // modal state end

  useEffect(() => {
    setTitle(
      contentItemContext?.contentTitle === undefined
        ? ""
        : contentItemContext?.contentTitle
    );
    setContent(
      contentItemContext?.content === undefined
        ? ""
        : contentItemContext?.content
    );
  }, [contentItemContext]);
  function onChangeContent(e) {
    setContent(e.target.value);
  }

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }
  //console.log("contributeItemContextxxx ", contributeItemContext.contributeid);
  //my work for headnotes stuff *************

  const [editData, setEditData] = useState(null);
  const dataGetForEdit = (id, effect) => {
    if (summary === false && effect === "summary") {
      setSummary(true);
    } else if (headnotes === false && effect === "headnotes") {
      setHeadnotes(true);
    } else if (opinions === false && effect === "opinions") {
      setOpinions(true);
    }

    fetch(`${process.env.REACT_APP_API}/api/headnotes-edit-data`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": `Bearer ${getCookie("token")}`,
        id: id,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 401) {
          navigate("/dashboard/contribute-text-upload-case-law", {
            replace: true,
          });
        }
      })
      .then((data) => {
        //localStorage.setItem("car", JSON.stringify(data));
        //console.log("%%%%%", data);
        setEditData(data);
      });
  };
  //console.log("0000---", editData);
  const navigate = useNavigate();
  const [updateData, setUpdateData] = useState([]);
  const handleOnType = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...updateData };
    newData[field] = value;
    setUpdateData(newData);
  };
  //console.log("cc", updateData);

  const updateHeadNote = (e) => {
    if (summary === true) {
      setSummary(false);
    } else if (headnotes === true) {
      setHeadnotes(false);
    } else if (opinions === true) {
      setOpinions(false);
    }

    setIsLoading(true);
    const id = contributeItemContext?.contributeid;
    let caseHeadNotes = updateData?.caseHeadNotes;
    let caseSummary = updateData?.caseSummary;
    let caseOpinions = updateData?.caseOpinions;
    const datas = {
      id: id,
      caseHeadNotes: caseHeadNotes,
      caseSummary: caseSummary,
      caseOpinions: caseOpinions,
    };
    const url = `${process.env.REACT_APP_API}/api/update-head-notes`;
    //update data by call api
    axios
      .put(url, datas, {
        headers: {
          // "Content-type": "application/json; charset=UTF-8",
          "Authorization": `Bearer ${getCookie("token")}`
        },
      })

      .then((response) => {
        if (response.status === 200) {
          setIsLoading(false);
          navigate("/dashboard/contribute-text-upload-case-law", {
            replace: true,
          });
        } else if (response.status === 401) {
          navigate("/", { replace: true });
        }
      });
  };
  //my work for headnotes stuff *************************

  const savecontent = async (e) => {
    e.preventDefault();
    //console.log(contentItemContext);

    const response = await axios.put(
      `${process.env.REACT_APP_API}/api/contribute-content-update`,
      {
        contributecontentId: contentItemContext?._id,
        content: content,
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
      console.log("response.data after content update ", response.data);
    }
  };
  //console.log("tex:*******", contentItemContext);
  return (
    <>
      <div className="add-books-form">
        <ToastContainer />
        <div className="add-articles mb-3">
          <button
            className="navbar-list-btn-primary"
            onClick={() =>
              dataGetForEdit(contributeItemContext?.contributeid, "summary")
            }
          >
            SUMMARY
          </button>
          <button
            className="navbar-list-btn-primary"
            onClick={() =>
              dataGetForEdit(contributeItemContext?.contributeid, "headnotes")
            }
          >
            HEADNOTES
          </button>
          <button
            className="navbar-list-btn-primary"
            onClick={() =>
              dataGetForEdit(contributeItemContext?.contributeid, "opinions")
            }
          >
            OPINIONS
          </button>

          <Modal show={summary} onHide={summaryClose}>
            <Modal.Header closeButton>
              <Modal.Title>Summary</Modal.Title>
            </Modal.Header>
            <form onSubmit={updateHeadNote}>
              <Modal.Body>
                <div className="mb-3">
                  <textarea
                    name="caseSummary"
                    onChange={handleOnType}
                    defaultValue={editData?.caseSummary}
                    className="form-control"
                    placeholder="Enter your summary here..."
                  ></textarea>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button className="btn-savve" onClick={() => updateHeadNote()}>
                  Save Changes
                </button>
              </Modal.Footer>
            </form>
          </Modal>

          <Modal show={headnotes} onHide={headnotesClose}>
            <Modal.Header closeButton>
              <Modal.Title>Headnotes</Modal.Title>
            </Modal.Header>
            <form onSubmit={updateHeadNote}>
              <Modal.Body>
                <div className="mb-3">
                  <textarea
                    name="caseHeadNotes"
                    className="form-control"
                    defaultValue={editData?.caseHeadNotes}
                    onChange={handleOnType}
                    placeholder="Enter your headnotes here..."
                  ></textarea>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button className="btn-savve" onClick={() => updateHeadNote()}>
                  Save Changes
                </button>
              </Modal.Footer>
            </form>
          </Modal>

          <Modal show={opinions} onHide={opinionsClose}>
            <Modal.Header closeButton>
              <Modal.Title>Opinions</Modal.Title>
            </Modal.Header>
            <form onSubmit={updateHeadNote}>
              <Modal.Body>
                <div className="mb-3">
                  <textarea
                    name="caseOpinions"
                    onChange={handleOnType}
                    defaultValue={editData?.caseOpinions}
                    className="form-control"
                    placeholder="Enter your opinions here..."
                  ></textarea>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button className="btn-savve" onClick={() => updateHeadNote()}>
                  Save Changes
                </button>
              </Modal.Footer>
            </form>
          </Modal>
        </div>
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control lm-border"
              id="exampleTitle"
              placeholder="Enter a title"
              value={title}
              onChange={onChangeTitle}
            />
          </div>
          <div className="mb-3 lmtextEditorF">
            <DefaultEditor
              value={content}
              onChange={onChangeContent}
              className="lmtextEditor"
              placeholder="Write an article..."
            />
          </div>
          <div className="row">
            <div className="col col-12 col-lg-4"></div>
            <div className="col col-12 col-lg-4">
              <button className="btn-save-content" onClick={savecontent}>
                Save content
              </button>
            </div>
            <div className="col col-12 col-lg-4"></div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContributeTextCaseFormComponent;
