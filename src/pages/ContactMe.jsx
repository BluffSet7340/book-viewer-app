import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import reactIcon from "../assets/react.png";
import googleBookIcon from "../assets/google-book-icon.jpg";
import viteIcon from "../assets/icons8-vite-500.png";

const ContactMe = () => {
  return (
    <div>
      <Header />
      <div className="contact-me-page">
        <p className="contact-me-desc">
          There is no reason for me to have this page just wanted to add it
          anyways to show that yea I can handle multi page routing within a
          single page application xD.
        </p>
        <div className="card-collection">
        <div className="card">
          {/* setting the width of 100% tells the image to take the maximum
          width possible inside of its parent container */}
          <img
            className="tech-icon"
            src={reactIcon}
            alt="icon of react"
            style={{ width: "100%" }}
          />
          <div className="card-container">
            <h2>
              <b>React</b>
            </h2>
            <p>Used for the Frontend</p>
          </div>
        </div>
          <div className="card">
            {/* setting the width of 100% tells the image to take the maximum
          width possible inside of its parent container */}
            <img
              className="tech-icon"
              src={viteIcon}
              alt="icon of vite"
              style={{ width: "100%" }}
            />
            <div className="card-container">
              <h2>
                <b>Vite</b>
              </h2>
              <p>The Build Tool for the Web!</p>
            </div>
          </div>
          <div className="card">
            {/* setting the width of 100% tells the image to take the maximum
          width possible inside of its parent container */}
            <img
              className="tech-icon"
              src={googleBookIcon}
              alt="icon of vite"
              style={{ width: "100%" }}
            />
            <div className="card-container">
              <h2>
                <b>Google Books API</b>
              </h2>
              <p>Access and display information of books</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactMe;
