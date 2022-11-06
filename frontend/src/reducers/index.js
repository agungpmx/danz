import { SET_HAS_MORE, SET_LOADING } from '../actions'

export default function reducers (state = {
      loading: false,
      hasMore: false,
      error: null,
      data: null
  }, action) {
    switch (action.type) {
        case SET_LOADING:
          return {
            ...state,
            loading: action.payload
          }
        case SET_HAS_MORE:
          return {
            ...state,
            hasMore: action.payload
          }
        default: return state
      }
  }