import { Link } from 'react-router-dom';
import FormComponent from '../components/FormComponent';

const LoginPage = () => {
    const fields = [
        { name: 'email', type: 'email', label: 'Email', placeholder: 'Enter yor email' },
        { name: 'password', type: 'password', label: 'Password', placeholder: 'Enter your password' }
    ]

    return (
        <FormComponent
            formTitle="Login"
            fields={fields}
            submitButtonText="Login"
            redirectText="Don't have an account ?"
            redirectLink="Create Account"
            redirectPath="/signup"
        />
    )
}

export default LoginPage

