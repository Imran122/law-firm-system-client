import React from "react";
import { Accordion } from "react-bootstrap";
import PublicLawsDetailsContent from "./PublicLawsDetailsContent";
const PublicLawsDetailsChapter = ({
  hirarcyData,
  item,
  setArticleItemContent,
}) => {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>{item?.contentTitle}</Accordion.Header>
          <Accordion.Body>
            {hirarcyData[item._id] &&
              hirarcyData[item._id].map((item) => (
                <PublicLawsDetailsContent
                  key={item._id}
                  hirarcyData={hirarcyData}
                  item={item}
                  level={1}
                  setArticleItemContent={setArticleItemContent}
                />
              ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default PublicLawsDetailsChapter;
