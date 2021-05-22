import {fetchFeedAsync, setFeedProgress} from "../actions/feedAction";
import {FeedAction} from "../actions/actionTypes"
import {action, createReducer} from "typesafe-actions";
import { FeedDetails } from "src/models/FeedModal";

// creating an interface
export interface FeedState{
    feed?: FeedDetails;
    progress?: boolean
}
// Defining an initial state
const initialState: FeedState ={
    feed:{
        progress: false,
    }}

// creating feedReducer
const feedReducer = createReducer<FeedState, FeedAction>(initialState)
// Success
.handleAction(fetchFeedAsync.success, (state, action)=>({
    ...state,
    feed: action.payload,
}))
// Failure
.handleAction(fetchFeedAsync.failure, (state, action) =>({
    ...state,
}))
.handleAction(setFeedProgress, (state, action) =>({
    feed:{
        progress: action.payload
    },
}))
export default feedReducer;