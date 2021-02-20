import { ADD_DATA } from "../actions/action-types";

export const Weather_data = (state = {}, action) => {
    switch (action.type) {
        case ADD_DATA:
            return { ...action.payloadData }
        default:
            return state
    }
}