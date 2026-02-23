import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaSearch } from "react-icons/fa";
import BookCard from "../components/BookCard";
import { FaSpinner } from "react-icons/fa";

const BookSearch = () => {
  const [query, setQuery] = useState("");
  const [book, setBooks] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // console.log(query);
  const onButtonClick = async () => {
    console.log(query);
    // got this code from the firefox docs

    if(query!=""){
      try {
        setIsLoading(true);
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${import.meta.env.VITE_API_KEY}`);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        // console.log(result)

        setBooks(result);
        // finally figured it out
        // console.log(book);
  
      } catch (error) {
        console.error(error.message);
      } finally{
        setIsLoading(false);
      }
    }
  };

  // should be string not number 13, the latter is deprecated
  const keyPressEvent = (e) => {
    // console.log(query);
    if (e.key == "Enter") {
      onButtonClick();
    }
  };

  return (
    <div>
      <Header />
      <div className="search-books-page">
        <h1 className="search-books-page-title">Search your books here!</h1>
        {/* used AI for this too */}
        <div className="search-books-input-wrapper">
          <span className="search-books-input-icon">
            <FaSearch onClick={onButtonClick} />
          </span>
          <input
            onChange={(e) => setQuery(e.target.value)}
            className="search-books-page-input"
            type="text"
            required
            aria-required
            maxLength={150}
            onKeyDown={keyPressEvent}
          />
        </div>
        <div className="search-books-page-response">
          <div className="card-collection">
            {
              isLoading ? <FaSpinner className="spinner-icon"/> :
              // {/* only render when books are available */}
              book?.items && book.items?.map((book, idx)=>{
                return(
                  <BookCard key={idx} bookDetails={book.volumeInfo}/>
                )
              })

            }


          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookSearch;
