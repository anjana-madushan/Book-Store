import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Book from './book';

const URL  = "http://localhost:5000/books";

const fetchhandler = async() =>{
    return await axios.get(URL).then((res)=>res.data)
}


const Books = () => {

    const [books, setBooks] = useState();

    useEffect(()=>{

        fetchhandler().then(data=>setBooks(data))

    },[])

    console.log(books);

  return (
    <div>
        <ul>
            {books.map((val, key)=>{return <div key={key}>

                <li>{val.author}</li>

            </div>})}
        </ul>
    </div>
  )
}

export default Books