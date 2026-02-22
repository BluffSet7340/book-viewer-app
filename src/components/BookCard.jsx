import React from "react";
import fallbackImage from "../assets/fallback-image.jpg";

const BookCard = ({ bookDetails }) => {
  if (!bookDetails) return null;

  return (
    <a className="card-external-link" href={`${bookDetails.infoLink}`} target="_blank">
      <div className="card card-click">
        <img
          className="tech-icon"
          src={bookDetails?.imageLinks?.thumbnail || fallbackImage}
          alt="photo of book thumbnail"
          style={{ width: "300px", height: "300px" }}
        />
        <div className="book-card-container">
          <h2>
            <b>{bookDetails.title}</b>
          </h2>
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
    </a>
  );
};

export default BookCard;
