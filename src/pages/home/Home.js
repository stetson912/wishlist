import React from 'react'
//styles
import './Home.modules.css'
//pages and components
import SignupForm from '../../components/SignupForm'

export default function Home() {
    return (
        <div className="home">
            <h1 className="home__title">Welcome to WishList!</h1>
            <p>
                Do you have some things you would like? Do people say you
                are hard to shop for? Why not make a WishList of items you can
                easily share with them!
            </p>
            <SignupForm />
        </div>
    )
}
