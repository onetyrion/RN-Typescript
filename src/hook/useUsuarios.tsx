import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";
import { useState, useRef, useEffect } from 'react';

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const refPage = useRef(1);

    useEffect(() => {
        // CALL API
        cargarUsuarios()
    }, []);

    const cargarUsuarios = async (actionPage: number = 1) => {
        try {
            const resp = await reqResApi.get<ReqResListado>('/users', {
                params: {
                    page: refPage.current,
                }
            });
            if (resp.data.data.length > 0) {
                setUsuarios(resp.data.data);
            } else {
                refPage.current--;
                alert('Sin registro')
            }
        } catch (error) {
            console.log(error);
        }
    }

    const paginaAnterior = () => {
        if (refPage.current>1) {
            refPage.current--;
            cargarUsuarios();
        }

    }
    const paginaSiguiente = () => {
        refPage.current++;
        cargarUsuarios()

    }

    return {
        usuarios,
        paginaAnterior,
        paginaSiguiente,
        page: refPage.current,
    }
}