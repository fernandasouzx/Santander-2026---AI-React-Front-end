import type { CoffeeProps } from "../interfaces/coffee";

export function Coffee({imageSrc, coffee}:CoffeeProps){
    return (
        <>
            <img
                src={imageSrc}
                alt="coffee.name"
                width={300}
            />
            <h2 className='recipe-title'>{coffee.name}</h2>
            <p className='recipe-description'>{coffee.description}</p>
            <p className='recipe-description'> 
                <b>Tempo de Preparo: </b>
                {coffee.preparationTime} min
            </p>
        </>
    )
}