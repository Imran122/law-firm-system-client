import React from "react";
import PublicHeaderComponent from "../../../components/PublicLayout/PublicHeaderComponent";
import PublicFooterComponent from "../../../components/PublicLayout/PublicFooterComponent";
import PublicBooksRouteComponent from "../../../components/PublicComponent/BooksComponent/PublicBooksRouteComponent";

const PublicBooks = () => {
  return (
    <>
      <PublicHeaderComponent />
      <PublicBooksRouteComponent/>
      <PublicFooterComponent/>
    </>
  );
};

export default PublicBooks;