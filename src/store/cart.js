
const ADDTOCART = 'cart/addToCart';
const REMOVEFROMCART = 'cart/removeFromCart';

export default function cartReducer(state = {}, action) {
    let newState = {};
    switch(action.type){
        case ADDTOCART:
            newState = {
                ...state, 
                [action.id]: {
                    id: [action.id],
                    count: 1
                }
            }
            return newState
        case REMOVEFROMCART:
            newState = {}
            for(let curr in state) {
                if(state[curr].id[0] !== action.id) {
                    console.log(state[curr]);
                    newState[state[curr].id] = state[curr];
                }
            }
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