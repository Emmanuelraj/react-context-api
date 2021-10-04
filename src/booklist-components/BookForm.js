import React, { useState, useContext } from 'react';
import { BookContext } from '../book-context/BookContext';


const NewBookForm =()=>{
    const {addBook}= useContext(BookContext);

    const [title,setTitle]= useState('');
    const [author, setAuthor] = useState('');
    

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(title, author);
        addBook(title,author);
        setTitle('');
        setAuthor('');
    }

    return(
        <div className="book-form">
           <form onSubmit = {handleSubmit}>
              <input type="text" placeholder="Enter title" 
              value ={title}
              onChange={(e)=>setTitle(e.target.value)}/>
              <input type="author" placeholder="Enter title" 
              value ={author}
              onChange={(e)=>setAuthor(e.target.value)}/>
              <input type ="submit" value ="add book"></input>
           </form>
        </div>
    )

}

export default NewBookForm;