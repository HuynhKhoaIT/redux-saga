import {takeEvery, takeLatest, take, call, fork, put} from 'redux-saga/effects';
import * as actions from '../actions/users'
import * as api from '../api/user'

function*  getUsers(){
    try {
        const result = yield call(api.getUsers);
        console.log(result.data)
        yield put(actions.getUsersSuccess({
            items: result.data.data      
        }));
    } catch (error) {
        yield put(actions.usersError({
            error:'An error occurred when trying to get the user'
        }))
    }
}

function* watchGetUsersRequest(){
    yield takeEvery(actions.Types.GET_USERS_REQUEST,getUsers);
}

function* createUser(action){
    try {
        yield call(api.createUser, {firstName: action.payload.firstName, lastName: action.payload.lastName})
        yield call(getUsers)
    } catch (error) {
        yield put(actions.usersError({
            error:'An error occurred when trying to create the user'
        }))
    }
}

function* watchCreateUserRequest(){
    yield takeLatest(actions.Types.CREATE_USER_REQUEST,createUser);
}

function* deleteUser({action}){
    console.log(action.payload.userId)
    try {
        yield call(api.deleteUser, {userId: action.payload.userId});
        yield call(getUsers)
    } catch (error) {
        yield put(actions.usersError({
            error:'An error occurred when trying to delete the user'
        }))
    }
}

function* watchDeleteUserRequest(){
    while(true){
        const action = yield take(actions.Types.DELETE_USER_REQUEST);
        yield call(deleteUser, {
            userId: action.payload.userId
        })
    }
}
const usersSagas=[
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest),
    fork(watchDeleteUserRequest)
];

export default usersSagas;