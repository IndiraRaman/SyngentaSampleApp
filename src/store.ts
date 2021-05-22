import AsyncStorage from "@react-native-community/async-storage";
import FeedReducer, { FeedState } from "../src/reducers/FeedReducer";
import {PersistConfig, persistReducer, persistStore} from "redux-persist";
import saga from "./sagas/index";
import {applyMiddleware, combineReducers, createStore, Dispatch, compose} from "redux";

import createSagaMiddleware from "redux-saga";
import {RootActions} from "./actions/actionTypes";
import { MiddlewareAPI } from "redux";

const feedPersistConfig: PersistConfig<
FeedState,
unknown,
unknown,
unknown
>={
    storage: AsyncStorage,
    key:"feed"
}

// using persistReducer to store data in redux store
export const reducers = {
    feed: persistReducer(feedPersistConfig, FeedReducer)
}

// creating rootReducer with the help of combineReducer by passing reducer
export const rootReducer = combineReducers(reducers);
export type RootState = ReturnType<typeof rootReducer>

const appMiddleware = (_store: MiddlewareAPI)=>(next: Dispatch) =>(
    action: RootActions
)=>{
    next(action);
}
const sagaMiddleware = createSagaMiddleware();

// creating our middleware
const middleware = [sagaMiddleware, appMiddleware]

// creating enhancers by passing middleware to applyMiddleware
const enhancers = [applyMiddleware(...middleware)]

// creating store by passing rootReducer & middleware
export const store = createStore(rootReducer, compose(...enhancers));
export const dispatch = (action: any)=>{
    store.dispatch(action);
}
sagaMiddleware.run(saga);

// Exporting our store to persistStore
export const persistor = persistStore(store);