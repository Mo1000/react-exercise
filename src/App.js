import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';

/*on a import Menu de MEnu component 
menu c'est le nom donner a notre fichier a exporter tout a
fais en bas dans MenuComponent
 et on l'appele juste ici apres l'importation
 le ficher app.js retourne in vue qui est appele dans index.js*/
function App() {
  return (
      <div >
          <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
              </div>
          </Navbar>
          <Menu />

      </div>
  );
}

export default App;
