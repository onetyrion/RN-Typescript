import { useCounter } from '../hook/useCounter';

export const ContadorHook = () => {
    const { valor, acumular } = useCounter();

    return (
        <>
            <h3>Contador Hook: <small>{valor}</small></h3>
            <button className="btn btn-primary me-2" onClick={() => acumular(1)}>
                +1
            </button>
            <button className="btn btn-primary" onClick={() => acumular(-1)}>
                -1
            </button>
        </>
    );
};
