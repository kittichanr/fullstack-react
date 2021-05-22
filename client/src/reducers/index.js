import { combineReducers } from 'redux'
import authReducer from './authReducer'
import { reducer as ReduxForm } from 'redux-form'

export default combineReducers({
    auth: authReducer,
    form: ReduxForm
})