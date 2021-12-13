import React, {useContext} from 'react';
import { dataContext } from '../Context';
import {Control} from "./BudgetControl";
import {Lists} from "./BudgetLists";
import {Errors} from './Errors';


export const Main = () => {
    const {state, messages} = useContext(dataContext);
    return (
        <main>
            {messages.length > 0 ? <Errors /> : null}
            <Control  />
            {(state.incList.length > 0 || state.expList.length > 0) ? <Lists /> : null}
            
        </main>
    )
}

