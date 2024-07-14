import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterState } from "./authStateType";
import { Navbar } from "../../components/Navbar";
import './register.css';

export const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [persona, setPersona] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };
    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const handlePersonaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPersona(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !password || !persona) {
            setError('Please fill in all the required fields');
            return;
        }

        const user = { firstName, lastName, email, password, persona };
        fetch('http://localhost:5000/api/register', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then((data: RegisterState) => {
                setSuccess(true);
                setError('');
                setEmail('');
                setFirstName('');
                setLastName('');
                setPassword('');
                setPersona('');
                console.log(`User registered successfully: ${data.firstName} ${data.lastName}`);
                navigate('/login');
            })
            .catch(error => {
                setError(`Error registering user: ${error}`);
                setSuccess(false);
            });
    };

    return (
        <>
            <Navbar />
            <div className="authentication">
                <h2 className="auth-title">Register and Start Trading Today</h2>
                <div className="form-container">
                    <h3 className="form-header">CREATE AN ACCOUNT</h3>
                    <form onSubmit={handleSubmit} className="register-form">
                        <div className="name-input">
                            <div className="first-name">
                                <label className="form-label">First Name</label>
                                <input
                                    type="text"
                                    value={firstName}
                                    placeholder="first name"
                                    onChange={handleFirstNameChange}
                                    className="input-field"
                                />
                            </div>
                            <div className="last-name">
                                <label className="form-label">Last Name</label>
                                <input
                                    type="text"
                                    value={lastName}
                                    placeholder="last name"
                                    onChange={handleLastNameChange}
                                    className="input-field"
                                />
                            </div>
                        </div>
                        <div className="form-email">
                            <label className="form-label">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                placeholder="example@company.com"
                                onChange={handleEmailChange}
                                className="input-field"
                            />
                        </div>
                        <div className="form-password">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                className="input-field"
                            />
                        </div>
                        <div className="personas-values">
                            <label className="form-label">
                                Preferred Persona:
                                <input
                                    type="radio"
                                    value='Farmer'
                                    checked={persona === 'Farmer'}
                                    onChange={handlePersonaChange}
                                    className="persona-radio"
                                />
                                Farmer
                                <input
                                    type="radio"
                                    value='Buyer'
                                    checked={persona === 'Buyer'}
                                    onChange={handlePersonaChange}
                                    className="persona-radio"
                                />
                                Buyer
                            </label>
                        </div>
                        <button type="submit" className="submit-button">Sign Up</button>
                        {error && <div className="error-message">{error}</div>}
                        {success && <div className="success-message">User Registered Successfully! Proceed to Log In</div>}
                    </form>
                    <h3 className="login-prompt">Have an account? <Link to={'/login'}>Log in</Link></h3>
                </div>
            </div>
        </>
    );
}
