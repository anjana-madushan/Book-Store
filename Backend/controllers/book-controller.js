const Book = require("../model/Book");

const getAllBooks = async (req, res, next)=>{
    let books;

    try{
        books = await Book.find();
    }catch(err){
        console.log(err);
    }

    if(!books){
        return res.status(404).json({message:"No Product Found"})
    }

    return res.status(200).json({books})
};

const addBook =  async(req, res, next)=>{

    const {name, author, description, price, available, image} = req.body;

    let book;

    try{
        book = new Book({
                name, 
                author,
                description,
                price, 
                available,
                image
        });

        //save data in the database
        await book.save();
    }catch(err){
        console.log(err)
    }

    if(!book){
        res.status(500).json({message:"Unable to Add"})
    }

    return res.status(201).json({book})
}

const getOne = async(req, res, next) =>{

    //getting id
    const id = req.params.id;
    let book;

    try{
       book = await Book.findById(id);
    }catch(err){
        console.log(err)
    }

    if(!book){
        res.status(500).json({message:"The book is not there"})
    }

    return res.status(201).json({book})

}

const updateBook = async(req, res, next) =>{

    let id = req.params.id;
    const {name, author, description, price, available, image} = req.body;
    let book;

    try{
        book = await Book.findByIdAndUpdate(id, {
                name, 
                author,
                description,
                price, 
                available,
                image
        })

        book=await book.save();

    }catch(err){
        console.log(err)
    }

    if(!book){
        res.status(500).json({message:"Unable to Update this book"})
    }

    return res.status(200).json({book})

}

const deleteBook = async(req, res, next)=>{

    const id = req.params.id;

    let book;

    try{
        book = await Book.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
    }

    if(!book){
        res.status(500).json({message:"Unable to Delete this book"})
    }

    return res.status(200).json({message:"Book is succesfully deleted"})
}



exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getOne = getOne;
exports.updateBook =  updateBook;
exports.deleteBook = deleteBook;