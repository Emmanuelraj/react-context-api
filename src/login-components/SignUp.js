import React, { useState, useContext } from 'react';
import {UserContext} from '../contexts/LoginContext'



const SignUp=()=>{
    const {dispatch} = useContext(UserContext);

    //setState using hooks
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [cPassword, setcPassword] = useState("");
    const [msg,setMsg]= useState("");




    const handleSubmit=(e)=>{
      e.preventDefault();


      if(password === cPassword){
         
         dispatch({
          type:'ADD_USER', user:{
              user, email,password
          }});
      }else{
        setMsg("password not matching")
      }
      setUser('');
      setEmail('');
      setPassword('');
      setcPassword('');
    }

   

   return(
       <div className="sigup-form">
         <h1>SignUp Form</h1>
         <div>{msg}</div>
         <form onSubmit = {handleSubmit}>
         <input type="text" placeholder="Enter userName" 
         value ={user}
         onChange={(e)=>setUser(e.target.value)}/>

         <input type="email" placeholder="Enter email" 
         value ={email}
         onChange={(e)=>setEmail(e.target.value)}/>

         <input type="password" placeholder="Enter password" 
         value ={password}
         onChange={(e)=>setPassword(e.target.value)}/>
         <input type="password" placeholder="Enter confirm password" 
         value ={cPassword}
         onChange={(e)=>setcPassword(e.target.value)}/>
         <input type ="submit" value ="Sign Up"></input>
      </form>
       </div>
   )
}


export default SignUp
