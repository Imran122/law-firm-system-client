import React from "react";
import { Accordion } from "react-bootstrap";
import PublicCaseDetailsContent from "./PublicCaseDetailsContent";

const PublicCaseLawDetailsChapter = ({
  hirarcyData,
  item,
  setCaseItemContent,
}) => {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>{item?.contentTitle}</Accordion.Header>
          <Accordion.Body>
            {hirarcyData[item._id] &&
              hirarcyData[item._id].map((item) => (
                <PublicCaseDetailsContent
                  key={item._id}
                  hirarcyData={hirarcyData}
                  item={item}
                  level={1}
                  setCaseItemContent={setCaseItemContent}
                />
              ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default PublicCaseLawDetailsChapter;
