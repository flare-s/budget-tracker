import React, {useContext} from 'react';
import { dataContext } from '../Context';
export const Errors = () => {
    const {messages} = useContext(dataContext)
    // to render the meesages inside the messages array if the array not empty
    if (messages.length > 0) {
        return(
            <ul className="errors">
                {messages.map((el, i) => {
                    return <li className="errors__message" key={i}>{el.message}</li>
                })}
            </ul>
        )
    } else {
        return null;
    }
}