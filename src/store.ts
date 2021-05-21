import AsyncStorage from "@react-native-community/async-storage"
import FeedReducer from "../src/reducers/FeedReducer"
import {PersistConfig, persistReducer, persistStore} from "redux-persist"
import saga from "./sagas/index"
import {applyMiddleware, combineReducers, createStore, Dispatch, compose} from "redux"

import createSagaMiddleware from "redux-saga"
import {RootActions} from "./actions/actionTypes"
import { fetchFeedAsync } from "./actions/FeedAction"
const onBoardingPersistConfig: PersistConfig<
unknown,
unknown,
unknown
>={
    storage: AsyncStorage,
    key:"FeedScreen"
}

export const reducers = {
    feed: FeedReducer
}

export const rootReducer = combineReducers(reducers)
export type RootState = ReturnType<typeof rootReducer>
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
const enhancers = [applyMiddleware(...middleware)]
export const store = createStore(rootReducer, compose(...enhancers))
export const dispatch = (action: any)=>{
    store.dispatch(action)
}
sagaMiddleware.run(saga)

export const persistor = persistStore(store)