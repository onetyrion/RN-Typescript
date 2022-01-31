import React, { useEffect } from 'react';
import { useReducer } from 'react';

interface AuthState {
    validando: boolean,
    token: string | null,
    userName: string,
    nombre: string,
}

const initialState: AuthState = {
    validando: true,
    token: null,
    userName: '',
    nombre: ''
}

type LoginActionPayload = {
    username: string,
    nombre: string,
}

type AuthAction =
    | { type: 'logout' }
    | { type: 'login', payload: LoginActionPayload };

// const authReducer = () : typeof initialState => { // EVITAR PONER TYPEOF
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                nombre: '',
                userName: '',
            }
        case 'login':
            return {
                validando: false,
                token: '123ASD',
                nombre: action.payload.nombre,
                userName: action.payload.username,
            }
        default:
            return state;
    }
}

export const Login = () => { 
    const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            logout()
        }, 1500);
    }, []);

    const logout = () => {
        dispatch({ type: 'logout' });
    }

    const login = () => {
        dispatch({type: 'login', payload: {
            nombre: 'Diego',
            username: 'diegoooo'
        }})
    }


    if (validando) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">Validando...</div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>

            {
                (token) ?
                    <div className="alert alert-success">Autenticado como: {nombre}</div>
                    :
                    <div className="alert alert-danger">No autenticado</div>
            }
            {
                (token) ?
                    <button className="btn btn-danger" onClick={logout}>Logout</button>
                    :
                    <button className="btn btn-primary" onClick={login}>Login</button>
            }
        </>
    );
};
