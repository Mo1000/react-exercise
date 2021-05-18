import {createStore,combineReducers ,applyMiddleware} from 'redux';
import {createForms} from "react-redux-form";
import {Dishes} from "./dishes";
import {Comments} from "./comments";
import {Leaders} from "./leaders";
import {Promotions} from "./promotions";
import thunk from "redux-thunk";
import logger from 'redux-logger'
import {InitialFeedback} from "./Forms";

/**On a 4 fonctions  reducers avec leurs etats et leurs actions
 maintenant on veut les combiner et les metre dans le magasin
 redux pour les combiner on utilse <
 combineReducers >*/
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes:Dishes,
            comments:Comments,
            promotions:Promotions,
            leaders:Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk,logger)
        /**si on veut utiliser une seul fonction reducer pour
         envoyer plusieurs etat voir reducer.js
         on implemente le code si dessous ici dans le magasin
         const store = createStore
         Reducer, // reducer
         initialState, // our initialState**/
    );

    return store;
}