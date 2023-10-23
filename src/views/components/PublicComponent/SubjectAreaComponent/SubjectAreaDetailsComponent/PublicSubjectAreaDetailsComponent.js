import React, { useEffect, useState } from "react";
import PublicSubjectAreaTopPostsComponent from "./SubjectAreaTopPosts/PublicSubjectAreaTopPostsComponent";
import PublicSubjectAreaFeaturedComponent from "./SubjectAreaFeaturedComponent/PublicSubjectAreaFeaturedComponent";
import PublicSubjectAreaHomeTabsComponent from "./SubjectAreaHomeTabs/PublicSubjectAreaHomeTabsComponent";
import PublicSubjectAreaHistoryComponent from "./SubjectAreaHistory/PublicSubjectAreaHistoryComponent";

import { useParams } from "react-router-dom";
import { getCookie } from "../../../../../utilities/helper";

const PublicSubjectAreaDetailsComponent = () => {
  const { id } = useParams();

  const [subjectAreaDetails, setSubjectAreaDetails] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/subject-details-data?id=${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSubjectAreaDetails(data.result);
      });
  }, [id]);

  return (
    <>
      <PublicSubjectAreaTopPostsComponent
        subjectAreaDetails={subjectAreaDetails}
      />
      <PublicSubjectAreaFeaturedComponent
        subjectAreaDetails={subjectAreaDetails}
      />
      <PublicSubjectAreaHomeTabsComponent
        subjectAreaDetails={subjectAreaDetails}
      />
      <PublicSubjectAreaHistoryComponent
        subjectAreaDetails={subjectAreaDetails}
      />
    </>
  );
};

export default PublicSubjectAreaDetailsComponent;
