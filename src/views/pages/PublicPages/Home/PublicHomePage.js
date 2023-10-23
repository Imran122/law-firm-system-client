import React from "react";

import PublicHeaderComponent from "../../../components/PublicLayout/PublicHeaderComponent";
import PublicHomeBannerComponent from "../../../components/PublicComponent/Home/HomeBanner/PublicHomeBannerComponent";
import PublicTopPostComponent from "../../../components/PublicComponent/Home/TopPosts/PublicTopPostComponent";
import PublicHomeFeaturedComponent from "../../../components/PublicComponent/Home/HomeFeatured/PublicHomeFeaturedComponent";
import PublicHomeTabsComponent from "../../../components/PublicComponent/Home/HomeTabs/PublicHomeTabsComponent";
import PublicHomeHistoryComponent from "../../../components/PublicComponent/Home/HomeHistory/PublicHomeHistoryComponent";
import PublicFooterComponent from "../../../components/PublicLayout/PublicFooterComponent";

const PublicHomePage = () => {
  return (
    <>
      <PublicHeaderComponent />
      <PublicHomeBannerComponent/>
      <PublicTopPostComponent />
      <PublicHomeFeaturedComponent/>
      <PublicHomeTabsComponent/>
      <PublicHomeHistoryComponent/>
      <PublicFooterComponent/>
    </>
  );
};

export default PublicHomePage;