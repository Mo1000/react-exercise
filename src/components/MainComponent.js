import React,{ Component } from 'react' ;
import Home from "./HomeComponent";
import Menu from './MenuComponent';
import Detaildish from "./DetailsDishComponent";
import Header from "./HeadersComponent";
import Footer from "./FooterComponent";
import { DISHES } from '../shared/dishes';
import  {Switch,Route,Redirect} from "react-router-dom";


/** on a import Menu de MEnu component
menu c'est le nom donner a notre fichier a exporter tout a
fais en bas dans MenuComponent
 et on l'appele juste ici apres l'importation
 le ficher app.js retourne in vue qui est appele dans index.js
 filter filtre le tableau selon la condition et retourne un sous
 tableau avecle element corespondant au filtrage(condition)
 etant un tableau le"[0]" veut dire recuperer le
 premeier element du tableau
 Route lorsqu'on ecrit component={Menu} alors on ne peut pas
 passer des accesoires au composant menu pour passer des accessoires
 on doit faire component={() => <Menu preciser l'acessoire a ajouter>}
 Redirect pour une route par defaut*/

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,

        };
    }

    render() {
        const HomePage= () => {
            return(
                <Home/>
            );
        }
        return (
            <div >
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer/>
            </div>
        );
    }


}

export default Main;
