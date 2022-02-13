import './App.css';
import MainNavigation from './Shared/Components/MainNavigation/MainNavigation.js';

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

//imports de las paginas de los ejercicios
//ejercicio 2
import Ejercicio2 from './Ejercicio2/Components/Pages/Ejercicio2.js';
//ejercicio 3
import Ejercicio3 from './Ejercicio3/Components/Pages/Ejercicio3.js';
//ejercicio 4


function App() {
  return (
    <Router>
      <main>
        <Switch>
          {/** ruta para pagina principal o ejercicio 1 */}
          <Route path="/" exact>
            <MainNavigation/>
          </Route>
          {/** Ruta para ejercicio 2 */}
          <Route path="/ej2">
            <Ejercicio2/>
          </Route>
          {/** Ruta para ejercicio 3 */}
          <Route path="/ej3">
            <Ejercicio3/>
          </Route>
          {/** Ruta para ejercicio 4 */}
          <Route path="/ej4">
            {/** componente importado de ejercicio 4 */}
          </Route>
          <Redirect to="/"/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
