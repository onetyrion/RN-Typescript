
interface Persona {
    nombreCompleto: string,
    edad: number,
    direccion: Direccion
    // direccion: { // evitar
    //     pais: string,
    //     casaNo: number,
    // }
}

interface  Direccion {
    pais: string,
    casaNo: number,
}

const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Diego',
        edad: 24,
        direccion: {
            pais: 'Chile',
            casaNo: 597
        }
    }
    
    // persona.nombreCompleto = "12312312"; // error

    return (
        <>
            <h3>Objetos Literales</h3>
            {JSON.stringify(persona, null, 2)}
        </>
    );
};

export default ObjetosLiterales;
