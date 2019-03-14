import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getStats(action) {
    try {
        //gets story and contribution stats by counting tables
    } catch (error) {
        console.log('Error with getStats:', error);
    }
}

function* editProfile(action) {
    try {
        yield axios.put(`/api/user/update-profile`, action.payload);
        yield put({ type: "SET_USER", });
    } catch (error) {
        console.log('Error with editProfile:', error);
    }
}

function* profileSaga() {
    yield takeLatest('GET_TEMPLATE_STORY', getStats);
    yield takeLatest('EDIT_PROFILE', editProfile);
}

export default profileSaga;
