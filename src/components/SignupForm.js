import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//styles
import './LoginForm.modules.css'
//hooks
import { useSignup } from '../hooks/useSignup'

export default function SignupForm() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [birthday, setBirthday] = useState('')
    const { signup, error, isPending } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password, userName, birthday)
        navigate('/dashboard')
    }

    return (
        <div className="login">
            <h3>Sign Up</h3>
            {isPending && <p>Loading...</p>}
            {!isPending && (
                <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
                    <label className='login__form__label'>User Name:
                        <input className="login__form__username form__input"
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </label>

                    <label className='login__form__label'>Birthday:
                        <input className="login__form__username form__input"
                            type="date"
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                        />
                    </label>

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
                </form>)}
        </div>
    )
}
