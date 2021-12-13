import React, {useContext} from 'react';
import { dataContext } from '../Context';
export const Header = () => {
    const {calcExp, calcInc, calcTotal} = useContext(dataContext);

    
    return (
        <header>
            <div className="container">
                <h1>budget tracker app</h1>
            
                <section className="budget-info">

                    <p className="budget-info__total">Total: <span>{calcTotal()}</span></p>
                    
                    <p className="budget-info__income-total">Income Total: <span>{calcInc()}</span></p>
                    <p className="budget-info__expenses-total">Expenses Total: <span>{calcExp()}</span></p>
                </section>
                </div>
        </header>
    );
}
