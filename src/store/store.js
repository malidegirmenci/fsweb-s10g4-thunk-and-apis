import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from '@redux-devtools/extension';
import { myReducer } from './reducers/userReducer';

export const  myStore = createStore(myReducer, composeWithDevTools(applyMiddleware(thunk,logger)));