import {Button} from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./styles/book.css"
import axios from 'axios';

const Book = (props) => {

  const navigate = useNavigate();
    const {_id, name, author, description, price, image} = props.book;

    const deleteHandler = async() => {

      await axios.delete(`http://localhost:5000/books/${_id}`)
      .then((res)=>res.data)
      .then(()=>navigate("/add"))
      .then(()=>navigate("/books"));
    }
    
  return (
    <div className='card'>
      
      <img src={image} alt={name} />
        <article>By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h2>Rs .{price}</h2>

        <Button LinkComponent={Link} to={`/books/${_id}`}>Update</Button>
        <Button onClick={deleteHandler}>Delete</Button>
      

        
    </div>
  )
}

export default Book