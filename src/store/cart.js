
const ADDTOCART = 'cart/addToCart';

export default function cartReducer(state = {}, action) {
    switch(action.type){
        case ADDTOCART:
            console.log(state);
            const newState = {
                ...state, 
                [action.id]: {
                    id: [action.id],
                    count: 1
                }
            }
            return newState
        default:
            return state;
    }
}

export function addToCart(id) {
    console.log('test',id);
    return({type: ADDTOCART, id: id});
}