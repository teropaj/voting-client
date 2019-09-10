import loggedReducer from './isLogged.js'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    loggedReducer }
)
export default allReducers

