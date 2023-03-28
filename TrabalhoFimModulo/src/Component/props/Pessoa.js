function Pessoa ({nome, idade, profissao, foto}){
    return(
        <>
            <img src={foto} alt={nome}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </>

    )
}

export default Pessoa

// -------------------------------------------Resultado app

// import './App.css';
// import Pessoa from './Component/props/Pessoa';

// function App() {

//   const nome='Fernando'

//   return (

//     <div>
//         <Pessoa 
//         nome="Fernando" 
//         idade="28"
//         profissao="Programador" 
//         foto="https://via.placeholder.com/150"
//       />
//     </div>

//   );
// }

// export default App;