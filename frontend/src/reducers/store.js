import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import reducers from ".";
import detail from "./detail";
import home from "./home";
import router from "./router";

const initialState = {};


const appReducer = combineReducers({
    reducers,
    detail,
    home,
    router
})

const rootReducer = (state, action) => {
  if (action.type === "RESET") {
    state = undefined;
  }
  return appReducer(state, action);
};

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composerEnhancer(applyMiddleware(thunk))
);

export default store;