import {fetchFeedAsync} from "../actions/feedAction";
import {FeedAction} from "../actions/actionTypes"
import { createReducer} from "typesafe-actions";
import { FeedDetails } from "src/models/FeedModal";

// creating an interface
export interface FeedState{
    feed?: FeedDetails;
}
// Defining an initial state
const initialState: FeedState ={}

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