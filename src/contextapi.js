import React,{ createContext, useReducer } from "react"

let initialvalue={
  dark:true
}



 let reducerApi=(state,action)=>{
    switch(action.type){
        case 'change':
            return{...state,dark:!state.dark}
        default:
        return state
    }
}


// Create context
export let GlobalContext = createContext(initialvalue);

// Provider component
export let GlobalProvider = ({ children }) => {
let [state,dispatch]=useReducer(reducerApi,initialvalue);
console.log(state);
function changemode(){
  dispatch({
    type:'change'
  });
}


  return (<GlobalContext.Provider value={{state,dispatch}}   >
    {children}
  </GlobalContext.Provider>);
}
