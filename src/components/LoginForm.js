import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//styles
import './LoginForm.modules.css'
//hooks
import { useLogin } from '../hooks/useLogin'

export default function LoginForm() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isPending } = useLogin()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
        navigate('/dashboard')
    }

    return (
        <div className="login">
            <h3>Login</h3>
            {isPending && <p>Loading...</p>}
            {!isPending &&
                (<form className="login__form" onSubmit={(e) => handleSubmit(e)}>
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
