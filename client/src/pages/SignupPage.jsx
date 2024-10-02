import { Form } from "react-router-dom"
import FormComponent from "../components/FormComponent"
const SignupPage = () => {
    const fields = [
        { name: 'firstName', type: 'text', label: 'First Name', placeholder: 'Enter your first name' },
        { name: 'lastName', type: 'text', label: 'Last Name', placeholder: 'Enter your last name' },
        { name: 'email', type: 'email', label: 'Email', placeholder: 'Enter your email' },
        { name: 'password', type: 'password', label: 'Password', placeholder: 'Enter your password' }
    ]

    return (
        <FormComponent
            formTitle="Create Account"
            fields={fields}
            submitButtonText='Create Account'
            redirectText='Already have an account ?'
            redirectLink="Login"
            redirectPath='/login'
        />
    )
}

export default SignupPage