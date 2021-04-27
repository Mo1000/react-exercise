import React,{ Component } from 'react' ;
import Main from './components/MainComponent';
import './App.css';
import {BrowserRouter} from "react-router-dom";


/* on a import Menu de MEnu component
menu c'est le nom donner a notre fichier a exporter tout a
fais en bas dans MenuComponent
 et on l'appele juste ici apres l'importation
 le ficher app.js retourne in vue qui est appele dans index.js*/

class App extends Component{

    
  render() {
      return (
          <BrowserRouter>
              <div>
                  <Main/>
              </div>
          </BrowserRouter>
      );
  }


}

export default App;
