import {v1 as uuid} from "uuid"; 

export const loginReducer =(state,action)=>{
    switch(action.type){
        case 'ADD_USER':
            console.log(state)
             return [...state,{
                user: action.user.user,
                email:action.user.email,
                password: action.user.password,
               id:uuid()}]
        default :
              return state;
    }
}