function Form (){

    function cadastrarUsuario (e){
        //sempre que estiver usando submit precisamos utilizar o e,preventDefault para guardar a informação ele garante 
        //que o aue vem abaixo seja processado
        e.preventDefault()
        console.log('cadastrou usuario')
    }

    return(
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input
                        type="text"
                        placeholder="Digite seu nome"
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

export default Form