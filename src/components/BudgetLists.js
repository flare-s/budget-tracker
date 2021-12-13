import { IncList } from "./IncList";
import { ExpList } from "./ExpList";

export const Lists = () => {
    return (
        <section className="budget-lists">
            <div className="container">
                <h2>budget items</h2>
                <section className="budget-list">
                    <IncList  />
                    <ExpList  />
                </section>
            </div>
            
        </section>
    );
}
