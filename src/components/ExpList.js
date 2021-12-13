import React, {useContext} from 'react';
import { dataContext } from '../Context';
export const ExpList = () => {
    const {state, deleteTransaction} = useContext(dataContext)
    // render the explst items when the explist array state not empty
    if (state.expList.length > 0) {
        return(
            <>
                <ul className="list__exp"  aria-label="expenses list">
                    {state.expList.map((el) => <li key={el.id} data-id={el.id} data-type={el.type}>
                        <span className="list__inc__name">{el.name} </span>
                        <time className="list__inc__date" dateTime={`${el.date}`}>{el.date}</time>
                        <span className="list__inc__value">{el.value}</span>
                        <button className="remove" aria-label="remove item" onClick={() => deleteTransaction({type: el.type, id: el.id})}>x</button>
                    </li>  )}
                    
                </ul>
            </>
        );
    
    } else {
        return null;
    }
}

