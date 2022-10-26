import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

const initialState = {
    cardData:[]
};

export default function cardItems(state=initialState, action){
    console.warn('reducer', action);
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                cardData: action.data
            };
            break;
        default:
            return state;
    }
}