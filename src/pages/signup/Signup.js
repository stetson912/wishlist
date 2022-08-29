import SignupForm from '../../components/SignupForm'
//styles
import './Signup.modules.css'
export default function About() {
    return (
        <div className="signup">
            <h1 className="signup__title">Sign up here!</h1>
            <p>If you are new here and want to create some fantastic wishlists,
                create an account to share your desires!
            </p>
            <SignupForm />
        </div>
    )
}
