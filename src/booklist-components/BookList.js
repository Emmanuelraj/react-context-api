import React, { useContext } from 'react';
import { BookContext } from '../book-context/BookContext'
import BookDetails from './BookDetails';


const BookList =()=>{
    const {books} = useContext(BookContext)
    return books.length ? (
        <div  className="book-list">
           <ul>
            {books.map(book=>{
                return (<BookDetails book ={book}></BookDetails>)
            })}
           </ul>
        </div>
    ):(
        <div>
        </div>
    )
}

export default BookList;