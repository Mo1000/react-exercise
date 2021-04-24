import React from 'react' ;
import { Card,CardImg,CardImgOverlay,CardTitle } from 'reactstrap';



    /**renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }*/
   
        /** Comme dishes est definis dans this.state on peut
        se referer a ca pour les attribuer 
        map pour alterner entre tout les elements 
         on utulise un iterateur dish et on le dis
         pour chaque iteration de la liste ou tableau fais tel chose
         dans le div le key sert a reconnaitre les elements ici par exemple 
         pour key= id dans chaque iteration dans la liste pour garantir
         l'uniciter 
         dans d'autre cas donner une key pour garantir l'uniciter et l'appel 
         plus tard
         tag="li" dans media pour dire que notre media se comportera comme 
         uen liste 
         l'afficahge se fais dans App.js on import et on ecrit le nom du fichier 
         importer 
         dans le return on a fais media lsit pour dire c'est 
         une liste de media 
         si on ne le fais pas il affichera un seul element */

    function RenderMenuItem({dish,onClick}){
        return(
            <Card key={dish.id}
                    onClick={() => onClick(dish.id) }>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }
    const Menu=(props) =>{
        const menu = props.dishes.map((dish) => {
            return (
                <div  className="col-12 col-md-5 m-1">
                  <RenderMenuItem dish={dish} onClick={props.onClick}/>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>

            </div>
        );
    }
        
    
       
   
export default Menu;