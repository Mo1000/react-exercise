import { LEADERS } from '../shared/leaders';

/**Etant données que les etats sont independant nous pouvons separer les
 fonctions reducers switch c'est pour activer le type d'action
 < switch (action.type){
        default :
            return state;
    }> par defaut on retour l'etat meme */
export  const Leaders =(state=LEADERS ,action) =>{
    switch (action.type){
        default :
            return state;
    }
}