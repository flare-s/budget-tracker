import React, {createContext, useReducer, useState} from 'react';


  export const dataContext = createContext();

export const Context = ({children}) => {
      // reducer function to handle use reduce state
    const reducer = (state, action) => {
        // depending on the action object type value it will update the state differently
        switch(action.type) {
            case 'ADD_TRANSACTION':
                // check if the object payload property type is equal to inc
                if (action.payload.type === "inc") {
                // return the previous state object while modifying the incList property object by adding a new item 
                return {
                    ...state,
                    incList: [...state.incList, action.payload],
                }
                // check if the object payload property type is equal to exp
                } else if(action.payload.type === "exp") {
                // return the previous state object while modifying the incList property array by adding a new item 
                return {
                    ...state,
                    expList: [...state.expList, action.payload],
                }
            } break;
            case 'DELETE_TRANSACTION':
                // check if the object payload property type is equal to inc
                if (action.payload.type === "inc") {
                // return the previous state object while removing an item with an id property from the incList property array that matches the id value provided in the payload object id property
                return {
                    ...state,
                    incList: state.incList.filter(item => item.id !== action.payload.id),
                }
                // check if the object payload property type is equal to exp
                } else if(action.payload.type === "exp") {
                // return the previous state object while removing an item with an id property from the expList property array that matches the id value provided in the payload object id property
                return {
                    ...state,
                    expList: state.expList.filter(item => item.id !== action.payload.id),
                }
            } break;
            // if nothing matches return the same state object
            default: 
                return state
            }
    }

  //function that activate the dispatch method so the reducer change state depending on the type value in the object passed into the dispatch method
  function addTransaction(item) {
    return dispatch({
      type: 'ADD_TRANSACTION',
      payload: item
    })
  }

  //function that activate the dispatch method so the reducer change state depending on the type value in the object passed into the dispatch method
  function deleteTransaction(item) {
    return dispatch({
      type: 'DELETE_TRANSACTION',
      payload: item
    })
  }

  // the initial state of the app
  const initialState = {
    incList: [],
    expList: []
  }

  //using use reducer to handle the app state
  const [state, dispatch] = useReducer(reducer, initialState);

  // function to return the total inclist value, if the array is empty returns 0 instead
  const calcInc = () => {
    return state.incList.length === 0 
    ? 0
    : state.incList.reduce((prev, next) => prev + next.value, 0)
  }  
  // function to return the total explist value, if the array is empty returns 0 instead
  const calcExp = () => {
      return state.expList.length === 0 
      ? 0
      : state.expList.reduce((prev, next) => prev + next.value, 0)
  }  
  // function that returns the total (incList total - exp total)
  const calcTotal = () => {
      return calcInc() - calcExp()
  }

  // messages will contain the input errors messages
  const [messages, setMessages] = useState([]);

  const data = {
      state,
      addTransaction,
      deleteTransaction,
      calcInc,
      calcExp,
      calcTotal,
      messages,
      setMessages
   }
    return (
        <dataContext.Provider value={data}>
            {children}
        </dataContext.Provider>
    );
}