import { useState } from 'react'
//styles
import './LoginForm.modules.css'
//hooks
import { useSignup } from '../hooks/useSignup'

export default function SignupForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, error } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password)
    }

    return (
        <div className="login">
            <h3>Sign Up</h3>
            <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
                <label className='login__form__label'>Email:
                    <input className="login__form__email form__input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    />
                </label>
                <label className='login__form__label'>Password:
                    <input className="login__form__password form__input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                {(email && password) &&
                    (<button className="btn"
                        type="submit"

                    >
                        Submit
                    </button>)}
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}
