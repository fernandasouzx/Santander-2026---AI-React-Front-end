interface Props{
    imageSrc: string;
    coffee: {
        name: string;
        description: string;
        preparationTime: number;
    }
}

export function Recipe({imageSrc, coffee}:Props) {
    return (
        <>
            <img
                src={imageSrc}
                alt="coffee.name"
                width={400}
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