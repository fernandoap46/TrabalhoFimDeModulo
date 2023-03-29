import { useState } from 'react';
import './App.css';
import SeuNome from './Component/State/StateLift/SeuNome';


function App() {

  const [nome, setNome] = useState()

  return (

    <div>

     <>
     <h1>State Lift</h1>
     <SeuNome SeuNome={SeuNome}/>
     
     </>
     
    </div>

  );
}

export default App;
