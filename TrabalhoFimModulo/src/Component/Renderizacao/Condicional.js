import { useState } from "react";

function Condicional (){

    const [email, setEmail]= useState()
    const [userEmail, setUserEmail] =useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function LimparEmail() {
        setUserEmail('')
    }

    return(
        <diva>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                    <input type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} />
            </form>
            <button type="submit" onClick={enviarEmail}>Enviar email</button>
            {/*Exemplo de renderização condicional */}
            
            {userEmail && (
                <>
                    <p>O email do usuario é: {userEmail}</p>
                    <button onClick={LimparEmail}>Limpar Respopsta</button>
                </>
            )}
        </diva>

    )
}

export default Condicional