import AsyncStorage from "@react-native-community/async-storage";
import FeedReducer from "../src/reducers/FeedReducer";
import { persistReducer, persistStore} from "redux-persist";
import saga from "./sagas/index";
import {applyMiddleware, combineReducers, createStore, Dispatch, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import {RootAction} from "./actions/actionTypes";
import { MiddlewareAPI } from "redux";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";


// Redux-persist library provides ways to store redux state tree into some sort
// of storage and rehydrate when app is reopened.
// Here asyncStorage is used with PersistConfig for storing data.

const feedPersistConfig = {
    key: 'feed',
    storage: AsyncStorage,
    stateReconciler: hardSet,
    blacklist: [],
    };

// using persistReducer to store data in redux store by passing FeedReducer and feedPersistConfig
export const reducers = {
    FeedState: persistReducer(feedPersistConfig, FeedReducer)
}

// creating rootReducer with the help of combineReducer by passing reducer
export const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>

// Redux middleware function provides a medium to interact with 
// dispatched action before they reach the reducer.
//  Redux middleware applies middleware to store.

const appMiddleware = (_store: MiddlewareAPI)=>(next: Dispatch) =>(
    action: RootAction
)=>{
    next(action);
}
const sagaMiddleware = createSagaMiddleware();

// creating our middleware
const middleware = [sagaMiddleware, appMiddleware]

// Enhancers are higher order function that add some extra functionality to store.
// creating enhancers by passing middleware to applyMiddleware
const enhancers = [applyMiddleware(...middleware)]

// creating store by passing rootReducer & store enhancers by passing it through compose
export const store = createStore(rootReducer, compose(...enhancers));

sagaMiddleware.run(saga);

// Exporting our store to persistStore
export const persistor = persistStore(store);