import { action_types } from '../constants/action_types';
const initialstate = 10
export const countreducer = (state = initialstate, { type, paylod }) => {
    switch (type) {
        case "INCREAMENT":
            return state + 1
            break;
        case "DECREAMENT":
            return state - 1
            break;
        default:
            return state
            break;
    }
}