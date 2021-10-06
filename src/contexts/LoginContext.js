//signUp Form
//login Form
import React, { createContext,useReducer } from 'react';
import { loginReducer } from '../reducer/loginReducer';


//create context
export const UserContext = createContext();

//Provider
export const UserContextProvider=(props)=>{
    //useStateHooks 
    const [users, dispatch] = useReducer(loginReducer,[]);

    return (
        <UserContext.Provider value ={{users,dispatch}}>
           {props.children}
        </UserContext.Provider>
    )
}
