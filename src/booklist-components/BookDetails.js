import React, { useContext, } from 'react';
import { BookContext } from '../book-context/BookContext'


const BookDetails =({book})=>{
    const {dispatch} = useContext(BookContext);

    const removeBook=(e)=>{
        e.preventDefault();
       dispatch({type:'REMOVE_BOOK',
          id:book.id})
    }
    return(
        <div>
           <li onClick = {removeBook}>
               <div className="title">{book.title}</div>
               <div className="author">{book.author}</div>
           </li>
        </div>
    )
}
export default BookDetails