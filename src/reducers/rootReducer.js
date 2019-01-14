import community from './communityReducer'
import user from './userReducer'
import assignment from './assignmentReducer'
import room from './roomReducer'
import {combineReducers} from 'redux'


const rootReducer = combineReducers({ room, community, user, assignment
})

export default rootReducer
