import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

const Landing = () => <h2>Landing</h2>
const Header = () => <h2>Header</h2>
const DashBoard = () => <h2>DashBoard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

const App = () => {
    return (
        <div>
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
