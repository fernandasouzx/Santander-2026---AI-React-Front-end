interface ListDetails{
    name: string;
    day: React.ReactNode;
}
export function List() {
    const listDetails: ListDetails = {
        name: "Fernanda",
        day: formatDate(new Date())
    };

    function formatDate(date: Date): React.ReactNode {
        return new Intl.DateTimeFormat(
            'pt-BR', 
            {weekday: 'long'}
        ).format(date);
    }       

    return(
        <>
            <h1>Lista de Compras da {listDetails.name}</h1>
            <p>Dia da feira: {listDetails.day} </p>
            <ul className="list-items">
              <li>Banana</li>
                <li>Maçã</li>
                <li>Pera</li>
                <li>Ovo</li>
                <li>Leite</li>
                <li>Pão</li>
                <li>Arroz</li>
            </ul>
        </>
    );
}