import { combineReducers } from "redux";
import { countreducer } from "./countreducer";

  export const reducercombine=combineReducers({
    countdata:countreducer,
})

