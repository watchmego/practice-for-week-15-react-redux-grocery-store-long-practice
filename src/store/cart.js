
import { useDispatch }from 'react-redux';


const ADDTOCART = 'cart/addToCart';
const REMOVEFROMCART = 'cart/removeFromCart';
const ADDONETOCART = 'cart/addOneToCart';
const REMOVEONEFROMCART = 'cart/removeOneFromCart';
const UPDATEINPUTFIELD = 'cart/updateInputField';
const EMPTYCART = 'cart/emptyCart';

export default function cartReducer(state = {}, action) {
    let newState = {};
    switch(action.type){
        case ADDTOCART:
            newState = {...state}
            if(action.id in newState) {
                action.type = ADDONETOCART;
                return cartReducer(newState, action);
            } else {
                newState = {
                    ...state, 
                    [action.id]: {
                        id: [action.id],
                        count: 1
                    }
                }
            }
            return newState
        case REMOVEFROMCART:
            for(let curr in state) {
                if(state[curr].id[0] !== action.id) {
                    console.log(state[curr]);
                    newState[state[curr].id] = state[curr];
                }
            }
            return newState;
        case ADDONETOCART:
            newState = {...state};
            for(let curr in state) {
                if(newState[curr].id[0] === action.id) {
                    newState[curr].count += 1;
                }
            }
            return newState;
        case REMOVEONEFROMCART:
            newState = {...state};
            for(let curr in state) {
                if(newState[curr].id[0] === action.id) {
                    newState[curr].count -= 1;
                }
            }
            return newState;
        case UPDATEINPUTFIELD:
            newState = {...state};
            for(let curr in newState) {
                if(newState[curr].id[0] === action.payload.id) {
                    newState[curr].count = Number(action.payload.count);
                }
            }
            return newState;
        case EMPTYCART:
            newState = {...state};
            newState = {};
            return newState;
        default:
            return state;
    }
}

export function addToCart(id) {
    return({type: ADDTOCART, id: id});
}

export function removeFromCart(id) {
    return({type: REMOVEFROMCART, id: id});
}

export function addOneToCart(id) {
    return{type: ADDONETOCART, id: id};
}

export function removeOneFromCart(id) {
    console.log('removnig one');
    return{type: REMOVEONEFROMCART, id: id};
}

export function updateInputField(id, count) {
    return{type: UPDATEINPUTFIELD, payload: {id: id, count: count}};
}

export function emptyCart() {
    return{type: EMPTYCART};
}