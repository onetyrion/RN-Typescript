import { useState } from "react";

export const Contador = () => {
    const [valor, setValor] = useState(10);

    const acumular = (numero: number) => {
        setValor(valor + numero)
    }

    return (
        <>
            <h3>Contador: <small>{valor}</small></h3>
            <button className="btn btn-primary me-2" onClick={() => acumular(1)}>
                +1
            </button>
            <button className="btn btn-primary" onClick={() => acumular(-1)}>
                -1
            </button>
        </>
    );
};