import React,{ Component } from 'react' ;
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';
import Desk from "./components/DeskDishComponent";

/* on a import Menu de MEnu component
menu c'est le nom donner a notre fichier a exporter tout a
fais en bas dans MenuComponent
 et on l'appele juste ici apres l'importation
 le ficher app.js retourne in vue qui est appele dans index.js*/

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }
    
  render() {
      return (
          <div >
              <Navbar dark color="primary">
                  <div className="container">
                      <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                  </div>
              </Navbar>
              <Menu dishes={this.state.dishes} />
              <Desk/>
          </div>
      );
  }


}

export default App;
