import {Types} from '../actions/users'

const INITIAL_STATE ={
    items:[],
    error:''
};

export default function users(state = INITIAL_STATE, action){
    // eslint-disable-next-line default-case
    switch(action.type){
        case Types.GET_USERS_SUCCESS:{
            return {
                ...state,
                items:action.payload.items
            }
        }
        case Types.USERS_ERROR:{
            console.log(action.payload.error)
            return {
                ...state,
                items:action.payload.error
            }
        }

        default: {
            return state;
        }
    }
}