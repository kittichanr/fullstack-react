import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import fromFields from './formFields'
import { map } from 'lodash'
import * as actions from '../../actions'
import { withRouter } from 'react-router-dom'

const SurveyFormReview = ({ onCancel, history }) => {
    const dispatch = useDispatch()

    const formValues = useSelector(state => state.form.surveyForm.values)

    return (
        <div>
            <h5>Please confirm your entries</h5>
            <div>
                {
                    map(fromFields, ({ label, name }) => (
                        <div key={name}>
                            <label>{label}</label>
                            <div>{formValues[name]}</div>
                        </div>
                    ))
                }
            </div>
            <button className='yellow darken-3 btn-flat' onClick={onCancel}>
                Back
            </button>
            <button className='green btn-flat right' onClick={() => dispatch(actions.submitSurvey(formValues, history))}>
                Send Survey
                <i className='material-icons right'>email</i>
            </button>
        </div>
    )
}

export default withRouter(SurveyFormReview)
