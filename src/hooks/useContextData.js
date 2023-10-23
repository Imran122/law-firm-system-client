import { useState } from "react";
import { getLocalStorage, isAuth } from "../utilities/helper";

const useContextData = () => {
  const [user, setUser] = useState(isAuth());
  const [isLoading, setIsLoading] = useState(false);
  const [upgrageMembershipPlan, setUpgrageMembershipPlan] = useState([]);
  const [membershipPaymentData, setMembershipPaymentData] = useState([]);
  const [authError, setAuthError] = useState("");
  const [authSuccess, setAuthSuccess] = useState("");
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");
  const [contentItemContext, setContentItemContext] = useState({});
  const [contributeItemContext, setContributeItemContext] = useState({
    contributeid: getLocalStorage("contributeItem"),
  });
  const [packageTotalWhileAdd, setPackageTotalWhileAdd] = useState(0);
  const [packageChargeTimeName, setPackageChargeTimeName] = useState([]);
  const [packageDataInfo, setPackageDataInfo] = useState([]);
  const [caseDetailsData, setCaseDetailsData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [subjectAreaPostData, setSubjectAreaPostData] = useState({
    disputeResolutionList: [],
    featuredList: [],
  });
  //car rent upload data state

  return {
    user,
    setUser,
    token,
    isLoading,
    setIsLoading,
    authError,
    setAuthError,
    authSuccess,
    setAuthSuccess,
    admin,
    setAdmin,

    contentItemContext,
    setContentItemContext,

    upgrageMembershipPlan,
    setUpgrageMembershipPlan,
    packageTotalWhileAdd,
    setPackageTotalWhileAdd,

    membershipPaymentData,
    setMembershipPaymentData,
    packageChargeTimeName,
    setPackageChargeTimeName,

    contributeItemContext,
    setContributeItemContext,
    packageDataInfo,
    setPackageDataInfo,
    caseDetailsData,
    setCaseDetailsData,
    searchResult,
    setSearchResult,
    subjectAreaPostData,
    setSubjectAreaPostData,
  };
};

export default useContextData;
