import React, { useState } from 'react'
import "./stylesForm.css"
import axios from 'axios';
import {useNavigate} from "react-router-dom"

const AddBook = () => {


  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: '',
    description:'',
    author:'',
    price:'',
    image:''
  });

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState)=> ({
      ...prevState, 
      [e.target.name] : e.target.value
    }))
  }



  const handleSubmit = (e)=>{
    e.preventDefault();

    const newBook = {
      name: String(inputs.name),
      author:String(inputs.author), 
      description:String(inputs.description),
      price:Number(inputs.price), 
      image:String(inputs.image), 
      available:Boolean(checked)
    }

    axios.post('http://localhost:5000/books/add', newBook).then(()=>{
      navigate("/books");
    }).catch((err)=>{
      alert(err);
    })

  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label for="name">Name</label>
      <input value={inputs.name} onChange={handleChange}
       type="text" name='name' className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter Name"/>
    </div>
    
    <div className="form-group">
      <label for="author">Author</label>
      <input value={inputs.author} onChange={handleChange}
       type="text" name='author' className="form-control" id="author" aria-describedby="authorHelp" placeholder="Enter Author"/>
    </div>

    <div className="form-group">
      <label for="description">Description</label>
      <input value={inputs.description} onChange={handleChange} 
      type="text" name='description' className="form-control" id="description" aria-describedby="descriptionHelp" placeholder="Enter Description"/>
    </div>

    <div className="form-group">
      <label for="price">Price</label>
      <input value={inputs.price} onChange={handleChange}
      type="number"  name='price' min={100}  className="form-control" id="price" aria-describedby="priceHelp" placeholder="Enter price"/>
    </div>

  <div className="form-group">
      <label for="image">Image</label>
      <input type="text" value={inputs.image} onChange={handleChange}
          className="form-control" name='image' id="image" aria-describedby="imageHelp" placeholder="Enter image"/>
    </div>

    <div className="form-check">
    <input checked={checked} onChange={()=>setChecked((checked)=>!checked)}
     type="checkbox" name='checked' class="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Available</label>
  </div>

<br/>

     <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  </div>
  )
}

export default AddBook;