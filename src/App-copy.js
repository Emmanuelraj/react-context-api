import React from 'react';
import { BookContextProvider } from './book-context/BookContext';
import NewBookForm from './booklist-components/BookForm';
import BookList from './booklist-components/BookList';
import Navbar from './booklist-components/Navbar';
import { UserContextProvider } from './contexts/LoginContext';
import SignUp from './login-components/SignUp';




function AppCopy() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar></Navbar>
        <BookList/>
        
        <NewBookForm/>
         {/**SignUp Form */}
         <UserContextProvider>
         <SignUp/>
         </UserContextProvider>
      </BookContextProvider>
       
    </div>
  );
}

export default AppCopy;