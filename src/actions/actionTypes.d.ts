import {ActionType} from "typesafe-actions";
import * as feedAction from "./feedAction";

export type FeedAction=ActionType<typeof feedAction>

export type RootActions =
|FeedAction