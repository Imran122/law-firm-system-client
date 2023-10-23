import React from "react";
import Accordion from "react-bootstrap/Accordion";
const PublicInsightDetailsContent = ({
  hirarcyData,
  item,
  level,
  setArticleItemContent,
}) => {
  const contentOpen = (e) => {
    //console.log('clickkkkkkk')
    setArticleItemContent(item);
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
                    <PublicInsightDetailsContent
                      key={item._id}
                      hirarcyData={hirarcyData}
                      item={item}
                      level={level + 1}
                      setArticleItemContent={setArticleItemContent}
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

export default PublicInsightDetailsContent;
