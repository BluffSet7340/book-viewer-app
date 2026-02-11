import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const About = () => {
  return (
    <div>
      <Header/>
      <p>Hi, I am a fresh computer science graduate from the American University of Sharjah. In an effort to increase my employability in the current job market. I am currently working on my frontend skills (React) and also backend skills (Database, AI) so that I find a good job inshallah</p>
      <h2>Technologies used:</h2>
      {/* Make this a card and link as well, add icons too */}
      <div>
        React with Vite as the build tool
      </div>
      <div>
        Google Books API
      </div>
      <Footer/>
    </div>
  )
}
export default About