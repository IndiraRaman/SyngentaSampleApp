import {all} from "redux-saga/effects"
import feed from "../sagas/FeedSaga"

export default function* root(){
yield all([
    feed()
])
}