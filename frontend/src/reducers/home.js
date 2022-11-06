import { GET_DATA, SET_PAGENATION } from "../actions"

export default function home (state = {
    data : null,
    pagenation: 1,
    location: '',
    desc: '',
    positions: false,
    jobsList: 'Job List'
}, action){
    switch (action.type) {
        case GET_DATA:
            return {
              ...state,
              data: action.payload.data,
              location: action.payload.location,
              desc: action.payload.description,
              positions: action.payload.positions,
              jobsList: action.payload.jobs_list
            }
        case SET_PAGENATION:
            return {
              ...state,
              pagenation: action.payload
            }
    
        default: return state
    }
}