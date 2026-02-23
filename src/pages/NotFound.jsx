import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { HiQuestionMarkCircle } from "react-icons/hi";

const NotFound = () => {
  return (
    <div>
      <Header />
      <div className="not-found-page">
        <HiQuestionMarkCircle className="not-found-page-question-mark" />
        <h1 className="not-found-page-title">
          Hmm, I think you're on the wrong page, since it does not exist...
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
