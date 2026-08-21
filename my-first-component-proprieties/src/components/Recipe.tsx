import type { CoffeeProps } from "../interfaces/coffee"
import { Coffee } from "./Coffee"

export function Recipe(props: CoffeeProps){
    return(
        <div className="card">
            <Coffee {...props} />
            <button className="button">Ver receita</button>
        </div>
    );
}