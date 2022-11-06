import { SET_DETAIL, SET_ID } from "../actions"

export default function detail (state = {
    dataDetail : null,
    error: '',
    id: null
}, action){
    switch (action.type) {
        case SET_DETAIL:
            return {
                ...state,
                dataDetail: action?.payload,
                error: action?.error
            }
        case SET_ID:
            return {
                ...state,
                id : action.payload
            }
    
        default: return state
    }
}