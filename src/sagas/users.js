import {takeEvery,call, fork, put} from 'redux-saga/effects';
import * as actions from '../actions/users'
import * as api from '../api/user'

function*  getUsers(){
    try {
        const result = yield call(api.getUsers);
        console.log(result.data)
        yield put(actions.getUsersSuccess({
            items: result.data      
        }));
    } catch (e) {
        
    }
}

function* watchGetUsersRequest(){
    yield takeEvery(actions.Types.GET_USERS_REQUEST,getUsers);
}
const usersSagas=[
    fork(watchGetUsersRequest)
];

export default usersSagas;