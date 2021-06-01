import * as ActionTypes from './ActionTypes';

/**Etant données que les etats sont independant nous pouvons separer les
 fonctions reducers switch c'est pour activer le type d'action
 < switch (action.type){
        default :
            return state;
    }> par defaut on retour l'etat meme */
export  const Comments =(state={
    errMess:null,
    comments:[]
},action) =>{
    switch (action.type){
        case ActionTypes.ADD_COMMENTS:
            return {...state,isLoading: false,errMess: null,comments: action.payload}

        case ActionTypes.COMMENTS_FAILED:
            return {...state,isLoading: false,errMess: action.payload,comments: []}

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return {...state, comments: state.comments.concat(comment)};

        default :
            return state;
    }
}