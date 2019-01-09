import community from './communityReducer'
import user from './userReducer'

import {combineReducers} from 'redux'


const rootReducer = combineReducers({ community, user
})

export default rootReducer
