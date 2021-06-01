import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import {baseUrl} from "../shared/baseUrl";

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});
/**Dishes*/
export  const fetchDishes =() =>(dispatch) =>{
    dispatch(dishesLoading(true));

    /*setTimeout(() =>{
        dispatch(addDishes(DISHES))
    },2000);*/
    return fetch(baseUrl + 'dishes')
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)));
}

export const  dishesLoading = () =>({
    type: ActionTypes.DISHES_LOADING
});

export const  dishesFailed = (errmess) =>({
    type: ActionTypes.DISHES_FAILED,
    payload:errmess
});

export const  addDishes = (dishes) =>({
    type: ActionTypes.ADD_DISHES,
    payload:dishes
});
/**Comments*/
export const  commentsFailed = (errmess) =>({
    type: ActionTypes.COMMENTS_FAILED,
    payload:errmess
});

export const  addComments = (comments) =>({
    type: ActionTypes.ADD_COMMENTS,
    payload:comments
});
export  const fetchComments =() =>(dispatch) =>{


    /*setTimeout(() =>{
        dispatch(addDishes(DISHES))
    },2000);*/
    return fetch(baseUrl + 'comments')
        .then(response => response.json())
        .then(comments=> dispatch(addComments(comments)));
}

/**Promo*/
export  const fetchPromos =() =>(dispatch) =>{
    dispatch(promosLoading(true));

    /*setTimeout(() =>{
        dispatch(addDishes(DISHES))
    },2000);*/
    return fetch(baseUrl + 'promotions')
        .then(response => response.json())
        .then(promotions => dispatch(addPromos(promotions)));
}

export const  promosLoading = () =>({
    type: ActionTypes.PROMOS_LOADING
});

export const  promosFailed = (errmess) =>({
    type: ActionTypes.PROMOS_FAILED,
    payload:errmess
});

export const  addPromos = (promos) =>({
    type: ActionTypes.ADD_PROMOS,
    payload:promos
});

