import * as ActionTypes from "./ActionTypes";

/**Etant données que les etats sont independant nous pouvons separer les
 fonctions reducers switch c'est pour activer le type d'action
 < switch (action.type){
        default :
            return state;
    }> par defaut on retour l'etat meme */
/**Les types  d'Actions mis dans le magasin redux*/
export const FeedBack = (
    state = {
        errMess: null,
        feedback: [],
    },
    action
) => {
    switch (action.type) {

        case ActionTypes.ADD_FEEDBACKK:
            return {
              ...state,
              isLoading: false,
              errMess: null,
              feedback: action.payload,
            };
      
          case ActionTypes.FEEDBACK_FAILED:
            return {
              ...state,
              isLoading: false,
              errMess: action.payload,
             feedback: [],
            };
      

        case ActionTypes.ADD_FEEDBACK:
            var  Feedback = action.payload;
            console.log("FeedBack: ", Feedback);
            return { ...state, feedback: state.feedback.concat(Feedback) };

        default:
            return state;
    }
};
