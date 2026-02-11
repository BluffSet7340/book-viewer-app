// import './App.css'
import '../App.css'
import booksIcon from '../assets/books-icon.jpg'
import Header from '../components/Header'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <>
      <Header/>
      {/* Main content area */}
      <main>
        {/* Hero/Landing section */}
        <section className='landing-page'>
          <h1 className='landing-page-tagline'>Get the best suggestions for Books from Google Books!</h1>
          <p>Discover your next great read. Click the button below and type to search for books based on the name of the book, the author, and the publisher</p>
          <button className='search-book-btn'>Click to search</button>
          
          <img alt='AI generated logo for this site' src={booksIcon} className='book-icon' />
        </section>

        {/* Content sections that appear as you scroll */}
        <section className='info mission'>
          <h2 className='mission-tagline'>Mission of this Project</h2>
          <p>I am doing this project to practice my coding skills, namely in frontend development. I want to be able to style elements nicely and appropriately, to improve my employability.</p>
          {/* Book content */}
        </section>

        <section className='info vision'>
          <h2>Vision</h2>
          <p>Keep working on developing my skills so that I can have a long and fulfilling career in tech, plus frontend devlopment is actually quite fun, when the CSS styles actually work</p>
          {/* Category content */}
        </section>
      </main>

      {/* Footer */}
      <Footer/>
    </>
  )
}

export default HomePage
