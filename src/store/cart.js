const ADDTOCART = 'cart/addToCart';
const REMOVEFROMCART = 'cart/removeFromCart';
const ADDONETOCART = 'cart/addOneToCart';
const REMOVEONEFROMCART = 'cart/removeOneFromCart';
const UPDATEINPUTFIELD = 'cart/updateInputField';
const EMPTYCART = 'cart/emptyCart';
const SHOWHIDECART = 'cart/showHideCart';


export function cartReducer(state = {}, action) {
    let newState = {};
    switch(action.type){
        case ADDTOCART:
            newState = {...state}
            for(let i in state) {
                if(action.id === state[i].id){
                    action.type = ADDONETOCART;
                    return cartReducer(newState, action);
                }
            } 
            newState[Object.keys(state)[Object.keys(state).length-1] + 1 || 0] = {
                    id: action.id,
                    count: 1
            }
            return newState
        case REMOVEFROMCART:
            for(let curr in state) {
                if(state[curr].id !== action.id) {
                    console.log(state[curr]);
                    newState[state[curr].id] = state[curr];
                }
            }
            return newState;
        case ADDONETOCART:
            newState = {...state};
            for(let curr in state) {
                if(newState[curr].id === action.id) {
                    newState[curr].count += 1;
                }
            }
            return newState;
        case REMOVEONEFROMCART:
            newState = {...state};
            for(let curr in state) {
                if(newState[curr].id === action.id) {
                    newState[curr].count -= 1;
                }
            }
            return newState;
        case UPDATEINPUTFIELD:
            newState = {...state};
            for(let curr in newState) {
                if(newState[curr].id === action.payload.id) {
                    newState[curr].count = Number(action.payload.count);
                }
            }
            return newState;
        case EMPTYCART:
            return newState = {};
        default:
            return state;
    }
}

export function showCartReducer(state = {}, action) {
    switch(action.type) {
        case SHOWHIDECART:
            console.log('showing cart', state, action.status);
            let newState = {...state};
            newState.showCart = action.status;
            console.log(newState);
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

export function showHideCart(cartVisibility = true) {
    return{type: SHOWHIDECART, status: cartVisibility};
}

export const getCart = (state) => [Object.values(state.cart),state.produce];