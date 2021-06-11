import * as ActionTypes from "./ActionTypes";

/**Etant données que les etats sont independant nous pouvons separer les
 fonctions reducers switch c'est pour activer le type d'action
 < switch (action.type){
        default :
            return state;
    }> par defaut on retour l'etat meme */
/**Les types  d'Actions mis dans le magasin redux*/
export const Promotions = (
  state = { isLoading: true, errMess: null, promotions: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_PROMOS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        promotions: action.payload,
      };

    case ActionTypes.PROMOS_LOADING:
      return { ...state, isLoading: true, errMess: null, promotions: [] };

    case ActionTypes.PROMOS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        promotions: [],
      };

    default:
      return state;
  }
};
