import Item from "./Item"

function List(){
    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca="Ferrari" ano_lancamento={2022}/>
            <Item marca="Fiat" ano_lancamento={2022}/>
            <Item marca="Renault" ano_lancamento={2022}/>
            <Item />
        </ul>
        </>

    )
}

export default List

// Utilização props reutilizado em item e usado em app:

// import './App.css';
// import List from './Component/props/List';


// function App() {

//   return (

//     <div>

//       <List/>
     
//     </div>

//   );
// }

// export default App;
