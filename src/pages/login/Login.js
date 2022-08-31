import LoginForm from '../../components/LoginForm'
//styles
import './Login.modules.css'
//hooks
import { useAuthContext } from '../../hooks/useAuthContext'

export default function Login() {
    const { user } = useAuthContext()

    return (
        <div className="login__container">
            <h1 className="login__container__title">Login to WishList!</h1>
            <p>
                Do you want see your lists of awesome things? Log in here!
            </p>
            {!user && <LoginForm />}

        </div>
    )
}
