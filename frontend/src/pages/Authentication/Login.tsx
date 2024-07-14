import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login } from "../../Reducers/authReducer";
import { Navbar } from "../../components/Navbar";
import './login.css'; // Make sure to import the CSS file

export const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Fill in all required fields');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/login', { email, password });
            if (response.status === 200) {
                const { persona, _id } = response.data;
                dispatch(login({ persona, userId: _id }));
                navigate('/home');
            } else {
                setError('Invalid credentials');
            }
        } catch (error) {
            setError('Invalid email or password');
        }
    };

    return (
        <>
            <Navbar />
            <div className="authentication">
                <form className="login-form" onSubmit={handleLogin}>
                    <h3 className="form-title">Log In</h3>
                    <div className="input-group">
                        <label className="input-label">Email Address</label>
                        <input
                            type="email"
                            placeholder="example@company.com"
                            value={email}
                            onChange={handleEmailChange}
                            className="input-field"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label className="input-label">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="input-field"
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Log In</button>
                    {error && <div className="error-message">{error}</div>}
                    <p className="signup-prompt">Don't have an account? <Link to={'/register'} className="signup-link">Sign up here</Link></p>
                </form>
            </div>
        </>
    );
};
