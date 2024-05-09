import React, { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === 'email') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: '',
            }));
        }
    };

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleBlur = () => {
        const { email } = formData;
        if (email.trim() && !validateEmail(email)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: '!! Enter a valid email address',
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            errors.name = 'Required';
            isValid = false;
        }

        if (!formData.email.trim()) {
            errors.email = 'Required';
            isValid = false;
        } else if (!validateEmail(formData.email)) {
            errors.email = '!! Enter a valid email address';
            isValid = false;
        }

        setErrors(errors);

        if (isValid) {
            submitForm();
        }
    };

    const submitForm = () => {
        window.location.href = '/confirmationPage';
        console.log('Form submitted:', formData);
    };

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <div className='name'>
                    <label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                    {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                </div>
                <div className='email'>
                    <label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </label>
                    <div className='error'>
                        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                    </div>
                </div>
                <button className='button' style={{
                    backgroundColor: !formData.name || !formData.email || errors.email ? '#C9C9C9' : 'black',
                    color: 'white'
                }} type="submit" disabled={!formData.name || !formData.email || errors.email}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;
