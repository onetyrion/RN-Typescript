import { useUsuarios } from '../hook/useUsuarios';
import { Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {
    const { paginaAnterior, paginaSiguiente, usuarios, page } = useUsuarios();

    const renderItem = ({ first_name, avatar, email, id, last_name }: Usuario) => {
        return (
            <tr key={id.toString()}>
                <td><img src={avatar} className="img-thumbnail" alt={first_name} style={{ borderRadius: '50%', width: 60, borderWidth: 1 }} /></td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        );
    }

    return (
        <>
            <br />
            <h3>Usuarios: {page} </h3>
            <br />
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(renderItem)
                    }
                </tbody>
            </table>
            <button className='btn btn-neutral me-2' disabled={page <= 1} onClick={paginaAnterior}>Anteriores</button>
            <button className='btn btn-primary' onClick={paginaSiguiente}>Siguiente</button>
        </>
    );
};
