import { LEADERS } from "../shared/leaders";
import * as ActionTypes from "./ActionTypes";

/**Etant données que les etats sont independant nous pouvons separer les
 fonctions reducers switch c'est pour activer le type d'action
 < switch (action.type){
        default :
            return state;
    }> par defaut on retour l'etat meme */
export const Leaders = (
    state = { isLoading: true, errMess: null, leaders: [] },
    action
) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADER:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                leaders: action.payload,
            };

        case ActionTypes.LEADER_LOADING:
            return { ...state, isLoading: true, errMess: null, leaders: [] };

        case ActionTypes.LEADER_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                leaders: [],
            };

        default:
            return state;
    }
};
