import {ADD_TO_CART, REMOVE_TO_CART} from "../constants";

export const addToCart=(data)=>{
    console.warn('data',data)
    return {
        type:ADD_TO_CART,
        data
    };
}

export const remoteToCart=(data)=>{
    return {
        type:REMOVE_TO_CART,
        data
    };
}