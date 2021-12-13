import { useRef, useContext } from "react";
import { dataContext } from '../Context';
export const Control = () => {
    const {state, messages, setMessages, addTransaction} = useContext(dataContext);
    // using refs to get the value of input fields
    let name = useRef();
    let type = useRef();
    let date = useRef();
    let value = useRef();
    let values = {
        name,
        date,
        type,
        value
    }

    // function to remove an error message from the messages array state
    const handleMessages = (type) => {
        setMessages((messages) => messages.filter(el=> el.type !== type))
    }

    // functon to create an item so the item be added either to the inclist or the explist
    const createItem = ( state) => {
        let id;
        // adding an id to  the inclist or explist item depending on the type the select element value have
        if (values.type.current.value === 'inc'){
    
          //assigning the id depending if the inclist is empty or not, if empty the id is 0, if not the id will be the last element id + 1
          if (state.incList.length === 0) {
            id = 0;
          } else {
            id = state.incList[state.incList.length - 1].id + 1;
          }
        } else {
        //assigning the id depending if the explist is empty or not, if empty the id is 0, if not the id will be the last element id + 1
          if (state.expList.length === 0) {
            id = 0;
          } else {
            id = state.expList[state.expList.length - 1].id + 1;
          }
        }
       
        // return the item as an object
        return ({
          name: values.name.current.value,
          date: values.date.current.value,
          value: Number(values.value.current.value),
          type: values.type.current.value,
          id,
        });
    }
    
    // handling the submit functionality
    const handleSubmit = (e) => {
        // a variable to determine if there's errors in the input values or not
        let success = true;
        e.preventDefault();
        // creating the item from input fields when the submit event is activiated
        const item = createItem(state);

        // check if the input fields are empty or have an invalid value and change the success variable to false
        if ((item.name.trim() === '' || item.name === null)) {
            success = false;
            // check if the input field error message is already in the messages array state
            let exist = messages.some(el => el.type === 'name');
            // if the error message is not in the messages array state we add it to it 
            if (!exist) {
                setMessages((messages) => [...messages, {type: 'name', message: 'please enter a name for the transaction'}]);
            } 
        }
        if (item.date === '') {
            success = false;
            let exist = messages.some(el => el.type === 'date');
            if (!exist) {
                setMessages((messages) => [...messages, {type: 'date', message: 'please enter a valid date for the transaction'}]);
            }
        } 
        if (item.value <= 0) {
            success = false;
            let exist = messages.some(el => el.type === 'value');
            if (!exist) {
                setMessages((messages) =>[...messages, {type: 'value', message: 'please enter a valid value for the transaction'}]);
            } 
        } 

        // if there's no errors in the input fields we add the item to the inclist or explist array state with the help of the dispatch function in the addTransaction function
        if (success) {
            name.current.value = '';
            date.current.value = '';
            value.current.value = '';
            return addTransaction(item);
        } 
        return;
    }
    return (
        <section className="budget-control">
        <div className="container">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <label htmlFor="transaction" >transaction name</label>
                        <input ref={name} type="text" id="transaction" name="transaction" onChange={() => handleMessages('name')}/>
                    </div>
                    <div>
                        <label htmlFor="transaction-date">transaction date</label>
                        <input ref={date} type="date" id="transaction-date" name="transaction-date" onChange={() => handleMessages('date')}/>
                    </div>
                    <div>
                        <label htmlFor="transaction-type">transaction type</label>
                        <select id="transaction-type" name="transaction-type" ref={type}>
                            <option value="inc">income</option>
                            <option value="exp">expense</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="transaction-value">transaction value</label>
                        <input ref={value} type="number" id="transaction-value" name="transaction-name" onChange={() => handleMessages('value')}/>
                    </div>
                    <button type="submit">add</button>
                </form>
            </div>
        </section>
    );
}

