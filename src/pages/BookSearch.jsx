import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const BookSearch = () => {
  return (
    <div>
        <Header/>
        <div className='search-books-page'>
          <h1 className='search-books-page-title'>Search your books here!</h1>
          <input type='text' required aria-required maxLength={150}/>
          <div className='search-books-page-response'>

          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default BookSearch