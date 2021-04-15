import React,{ Component } from 'react' ;
import { Media } from 'reactstrap';

class Menu extends Component{
    constructor(props){
        super(props);

        this.state={
            /*definir une liste objet java script ou
            in met tous les objet avec leur rederence */
            dishes: [
                {
                  id: 0,
                  name:'Uthappizza',
                  image: 'assets/images/uthappizza.png',
                  category: 'mains',
                  label:'Hot',
                  price:'4.99',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
               {
                  id: 1,
                  name:'Zucchipakoda',
                  image: 'assets/images/zucchipakoda.png',
                  category: 'appetizer',
                  label:'',
                  price:'1.99',
                  description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
               {
                  id: 2,
                  name:'Vadonut',
                  image: 'assets/images/vadonut.png',
                  category: 'appetizer',
                  label:'New',
                  price:'1.99',
                  description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
               {
                  id: 3,
                  name:'ElaiCheese Cake',
                  image: 'assets/images/elaicheesecake.png',
                  category: 'dessert',
                  label:'',
                  price:'2.99',
                  description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
               ],

        };
    }
   
        /*Comme dishes est definis dans this.state on peut
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
    render(){
        const menu= this.state.dishes.map((dish)=>{
                return(
                    <div key={dish.id} className="col-12 mt-5">
                        
                        <Media tag="li">
                            <Media left middle>
                                <Media object src={dish.image} alt={dish.name} />
                            </Media>

                            <Media body className="ml-5">
                                <Media heading>{dish.image}</Media>
                                <p>{dish.description}</p>
                            </Media>

                        </Media>

                    </div>
                );
        }
        );
       return(
           <div className="container">
               <div className="row">
                   <Media list>
                       {menu}
                   </Media>

               </div>

           </div>
       ); 
    }
}   
export default Menu;