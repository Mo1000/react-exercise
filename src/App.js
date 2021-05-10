import React,{ Component } from 'react' ;
import Main from './components/MainComponent';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import  {ConfigureStore} from "./redux/configureStore";

/* on a import Menu de MEnu component
menu c'est le nom donner a notre fichier a exporter tout a
fais en bas dans MenuComponent
 et on l'appele juste ici apres l'importation
 le ficher app.js retourne in vue qui est appele dans index.js*/

const store=ConfigureStore();
class App extends Component{


  render() {
      return (

          <Provider store={store}>
              <BrowserRouter>
                  <div className="App">
                      <Main />
                  </div>
              </BrowserRouter>
          </Provider>
      );
  }


}

export default App;
