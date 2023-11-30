import React from 'react';
import { Accordion } from 'react-bootstrap';
import PublicBookDetailsContent from './PublicBookDetailsContent';

const PublicBookDetailsChapter = ({ hirarcyData, item, setBookItemContent}) => {
    return (
        <>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{item?.contentTitle}</Accordion.Header>
                    <Accordion.Body>
                            {hirarcyData[item._id] && hirarcyData[item._id].map((item) => (
                            <PublicBookDetailsContent
                                hirarcyData={hirarcyData}
                                item={item}
                                level={1}
                                setBookItemContent={setBookItemContent}
                            />
                        ))}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

export default PublicBookDetailsChapter;