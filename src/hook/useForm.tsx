import { useState } from 'react';

export const useForm = <T extends Object>(initialForm: T) => {
    const [state, setstate] = useState(initialForm);

    const onChange = (value: string, campo: keyof T) => {
        setstate({
            ...state,
            [campo]: value,
        });
    };
    return {
        formulario: state,
        ...state,
        onChange,
    };
};
