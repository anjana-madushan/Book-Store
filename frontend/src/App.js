import React from 'react'
import Header from './components/Header'
import {Routes, Route, BrowserRouter} from 'react-router-dom'

import Library from './components/library'
import AddBook from './components/addBook'
import AboutUs from './components/aboutUs'
const App = () => {
  return (

    <BrowserRouter>
    
    <header>
      <Header/>
    </header>
    
  
    <Routes>
      <Route path ="/library" element={<Library />}/>
      <Route path ="/add" element={<AddBook />} />
      <Route path ="/about" element={<AboutUs />} />
      
    </Routes>
    
    </BrowserRouter>
    
    
  )
}

export default App