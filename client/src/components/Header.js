import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
    const state = useSelector(state => ({ auth: state.auth }))

    const renderContent = () => {
        switch (state.auth) {
            case null:
                return
            case false:
                return <li><a href="/auth/google">Log in with Google</a></li>
            default:
                return <li><a href="/api/logout">Log out</a></li>
        }

    }

    return (
        <nav>
            <div class="nav-wrapper">
                <Link
                    to={state.auth ? '/surveys' : '/'}
                    class="left brand-logo ">
                    Emaily
                    </Link>
                <ul className="right">
                    {renderContent()}
                </ul>
            </div>
        </nav>
    )
}

export default Header
