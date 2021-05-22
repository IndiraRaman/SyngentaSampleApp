import { FeedDetails } from "src/models/FeedModal";
import { createAsyncAction } from "typesafe-actions";

export const fetchFeedAsync = createAsyncAction(
// creating my createAsyncAction from typesafe-actions

    ["FEED_FETCH", ()=>{ console.log("Feed Fetch")}],
    ["FEED_SUCCESS", (res: FeedDetails)=> res],
    ["FEED_FAILURE", (err: Error)=> err],
    "FEED_CANCEL"
)();
