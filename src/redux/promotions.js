import { PROMOTIONS } from '../shared/promotions';

/**Etant données que les etats sont independant nous pouvons separer les
 fonctions reducers switch c'est pour activer le type d'action
 < switch (action.type){
        default :
            return state;
    }> par defaut on retour l'etat meme */
export  const Promotions=(state=PROMOTIONS ,action) =>{
    switch (action.type){
        default :
            return state;
    }
}