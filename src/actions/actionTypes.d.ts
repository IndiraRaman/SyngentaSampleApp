import {ActionType} from "typesafe-actions";
import * as feedAction from "./feedAction";

export type FeedAction=ActionType<typeof feedAction>

export type RootActions =
|FeedAction
// importing and exporting my action so that it can be accessed anywhere