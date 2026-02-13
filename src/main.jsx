import { StrictMode } from 'react' // activates additional checks and warnings for debugging purposes
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About.jsx'
import ContactMe from './pages/ContactMe.jsx'
import BookSearch from './pages/BookSearch.jsx'

// main.jsx is the entry point that runs the React app

// This selector is grabbing the id with value of root from the index.html file
// strictmode tag can cause issues with rendering info from external apis
// I believe this renders the app component on top of the div element that has id value of "root"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* wrap the application in this to enable routing */}
    <BrowserRouter>
     {/* routes contains all the router definitions */}
      <Routes>
        {/* route defines the mapping between the url and the component, so the url is
        being defined by the Route element */}
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactMe/>}/>
        <Route path='/search-books' element={<BookSearch/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
