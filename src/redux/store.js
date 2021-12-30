import { createStore } from "redux";
import { reducercombine } from './reducers/combinereducer'

const store = createStore(reducercombine,
    {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() for redux dev tool

);

export default store