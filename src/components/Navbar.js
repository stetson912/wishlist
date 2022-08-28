import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// styles
import "./Navbar.modules.css"

export default function Navbar() {
    const [loggedIn, setLoggedIn] = useState(true)

    const toggleMenu = () => {
        const navLinkUl = document.querySelector('.navigation__links')

        if (navLinkUl.classList.contains('open')) {
            navLinkUl.classList.remove('open')
            return
        }
        navLinkUl.classList.add('open')
    }


    return (

        <nav className="navigation">
            <span className="navigation__logo">WishList</span>
            <svg className="bi bi-list navigation__menu"
                onClick={toggleMenu}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
            <ul className="navigation__links">
                <li className="navigation__link"><Link to="/">Home</Link></li>
                {loggedIn && <li className="navigation__link"><Link to="dashboard">Dashboard</Link></li>}
                {!loggedIn && <li className="navigation__link"><Link to="signup">Sign Up</Link></li>}
                {!loggedIn && <li className="navigation__link"><Link to="login">Login</Link></li>}
                {loggedIn && <li className="navigation__link"><Link to="logout">Logout</Link></li>}
            </ul>

        </nav>
    )
}
