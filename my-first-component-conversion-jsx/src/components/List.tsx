export function List() {
    const name = "Fernanda";

    function formatDate(date: Date): React.ReactNode {
        return new Intl.DateTimeFormat(
            'pt-BR', 
            {weekday: 'long'}
        ).format(date);
    }       

    return(
        <>
            <h1>Lista de Compras da {name}</h1>
            <p>Dia da feira: {formatDate(new Date() )} </p>
            <img className="list-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYtLfSl5RmZmEcGdF9d4BuIWHBAwKI94rVciGvJXskkQ&s=1024x1024" alt="Lista de Compras"/>
        
            <ul className="list-items">
              <li>Banana</li>
                <li>Maçã</li>
                <li>Pera</li>
                <li>Ovo</li>
                <li>Leite</li>
                <li>Pão</li>
            </ul>
        </>
    );
}