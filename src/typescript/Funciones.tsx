import React from 'react';

// POR DEFECTO DEVUELVE UNA FUNCION JSX
const Funciones = () => {

  // Devuelva un tipo number
  // const sumar = (): number => {
  //   return 2 + 1;
  // }
  // const sumar = (a, b): number => {
  //   return a + b;
  // }
  const sumar = (a: number, b: number): number => {
    return a + b;
  }

  return (
    <>
      <h3>Funciones</h3>
      {/* <span>El resultado es: {sumar()}</span> */}
      {/* <span>El resultado es: {sumar(1, true)}</span> */}
      <span>El resultado es: {sumar(2,1)}</span>
    </>
  );
};

export default Funciones;
