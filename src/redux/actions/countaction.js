import {action_types} from '../constants/action_types';

export const increamentcount=(count)=>{
    return {
        type:action_types.INCREAMENT_COUNT,
        paylod:count
    }

}

export const decreamentcount=(count)=>{
    return {
        type:action_types.DECREMENT_COUNT,
        paylod:count
    }

}