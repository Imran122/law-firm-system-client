import React, { useState } from 'react';
import useAuth from '../../../../../../../../hooks/useAuth';

const SubAreaEditTopPostsSIngleItem = ({ data }) => {
    const [updateData, setUpdateData] = useState(data);
  const { user, subjectAreaPostData, setSubjectAreaPostData } = useAuth();

    const handleOnType = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...updateData };
        newData[field] = value;
        setUpdateData(newData);

        const newSubData = { ...subjectAreaPostData };

        for (let index = 0; index < newSubData['disputeResolutionList'].length; index++) {
            const element = newSubData['disputeResolutionList'][index];

            if (newData['_id']==element['_id']) {
                newSubData['disputeResolutionList'][index]=newData;
                break;
            }
        }
        setSubjectAreaPostData(newSubData)

    };
    return (
        <div className="col col-12 col-lg-6">
            <div className="lm-posts lm-posts3 p-2">
                <input type="text" className="form-control mt-2" name="disputeTitle" value={updateData.disputeTitle} onChange={handleOnType} />
                <textarea className="form-control mt-2" name="disputeText" value={updateData.disputeText} onChange={handleOnType}>
                </textarea>
            </div>
        </div>
    );
};

export default SubAreaEditTopPostsSIngleItem;