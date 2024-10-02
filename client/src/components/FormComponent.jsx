import { Link } from 'react-router-dom'
import { useState } from 'react'

const FormComponent = ({ formTitle, fields, submitButtonText, redirectText, redirectLink, redirectPath }) => {
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }



    return (
        <section className='min-h-screen flex justify-center items-center'>
            <form className='p-8 rounded-lg max-w-md w-full'>
                <h1 className='text-3xl font-bold text-center'>{formTitle}</h1>
                {fields.map((field) => (
                    <div key={field.name} className='mb-4'>
                        <label htmlFor={field.name}>{field.label}</label>
                        <input className='border border-gray-300 p-2 w-full rounded'
                            type={field.type}
                            name={field.name}
                            id={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name] || ''}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                <p className='text-center'>{redirectText} <Link to={redirectPath}>{redirectLink}</Link></p>
                <input type="submit" value={submitButtonText} className='mt-4 w-full bg-gray-900 text-white py-2 rounded' />
            </form>
        </section>
    )
}

export default FormComponent
