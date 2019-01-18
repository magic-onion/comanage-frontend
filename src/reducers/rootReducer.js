import community from './communityReducer'
import user from './userReducer'
import memberView from './memberViewReducer'
// import assignment from './assignmentReducer'
// import room from './roomReducer'
import detail from './detailReducer'
import {combineReducers} from 'redux'


const rootReducer = combineReducers({ memberView, community, user, detail})

export default rootReducer
