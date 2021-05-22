import React, { useState } from 'react'
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'
import { reduxForm } from 'redux-form'

const SurveyNew = () => {

    const [fromReview, setFormReview] = useState(false)

    if (fromReview) {
        return <SurveyFormReview onCancel={() => setFormReview(false)} />
    }

    return (
        <div>
            <SurveyForm onSurveySubmit={() => setFormReview(true)} />
        </div>
    )
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew)
