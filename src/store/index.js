import { getDefaultNormalizer } from "@testing-library/react";
import { combineReducers, applyMiddleware, compose, legacy_createStore as createStore} from "redux";
import produceReducer from "./produce";
import cartReducer from "./cart";

const rootReducer = combineReducers({
    produce: produceReducer,
    cart: cartReducer
});

let enhancer;



const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
}

if (process.env.NODE_ENV !== "production") {
    const logger = require("redux-logger").default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(logger));
}

export default configureStore;