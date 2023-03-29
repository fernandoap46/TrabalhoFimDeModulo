function RenderizacaoLista({itens}){
    return(

        <>
            <h3>Lista de coisas boas:</h3>
            {itens.length > 0 ? (
                itens.map((item, index) => <p key={index}>{item} </p>)
                ) : (
                <p>não há itens na lista</p>
            )}
          
        </>

    )
}

export default RenderizacaoLista

// Resultado APP

// import './App.css';
// import RenderizacaoLista from './Component/Renderizacao/RenderizacaoLista';


// function App() {

//   const meusItens =['React','Vue','Angular']

//   return (

//     <div>

//      <>
//      <h1>Renderização de listas</h1>
//      <RenderizacaoLista itens={meusItens} />
//      <RenderizacaoLista itens={[]}/>
//      </>
     
//     </div>

//   );
// }

// export default App;