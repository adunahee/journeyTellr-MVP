import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getEmployees(action) {
    try {
        //autopopulates search results for adding contributors
        const response = yield axios.get(`/invite/${action.payload}`);
        yield put({type: 'SET_EMPLOYEE_RESULTS', payload: response.data})
    } catch (error) {
        console.log('Error with getEmployees saga', error);
    }
}

function* getContributor(action) {
    try {
        //gets contributors for a given story
        yield console.log('in getContributor saga with:', action)
    } catch (error) {
        console.log('Error with storyTemplateDetails:', error);
    }
}

function* deleteContributor(action) {
    try {
        //delete contributor from story
        yield console.log('in deleteContributor saga with:', action)
    } catch (error) {
        console.log('Error with storyTemplateDetails:', error);
    }
}

function* addContributor(action) {
    try {
        //add contributor to story
        yield console.log('in addContributor saga with:', action)
    } catch (error) {
        console.log('Error with storyTemplateDetails:', error);
    }
}



function* contributorSaga() {
    yield takeLatest('GET_EMPLOYEES', getEmployees);
    yield takeLatest('GET_CONTRIBUTOR', getContributor);
    yield takeLatest('DELETE_CONTRIBUTOR', deleteContributor);
    yield takeLatest('ADD_CONTRIBUTOR', addContributor);
}

export default contributorSaga;