import axios from "axios";
import React, { useEffect, useState } from "react";
import { DefaultEditor } from "react-simple-wysiwyg";
import useAuth from "../../../../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddBook.css";
import { getCookie } from "../../../../../utilities/helper";

const ContributeTextFormComponent = () => {
  //toast
  const showToastMessage = () => {
    toast.success("data save successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const { contentItemContext, setContentItemContext } = useAuth();

  const [html, setHtml] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [html, setHtml] = useState('');

  useEffect(() => {
    console.log("data text", contentItemContext);
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
  const savecontent = async (e) => {
    e.preventDefault();
    console.log("mm", contentItemContext);

    const response = await axios.put(
      `${process.env.REACT_APP_API}/api/contribute-content-update`,
      {
        contributecontentId: contentItemContext?._id,
        content: content,
        contentTitle: title,
      },

      {
        headers: {
          // authorization: `Bearer ${getCookie("token")}`,
          "Authorization": `Bearer ${getCookie("token")}`
        },
      }
    );

    if (response.status === 200) {
      showToastMessage();
      console.log("response.data after content update ", response.data);
    }
  };

  return (
    <>
      <div className="add-books-form">
        <ToastContainer />
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
              // value={contentItemContext?.contentTitle}
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

export default ContributeTextFormComponent;
