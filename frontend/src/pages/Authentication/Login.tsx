import axios from "axios"
import React, {useState} from "react"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'


export const Login: React.FC = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleLogin =  async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!email || !password) {
            setError('Fill in all required fields')
            return
        }

        try {
            const response = await axios.post('http://localhost:5000/api/login', {email, password})
            if (response.status === 200){
                navigate('/home')
            } else {
                setError('Invalid credentials')
            }
        } catch (error) {
            setError('Invalid email or password')
        }
    }
    
    return(
        <div className="authentication">
            <div className="button-slider">
            <Link to={'/register'} className="Signup-button">Sign Up</Link>
            <Link to={'/login'} className="Login-button">Log In</Link>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
            <h3>Log In</h3>
            <div className="email-input">
                <label>Email Adress</label>
                <input 
                   type="email" 
                   placeholder="example@company.com"
                   value={email}
                   onChange={handleEmailChange}
                />
            </div>
            <div className="email-input">
                <label>Password</label>
                <input 
                   type="password" 
                   value={password}
                   onChange={handlePasswordChange}
                />
            </div>
            <button type="submit">Log In</button>
            {error && <div style={{color: 'red'}}>{error}</div>}
          
        </form>
       </div>
    )
}