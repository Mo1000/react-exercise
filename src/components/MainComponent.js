import React,{ Component } from 'react' ;
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Menu from './MenuComponent';
import Contact from "./ContactComponent";
import Detaildish from "./DetailsDishComponent";
import Header from "./HeadersComponent";
import Footer from "./FooterComponent";
import { DISHES } from '../shared/dishes';
import  {COMMENTS} from "../shared/comments";
import {LEADERS} from "../shared/leaders";
import  {PROMOTIONS} from "../shared/promotions";
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
            comments:COMMENTS,
            promotions:PROMOTIONS,
            leaders:LEADERS

        };
    }

    render() {
        const HomePage= () => {
            return(
                <Home
                    dish={
                    this.state.dishes.filter(
                    (dish) => dish.featured)[0]
                         }
                    promotion={
                          this.state.promotions.filter(
                              (promo) => promo.featured)[0]
                                 }
                    leader={
                        this.state.leaders.filter(
                            (leader) =>leader.featured)[0]
                    }
                />
            );
        }

        const  DishWithId =({match})=> {
            return(
                <Detaildish dish={this.state.dishes.filter((dish) => dish.id=== parseInt(match.params.dishId,10))[0]}
                comments={this.state.comments.filter((comment)=> comment.dishId=== parseInt(match.params.dishId,10))}/>
            );
        }
        return (
            <div >
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path="/menu/:dishId" component={DishWithId}/>
                    <Route path="/aboutus" component={() => <About leaders={this.state.leaders}/>}/>
                    <Route exact path="/contactus" component={Contact}/>
                    <Redirect to="/home" />
                </Switch>
                <Footer/>
            </div>
        );
    }


}

export default Main;
