import React, {createContext,useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";


//a created context
export const BookContext = createContext();
//provider
export const BookContextProvider = (props) => {
  //useState Hooks
  const [books,dispatch] = useReducer(bookReducer,[]);

//Provider
    return (
        <BookContext.Provider value ={{books,dispatch}}>
           {props.children}
        </BookContext.Provider>
    )
};

