import { ADD_GIPHY } from "./const"
import { TOGGLE_LOADING } from "./const"

const defaultState = {
  loading: false,
  data: []
}

export const TrandingReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_GIPHY:
      return {
        loading: false,
        data: [...state.data, ...action.payload]
      }
    case TOGGLE_LOADING: return {
      ...state,
      loading: action.payload
    }
    default:
      return state
  }
}