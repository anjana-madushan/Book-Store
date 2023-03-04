import React, {useState, useEffect} from 'react'
import "./styles/book.css"
import axios from 'axios'
import Book from './book';



const URL  = "http://localhost:5000/books";  //to fetch from the axios


const fetchHandler = async()=>{
    return await axios.get(URL).then((res)=>(res.data))
}


const Books = () => {

   
    const [books, setBooks] = useState([]);

    useEffect(()=>{

      fetchHandler().then((data)=> setBooks(data.books))
},[])

   
    

  return (
    <div>
        <ul>
           {books.length === 0
      ? 'there is no book record!'
           :books.map((book, i)=>(
            <li className='book' key={i}>
               
                <Book book={book}/>
            </li>
           ))}
            
        </ul>
    </div>
  )
}

export default Books

/*  {books.length === 0
      ? 'there is no book record!'
      : books.map((book, k) => (<Book book={book} key={k} />))}*/