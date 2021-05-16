import React from 'react'
import { useEffect } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Header from '../components/Header'
import Landing from '../components/Landing'

import { fetchUser } from '../actions'
import { useDispatch } from 'react-redux'

const DashBoard = () => <h2>DashBoard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

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