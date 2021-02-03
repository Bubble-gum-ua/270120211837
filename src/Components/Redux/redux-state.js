import postReducer from "./posts-resucer";
import {combineReducers, createStore} from "redux";


let reducers = combineReducers( {
    posts: postReducer
})

let store = createStore(reducers);
window.store = store;
export default store;
