import React, { useState } from 'react';
import { HiUserGroup } from "react-icons/hi";
import useAuth from '../../../../../../../../hooks/useAuth';
const SubAreaEditFeaturePostsSingleItem = ({data}) => {
    const [updateData, setUpdateData] = useState(data);
    const { user, subjectAreaPostData, setSubjectAreaPostData } = useAuth();
  
      const handleOnType = (e) => {
          const field = e.target.name;
          const value = e.target.value;
          const newData = { ...updateData };
          newData[field] = value;
          setUpdateData(newData);
  
          const newSubData = { ...subjectAreaPostData };
  
          for (let index = 0; index < newSubData['featuredList'].length; index++) {
              const element = newSubData['featuredList'][index];
  
              if (newData['_id']==element['_id']) {
                  newSubData['featuredList'][index]=newData;
                  break;
              }
          }
          setSubjectAreaPostData(newSubData)
  
      };
    return (

        <div className="col col-12 col-lg-4">
            <div
                className="d-flex flex-column justify-content-center align-items-center lm-feature"
                style={{ backgroundColor: "rgba(20, 195, 142, 0.2)" }}
            >
                <span>
                    <HiUserGroup size={5} />
                </span>
                <input type="text" className="form-control mt-2" name="featuredTitle" value={updateData.featuredTitle} onChange={handleOnType} />
                <textarea className="form-control mt-2" name="featuredText" value={updateData.featuredText} onChange={handleOnType} >
                </textarea>
            </div>
        </div>

    );
};

export default SubAreaEditFeaturePostsSingleItem;