import { useForm } from "../hook/useForm";


export const Formularios = () => {
    const initialForm = {
        email: "email@test.cl",
        password: "123456",
    }
    const {onChange, email, password, formulario} = useForm(initialForm);

    return (
        <>
            <h3>Formularios</h3>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                onChange={({ target }) => onChange(target.value, "email")}
                value={email}
            />
            <br />
            <input
                type="text"
                className="form-control"
                placeholder="Password"
                onChange={({ target }) => onChange(target.value, "password")}
                value={password}
            />
            <br />
            <code>
                <pre>{JSON.stringify(formulario, null, 2)}</pre>
            </code>
        </>
    );
};
