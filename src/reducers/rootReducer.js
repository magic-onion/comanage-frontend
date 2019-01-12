import community from './communityReducer'
import user from './userReducer'
import assignment from './assignmentReducer'
import {combineReducers} from 'redux'


const rootReducer = combineReducers({ community, user, assignment
})

export default rootReducer
