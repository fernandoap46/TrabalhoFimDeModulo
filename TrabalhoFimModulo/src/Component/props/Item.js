import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){
    return(
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>

    )
}
//Observação para indicação de como deve ser preenchido a nivel programador não da erro no programa apenas retorna observação no terminal

//Warning: Failed prop type: Invalid prop `marca` of type `number` supplied to `Item`, expected `string`.
//Item@http://localhost:3000/main.ae4148677dbc32aebd1f.hot-update.js:28:7
Item.propTypes ={
    marca: PropTypes.string
}

//Define preenchimento por default assim as informações são pre preenchidas antes de receber algo
Item.defaultProps ={
    marca: 'Faltou a Marca',
    ano_lancamento:0,
}

export default Item

//Props reutilizado em componente List:

// import Item from "./Item"

// function List(){
//     return(
//         <>
//         <h1>Minha Lista</h1>
//         <ul>
//             <Item marca="Ferrari" ano_lancamento={2022}/>
//             <Item marca="Fiat" ano_lancamento={2022}/>
//             <Item marca="Renault" ano_lancamento={2022}/>
//             <Item />
//         </ul>
//         </>

//     )
// }

// export default List