import React,{ Component } from 'react' ;
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import Detaildish from "./DetailsDishComponent";
import { DISHES } from '../shared/dishes';



/** on a import Menu de MEnu component
menu c'est le nom donner a notre fichier a exporter tout a
fais en bas dans MenuComponent
 et on l'appele juste ici apres l'importation
 le ficher app.js retourne in vue qui est appele dans index.js
 filter filtre le tableau selon la condition et retourne un sous
 tableau avecle element corespondant au filtrage(condition)
 etant un tableau le"[0]" veut dire recuperer le
 premeier element du tableau*/

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish:null
        };
    }
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId}
        );
    }
    render() {
        return (
            <div >
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes}
                onClick={(dishId) => this.onDishSelect(dishId)}/>
                <Detaildish
                    dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish )[0]} />
            </div>
        );
    }


}

export default Main;
