import React, { useContext } from 'react'
import { BookContext } from '../book-context/BookContext'

 const Navbar =()=>{
  const {books} = useContext(BookContext)
  return (
      <div className="navbar">
         <h1>Ninja reading list</h1>
         <p>Currently you have {books.length}</p>
      </div>
  )
}

export default Navbar