import * as ActionTypes from "./ActionTypes";
import { DISHES } from "../shared/dishes";
import { baseUrl } from "../shared/baseUrl";
/**Comments */


export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments,
});


export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment,
});

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess,
});
/**For display comments*/
export const fetchComments = () => (dispatch) => {
    /*setTimeout(() =>{
          dispatch(addDishes(DISHES))
      },2000);*/
    return fetch(baseUrl + "comments")
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error(
                        "Error " + response.status + ": " + response.statusText
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then((response) => response.json())
        .then((comments) => dispatch(addComments(comments)))
        .catch((error) => dispatch(commentsFailed(error.message)));
};
/**For post comments*/
export const postComment = (dishId, rating, author, comment) => (dispatch) => {
  const newCommet = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  };
  newCommet.date = new Date().toISOString();

  return fetch(baseUrl + "comments", {
    method: "POST",
    body: JSON.stringify(newCommet),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addComment(response)))
    .catch((error) => {
      console.log("Post comments", error.message);
      alert("Your comment could not be posted\nError" + error.message);
    });
};
/**Dishes*/
export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  /*setTimeout(() =>{
        dispatch(addDishes(DISHES))
    },2000);*/
  return fetch(baseUrl + "dishes")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)))
    .catch((error) => dispatch(dishesFailed(error.message)));
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess,
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});

/**Promo*/
export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading(true));

  /*setTimeout(() =>{
        dispatch(addDishes(DISHES))
    },2000);*/
  return fetch(baseUrl + "promotions")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((promos) => dispatch(addPromos(promos)))
    .catch((error) => dispatch(promosFailed(error.message)));
};

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING,
});

export const promosFailed = (errmess) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess,
});

export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos,
});
/**Leader*/

export const fetchLeader = () => (dispatch) => {
    dispatch(LeaderLoading(true));

    /*setTimeout(() =>{
          dispatch(addDishes(DISHES))
      },2000);*/
    return fetch(baseUrl + "leaders")
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error(
                        "Error " + response.status + ": " + response.statusText
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then((response) => response.json())
        .then((leader) => dispatch(addLeader(leader)))
        .catch((error) => dispatch(LeaderFailed(error.message)));
};

export const LeaderLoading = () => ({
    type: ActionTypes.LEADER_LOADING,
});

export const LeaderFailed = (errmess) => ({
    type: ActionTypes.LEADER_FAILED,
    payload: errmess,
});

export const addLeader = (leader) => ({
    type: ActionTypes.ADD_LEADER,
    payload: leader,
});

/**Feedback*/

export const addFeedback = (feedback) => ({
    type: ActionTypes.ADD_FEEDBACK,
    payload: feedback
});

export const postFeedback = (firstname, lastname, telnum, email,
                             agree,contactType,message) => (dispatch) => {

    const newFeedback = {
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email,
        agree:agree,
        contactType:contactType,
        message:message
    };
    newFeedback.date = new Date().toISOString();

    return fetch(baseUrl + 'feedback', {
        method: "POST",
        body: JSON.stringify(newFeedback),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => dispatch(addFeedback(response)))
        .catch(error =>  { console.log('FeedBack', error.message); alert('Your feedback could not be posted\nError: '+error.message); });
};

export const fetchFeedback = () => (dispatch) => {


    /*setTimeout(() =>{
          dispatch(addDishes(DISHES))
      },2000);*/
    return fetch(baseUrl + 'feedback')
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error(
                        "Error " + response.status + ": " + response.statusText
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then((response) => response.json())
      //  .then(response => alert("Thank you for your feedback!" + JSON.stringify(response)))
        .then((feedback) => dispatch(AddFeedback(feedback)))
        .catch((error) => dispatch(FeedbackFailed(error.message)));
};

export const FeedbackFailed = (errmess) => ({
    type: ActionTypes.FEEDBACK_FAILED,
    payload: errmess,
});

export const AddFeedback = (feedback) => ({
    type: ActionTypes.ADD_FEEDBACKK,
    payload: feedback,
});

