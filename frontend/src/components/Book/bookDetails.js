import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const BookDetails = () => {

  const navigate = useNavigate();
  const id =  useParams();
    const [inputs, setInputs] = useState({
    name: '',
    description:'',
    author:'',
    price:'',
    image:''
    });
    const [checked, setChecked] = useState(false);
    
   // console.log(id)
    useEffect(()=>{
        
      const fetchHandler = async () => {
        await axios.get(`http://localhost:5000/books/${id.bId}`)
        .then((res)=> res.data).then((data)=>setInputs(data.book));
      }
          
      fetchHandler();
    }, [id])

    const sendData =(e) =>{
      e.preventDefault();

      const newBook = {
        name: String(inputs.name),
        author:String(inputs.author), 
        description:String(inputs.description),
        price:Number(inputs.price), 
        image:String(inputs.image), 
        available:Boolean(checked)
      }

         axios.put(`http://localhost:5000/books/update/${id.bId}`,newBook).then(()=>{
          navigate("/books");
        }).catch((err)=>{
          alert(err);
        })
      }
    const handleChange = (e) => {
      setInputs((prevState)=> ({
        ...prevState, 
        [e.target.name] : e.target.value
      }))
    }

  return (
    <div className='form'>
    <form onSubmit={sendData}>
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
    <input checked={checked} onChange={()=>setChecked(!checked)}
     type="checkbox" name='checked' class="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Available</label>
  </div>

<br/>

     <button type="submit" class="btn btn-primary">Update Book</button>
  </form>
  </div>
  )
}

export default BookDetails