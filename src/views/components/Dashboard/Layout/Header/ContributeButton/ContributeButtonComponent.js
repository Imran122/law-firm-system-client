import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import BooksModalComponent from "./BooksModalComponent";
import InsightModalComponent from "./InsightModalComponent";
import CaseLawModalComponent from "./CaseLawModalComponent";
import JournalArtModalComponent from "./JournalArtModalComponent";
import SubjectAreaModalComponent from "./SubjectAreaModalComponent";
import LawsModalComponent from "./LawsModalComponent";

const ContributeButtonComponent = (props) => {
  const [selection, setSelection] = useState("");

  const [contribute, setContribute] = useState(false);

  const closeContribute = () => setContribute(false);
  const addContribute = () => setContribute(true);

  const [contributeBook, setContributeBook] = useState(false);
  const closeConBook = () => setContributeBook(false);

  const [contributeCaseLaw, setContributeCaseLaw] = useState(false);
  const closeConCaseLaw = () => setContributeCaseLaw(false);

  const [contributeInsight, setContributeInsight] = useState(false);
  const closeConInsight = () => setContributeInsight(false);

  const [contributeJournalArticle, setContributeJournalArticle] =
    useState(false);
  const closeConJournalArticle = () => setContributeJournalArticle(false);

  const [contributeSubjectArea, setContributeSubjectArea] = useState(false);
  const closeConSubjectArea = () => setContributeSubjectArea(false);

  const [contributeLaws, setContributeLaws] = useState(false);
  const closeConLaws = () => setContributeLaws(false);

  const navigate = useNavigate();
  
  const onNext = () => {
    setContribute(false);
    switch (selection) {
      case "books":
        setContributeBook(true);
        break;
      case "insights":
        setContributeInsight(true);
        break;
      case "caseLaw":
        setContributeCaseLaw(true);
        break;
      case "journalArticle":
        setContributeJournalArticle(true);
        break;
      case "subjectArea":
        // setContributeSubjectArea(true);
        navigate("/dashboard/contribute-text-upload-sub-area", {
          replace: true,
        });
        break;
      case "laws":
        setContributeLaws(true);
        break;
      default:
        break;
    }
  };

  const handleType = (e) => {
    const value = e.value;
    setSelection(value);
  };

  const options = [
    { value: "books", label: "Books" },
    { value: "caseLaw", label: "Case Law" },
    { value: "insights", label: "Insights" },
    { value: "journalArticle", label: "Journal Article" },
    { value: "subjectArea", label: "Subject Area" },
    { value: "laws", label: "Laws" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "#fff",
      borderColor: "#eaecf0",
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: "#eaecf0",
      },
    }),
  };

  return (
    <>
      <button className="navbar-list-btn-primary" onClick={addContribute}>
        Contribute
      </button>
      <Modal
        show={contribute}
        onHide={closeContribute}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="whatToAdd" className="form-label">
              What to add
            </label>

            <Select
              options={options}
              styles={customStyles}
              onChange={handleType}
              required
              id="whatToAdd"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn-next" onClick={onNext}>
            Next
          </button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={contributeBook}
        onHide={closeConBook}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <BooksModalComponent setContributeBook={setContributeBook} />
        <Modal.Footer>
          {/* <Link
            to={"/dashboard/contribute-text-upload"}
            className="btn-next"
            onClick={closeConBook}
          >
            Submit Contribution
          </Link> */}
        </Modal.Footer>
      </Modal>

      <Modal
        show={contributeCaseLaw}
        onHide={closeConCaseLaw}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <CaseLawModalComponent setContributeCaseLaw={setContributeCaseLaw} />
        {/* <Modal.Footer>
          <Link
            to={"/dashboard/contribute-text-upload-case-law"}
            className="btn-next"
            onClick={closeConCaseLaw}
          >
            Submit Contribution
          </Link>
        </Modal.Footer> */}
      </Modal>

      <Modal
        show={contributeInsight}
        onHide={closeConInsight}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <InsightModalComponent setContributeInsight={setContributeInsight} />
        {/* <Modal.Footer>
          <Link
            to={"/dashboard/contribute-text-upload"}
            className="btn-next"
            onClick={closeConInsight}
          >
            Submit Contribution
          </Link>
      </Modal.Footer> */}
      </Modal>

      <Modal
        show={contributeJournalArticle}
        onHide={closeConJournalArticle}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <JournalArtModalComponent
          setContributeJournalArticle={setContributeJournalArticle}
        />
      </Modal>

      <Modal
        show={contributeSubjectArea}
        onHide={closeConSubjectArea}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <SubjectAreaModalComponent
          setContributeSubjectArea={setContributeSubjectArea}
        />
      </Modal>

      <Modal
        show={contributeLaws}
        onHide={closeConLaws}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <LawsModalComponent setContributeLaws={setContributeLaws} />
      </Modal>
    </>
  );
};

export default ContributeButtonComponent;
