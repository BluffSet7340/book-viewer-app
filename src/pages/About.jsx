import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import reactIcon from "../assets/react.png";
import googleBookIcon from "../assets/google-book-icon.jpg";
import viteIcon from "../assets/icons8-vite-500.png";

const About = () => {
  return (
    <div className="about-me-page">
      <Header />
      <div className="container">
        <p className="about-me-desc">
          <span className="hi">Hi,</span> I am a fresh computer science graduate
          from the American University of Sharjah. In an effort to increase my
          employability in the current job market. I am currently working on my
          frontend skills (React) and also backend skills (Database, APIs) so
          that I find a good job inshallah
        </p>
        <h2 className="tech-used">Technologies</h2>
        {/* Make this a card and link as well, add icons too */}
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
export default About;
