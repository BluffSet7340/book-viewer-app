import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import fallbackImage from '../assets/fallback-image.jpg'
import { FaSearch } from "react-icons/fa";

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [book, setBooks] = useState([]);

  const onButtonClick = () => {
    console.log(query);
    const url = `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${import.meta.env.VITE_API_KEY}`;

    
  }

  // should be string not number 13, the latter is deprecated
  const keyPressEvent = (e) =>{
    if(e.key=="Enter"){
      onButtonClick();
    }
  }


  return (
    <div>
        <Header/>
        <div className='search-books-page'>
          <h1 className='search-books-page-title'>Search your books here!</h1>
          {/* used AI for this too */}
          <div className='search-books-input-wrapper'>
            <span className='search-books-input-icon'>
              <FaSearch 
                onClick={onButtonClick}
              />
            </span>
            <input
              onChange={e => setQuery(e.target.value)}
              className='search-books-page-input'
              type='text'
              required
              aria-required
              maxLength={150}
              onKeyDown={keyPressEvent}
            />
          </div>
          <div className='search-books-page-response'>
          <div className="card-collection">
          <div className="card">
            {/* setting the width of 100% tells the image to take the maximum
          width possible inside of its parent container */}
            <img
              className="tech-icon"
              src={fallbackImage}
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
              src={fallbackImage}
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
              src={fallbackImage}
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
        </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default BookSearch