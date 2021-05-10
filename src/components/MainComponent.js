import React,{ Component } from 'react' ;
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Menu from './MenuComponent';
import Contact from "./ContactComponent";
import Detaildish from "./DetailsDishComponent";
import Header from "./HeadersComponent";
import Footer from "./FooterComponent";
import  {Switch,Route,Redirect,withRouter} from "react-router-dom";
import {connect} from "react-redux";


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
 Redirect pour une route par defaut
 <
 withRouter(connect(mapStateToProps)(Main));> une fonction mapStateToProps a ete creer
 elle sert a importer les etats du Magasin Redux maintenant pour la connection a notre class
 principal on fait <
 (connect(mapStateToProps)(Main))> "Main est le nom de notre class principal"
 connect pour se connecter a magasin
 si on utilise le router dans notre class pour le fournir a autre composant  on met devant
 " withRouter " et comme ils sont des accessoires importer du magasin redux on utilsera
 this.props pour l'appel*/

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}
class Main extends Component{
    constructor(props) {
        super(props);

    }


    render() {
        const HomePage= () => {
            return(
                <Home
                    dish={
                    this.props.dishes.filter(
                    (dish) => dish.featured)[0]
                         }
                    promotion={
                          this.props.promotions.filter(
                              (promo) => promo.featured)[0]
                                 }
                    leader={
                        this.props.leaders.filter(
                            (leader) =>leader.featured)[0]
                    }
                />
            );
        }

        const  DishWithId =({match})=> {
            return(
                <Detaildish dish={this.props.dishes.filter((dish) => dish.id=== parseInt(match.params.dishId,10))[0]}
                comments={this.props.comments.filter((comment)=> comment.dishId=== parseInt(match.params.dishId,10))}/>
            );
        }
        return (
            <div >
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path="/menu/:dishId" component={DishWithId}/>
                    <Route path="/aboutus" component={() => <About leaders={this.props.leaders}/>}/>
                    <Route exact path="/contactus" component={Contact}/>
                    <Redirect to="/home" />
                </Switch>
                <Footer/>
            </div>
        );
    }


}

export default withRouter(connect(mapStateToProps)(Main));
