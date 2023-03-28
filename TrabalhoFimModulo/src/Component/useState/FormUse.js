import { useState } from "react"
function FormUse (){

    function cadastrarUsuario (e){
        //sempre que estiver usando submit precisamos utilizar o e,preventDefault para guardar a informação ele garante 
        //que o aue vem abaixo seja processado
        e.preventDefault()
        console.log(`seu nome é ${name} e a senha é ${password}`);
       
    }

    const[name, setName]=useState()
    const[password, setPassword]=useState()

    return(
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input                       
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Digite seu nome"
                        // value="name"
                        onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id= "password"
                        name="password"
                        placeholder="Digite sua senha"
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="submit"
                        value="cadastrar"
                    />
                </div>
            </form>
        </div>
    )

}

export default FormUse