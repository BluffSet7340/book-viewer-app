import React from "react";
import fallbackImage from "../assets/fallback-image.jpg";

const BookCard = ({ bookDetails }) => {
  if (!bookDetails) return null;

  return (
      <div className="card card-click book-card" onClick={()=>window.open(`${bookDetails.infoLink}`, '_blank')}>
        <img
          className="tech-icon"
          src={bookDetails?.imageLinks?.thumbnail || fallbackImage}
          alt="photo of book thumbnail"
          style={{ width: "300px", height: "300px" }}
        />
        {/* <div style={{height:"200px"}}>
          ebola
        </div> */}
        <div className="book-card-container">
          <h3 className="book-card-title">
            {bookDetails.title}
          </h3>
          <ul className="author-list">
            {bookDetails?.authors ? (
              bookDetails.authors.map((author, idx) => (
                <li key={idx}>{author}</li>
              ))
            ) : (
              <li>Unknown Author</li>
            )}
          </ul>
          <p>{bookDetails.publishedDate}</p>
        </div>
      </div>

  );
};

export default BookCard;
