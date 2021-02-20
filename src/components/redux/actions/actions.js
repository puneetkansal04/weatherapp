import { ADD_DATA, GET_API_DATA } from "./action-types"

export const get_api_data = (data) => {
    return {
        type: GET_API_DATA,
        payload: data
    }
}