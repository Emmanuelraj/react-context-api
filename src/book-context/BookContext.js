import React, {createContext, useState } from "react";
import {v1 as uuid} from "uuid"; 


//a created context
export const BookContext = createContext();
//provider
export const BookContextProvider = (props) => {
  //useState Hooks
  const [books,setBooks] = useState([{ title: "name of the wind", author: "patrick", id: 1 },
  { title: "name of the wind", author: "patrick", id: 2 }]);


  //addBook
  const addBook = (title,author)=>{
      setBooks([...books,{title, author, id:uuid()}])
  }

  //removeBook
  const removeBook = (id)=>{
      setBooks(books.filter(book=> book.id !==id))
    }
//Provider
    return (
        <BookContext.Provider value ={{books,addBook,removeBook}}>
           {props.children}
        </BookContext.Provider>
    )
};

