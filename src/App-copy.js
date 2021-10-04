import React from 'react';
import { BookContextProvider } from './book-context/BookContext';
import NewBookForm from './booklist-components/BookForm';
import BookList from './booklist-components/BookList';
import Navbar from './booklist-components/Navbar'

function AppCopy() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar></Navbar>
        <BookList/>
        <NewBookForm/>
      </BookContextProvider>
    </div>
  );
}

export default AppCopy;