import React from 'react'
import Header from './components/Header'
import {Routes, Route, BrowserRouter} from 'react-router-dom'

import Home from './components/home'
import AddBook from './components/addBook'
import AboutUs from './components/aboutUs'
import Books from './components/Book/books'
import BookDetails from './components/Book/bookDetails'

const App = () => {
  return (

    <BrowserRouter>
    
    <header>
      <Header/>
    </header>
    
  
    <Routes>
      <Route path ="/" element={<Home />}/>
      <Route path="/books" element={<Books />} />
      <Route path ="/add" element={<AddBook />} />
      <Route path ="/about" element={<AboutUs />} />
      <Route path ="/books/:bId" element={<BookDetails />} />
      
    </Routes>
    
    </BrowserRouter>
    
    
  )
}

export default App