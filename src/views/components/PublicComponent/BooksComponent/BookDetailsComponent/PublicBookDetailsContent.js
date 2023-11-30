import React from 'react';
import { Accordion } from 'react-bootstrap';

const PublicBookDetailsContent = ({ hirarcyData, item, level, setBookItemContent }) => {

    const contentOpen = (e) => {
        //console.log('clickkkkkkk')
        setBookItemContent(item);
    }
    return (
        <>

            {
                level <= 1 ? <>
                    <Accordion defaultActiveKey="0" className="lm-ar-accordion-lists">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="ar-book-list-title">
                                <span onClick={contentOpen}>{item?.contentTitle}</span>

                            </Accordion.Header>
                            <Accordion.Body>
                                {hirarcyData[item?._id] && hirarcyData[item?._id].map((item) => (
                                    <PublicBookDetailsContent
                                        hirarcyData={hirarcyData}
                                        item={item}
                                        level={level + 1}
                                        setBookItemContent={setBookItemContent}
                                    />
                                ))}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </> : <>

                    <div className="lm-ar-accordion-lists">
                            <div className="ar-book-list-title">
                                <span onClick={contentOpen}>{item?.contentTitle}</span>
                            </div>
                    </div>
                </>
            }

        </>
    );
};

export default PublicBookDetailsContent;