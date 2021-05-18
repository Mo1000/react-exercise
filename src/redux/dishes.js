//import { DISHES } from '../shared/dishes';
import * as ActionTypes from './ActionTypes';
/**Etant données que les etats sont independant nous pouvons separer les
 fonctions reducers switch c'est pour activer le type d'action
 < switch (action.type){
        default :
            return state;
    }> par defaut on retour l'etat meme */
export  const Dishes = (state={ isLoading:true,
    errMess:null,
    dishes:[]
},action) =>{
    switch (action.type){
        case ActionTypes.ADD_DISHES:
            return {...state,isLoading: false,errMess: null,dishes: action.payload}
        case ActionTypes.DISHES_LOADING:
            return {...state,isLoading: true,errMess: null,dishes: []}

        case ActionTypes.DISHES_FAILED:
            return {...state,isLoading: false,errMess: action.payload,dishes: []}

        default :
            return state;
    }
}