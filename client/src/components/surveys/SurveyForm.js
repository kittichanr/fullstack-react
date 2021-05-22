import React from 'react'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'
import { Link } from 'react-router-dom'
import { map, each } from 'lodash'
import validateEmails from '../../utils/validateEmails'
import fromFields from './formFields'

const SurveyForm = ({ onSurveySubmit, handleSubmit }) => {

    return (
        <div>
            <form onSubmit={handleSubmit(onSurveySubmit)}>
                {map(fromFields, ({ label, name }) => {
                    return <Field key={name} type='text' component={SurveyField} label={label} name={name} />
                })}
                <Link to='/surveys' className='red btn-flat white-text'>Cancel</Link>
                <button type='submit' className='teal btn-flat right white-text'>
                    Next
                    <i className='material-icons right'>done</i>
                </button>
            </form>
        </div >
    )
}

function validate(values) {
    const errors = {}

    errors.recipients = validateEmails(values.recipients || '')

    each(fromFields, ({ name }) => {
        if (!values[name]) {
            errors[name] = 'You must provide a value'
        }
    })


    return errors
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm)
