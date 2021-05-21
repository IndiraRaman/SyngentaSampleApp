import {fetchFeedAsync} from "../actions/feedAction";
import {action, createReducer} from "typesafe-actions";
import { FeedDetails } from "src/models/FeedModal";
import { FeedAction } from "src/actions/actionTypes";


export interface FeedState{
    feed?: FeedDetails
}
const initialState: any ={}
const feedReducer = createReducer<FeedState, FeedAction>(initialState)
.handleAction(fetchFeedAsync.success, (state, action)=>({
    ...state,
    feed: action.payload,
}))
.handleAction(fetchFeedAsync.failure, (state, action) =>({
    ...state,
}))
export default feedReducer;