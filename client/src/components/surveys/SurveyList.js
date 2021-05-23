import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../actions'

const SurveyList = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.fetchSurveys())
    }, [dispatch])

    const surveys = useSelector(state => state.surveys)

    return (
        <div>
            {surveys.reverse().map(survey => {
                return (
                    <div className="card darken-1" key={survey._id}>
                        <div className="card-content">
                            <span className="card-title">{survey.title}</span>
                            <p>
                                {survey.body}
                            </p>
                            <p className="right">
                                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                            </p>
                        </div>
                        <div className="card-action">
                            <a>Yes: {survey.yes}</a>
                            <a>No: {survey.no}</a>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default SurveyList
