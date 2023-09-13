import {Types} from '../actions/users'

const INITIAL_STATE ={
    items:[]
};

export default function users(state = INITIAL_STATE, action){
    // eslint-disable-next-line default-case
    switch(action.type){
        case Types.GET_USERS_SUCCESS:{
            return {
                items:action.payload.items
            }
        }
        default: {
            return state;
        }
    }
}