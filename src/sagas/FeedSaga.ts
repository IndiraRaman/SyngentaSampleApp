import {call, delay, put, race, take, takeEvery} from "redux-saga/effects";
import {fetchFeedAsync} from "../actions/feedAction";
import apiService from "../service/apiService";

// creating feedSaga 
export function* fetchFeedSaga(){
    try{
        const { response } = yield race({
            response: call(apiService.fetchFeed),
            cancel: take(fetchFeedAsync.cancel),
            failed: take(fetchFeedAsync.failure),
            timeout: delay(60000),
        });

        yield put(fetchFeedAsync.success(response));
    }catch(error){
        yield put(fetchFeedAsync.failure(error))
    }
}
    export default function* root(){
        yield takeEvery(fetchFeedAsync.request, fetchFeedSaga);
    }
