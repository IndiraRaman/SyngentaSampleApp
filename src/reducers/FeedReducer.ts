import {fetchFeedAsync} from "../actions/feedAction";
import {action, createReducer} from "typesafe-actions";
import { FeedDetails } from "src/models/FeedModal";
import { FeedAction } from "src/actions/actionTypes";

// creating an interface
export interface FeedState{
    feed?: FeedDetails
}
// Defining an initial state
const initialState: any ={}

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
export default feedReducer;