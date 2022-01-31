
const TiposBasicos = () => {

    const nombre: string | number = 'Diego';
    // let nombre: string | number = 'fernando';
    // nombre = 123

    const edad = 24;
    // const edad: number = 35;

    const isActive = true;
    // const isActive: boolean = true;

    const poderes = ['Velocidad', 'Volar', 'Respirar bajo el awa'];
    // const poderes1: string[] = [];

    // poderes.push(1);
    poderes.push('2');

    return (
        <>
            <h3>TIPOS BASICOS</h3>
            {nombre}, {edad}, {isActive}
            <br />
            {poderes.join(', ')}
        </>
    );
};

export default TiposBasicos;
