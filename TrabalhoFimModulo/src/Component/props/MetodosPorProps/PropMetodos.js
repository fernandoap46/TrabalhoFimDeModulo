import Button from "./Button";

function PropsMetodos () {

    function meuEventoa(){
        console.log(`Primeiro evento`);
    }

    function meuEventob(){
        console.log(`Segundo evento`);
    }

    return(
        <>
            <p>Clique para desparar evento</p>

            <Button event={meuEventoa} text="Primeiro evento"/>
            <Button event={meuEventob} text="Primeiro evento"/>
           

        </>

    )
}

export default PropsMetodos