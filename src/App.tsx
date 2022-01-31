import { Funciones, ObjetosLiterales, TiposBasicos } from './typescript';
import { Contador, ContadorHook, Formularios, Login, Usuarios } from './components'

const App = () => {
  return (
    <div className="mt-2">
      <h1>INTRODUCCION - TYPESCRIPT</h1>
      <hr />
      <TiposBasicos/>
      <hr/>
      <ObjetosLiterales/>
      <hr/>
      <Funciones/>
      <hr />
      <Contador />
      <hr />
      <ContadorHook />
      <hr />
      <Login />
      <hr />
      <Usuarios />
      <hr />
      <Formularios />
    </div>
  );
};
export default App;
