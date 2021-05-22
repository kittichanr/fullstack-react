import React from 'react'
import { useEffect } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Header from '../components/Header'
import Landing from '../components/Landing'
import DashBoard from '../components/DashBoard'
import SurveyNew from '../components/surveys/SurveyNew'

import { fetchUser } from '../actions'
import { useDispatch } from 'react-redux'

const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUser())
    })

    return (
        <div className="container">
            <BrowserRouter>
                <Header />
                <Route exact path="/" component={Landing} />
                <Route exact path="/surveys" component={DashBoard} />
                <Route exact path="/surveys/new" component={SurveyNew} />
            </BrowserRouter>
        </div>
    )
}

export default App