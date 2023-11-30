import React from "react";
import { Accordion } from "react-bootstrap";
import useAuth from "../../../../../hooks/useAuth";
import useContributeSingleDataDetails from "../../../../../hooks/useContributeSingleDataDetails";
const PublicCaseDetailsContent = ({
  hirarcyData,
  item,
  level,
  setCaseItemContent,
}) => {
  const { caseDetailsData, setCaseDetailsData } = useAuth();
  const contentOpen = (e) => {
    setCaseItemContent(item);
    setCaseDetailsData(item);
  };

  return (
    <>
      {level <= 1 ? (
        <>
          <Accordion defaultActiveKey="0" className="lm-ar-accordion-lists">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="ar-book-list-title">
                <span onClick={contentOpen}>{item?.contentTitle}</span>
              </Accordion.Header>
              <Accordion.Body>
                {hirarcyData[item?._id] &&
                  hirarcyData[item?._id].map((item) => (
                    <PublicCaseDetailsContent
                      key={item._id}
                      hirarcyData={hirarcyData}
                      item={item}
                      level={level + 1}
                      setCaseItemContent={setCaseItemContent}
                    />
                  ))}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
      ) : (
        <>
          <div className="lm-ar-accordion-lists">
            <div className="ar-book-list-title">
              <span onClick={contentOpen}>{item?.contentTitle}</span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PublicCaseDetailsContent;
