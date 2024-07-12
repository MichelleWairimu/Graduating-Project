import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { RegisterState } from "./authStateType"
import { toast } from "react-toastify"




export const Register: React.FC = () => {

    const navigate = useNavigate()
    const [input, setInput] = useState<RegisterState>({
        email: '',
        password: '',
        lastName: '',
        firstName: ''
    })

    const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = e.target
        setInput({
            ...input,
            [name]: value
        })
    }

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const { data } = await axios.post('http://localhost:5000/api/register', input)

            const {success, message} = data
            if (success) {
                toast.success(message);
                setTimeout(() => {
                    navigate('/home')
                }, 1000)
            } else {
                toast.error(message)
            }
        } catch (error){
            console.log(error)
        }
    }

    return(
        <div className="registration-form">
           <h2>Register and Start Trading Today</h2>
           <div className="form-container">
            <div className="button-slider">
                <button className="Signup-button">Sign Up</button>
                <button className="Login-button">Log In</button>
            </div>
            <h1>CREATE AN ACCOUNT</h1>
            <form onSubmit={handleSubmit} className="form-input fields">
                <div className="name-input">
                    <div className="first-name">
                        <label>First Name</label>
                        <input type="text"
                               name="firstName"
                               value={input.firstName}
                               placeholder="Eg. John"
                               onChange={handleOnChange}
                         />
                    </div>
                    <div className="last-name">
                        <label>Last Name</label>
                        <input type="text"
                               name="lastName"
                               value={input.lastName}
                               placeholder="Eg. Doe"
                               onChange={handleOnChange}
                         />
                    </div>
                </div>
                <div className="form-email">
                    <label>Email Adress</label>
                    <input type="email"
                           name="email"
                           value={input.email}
                           placeholder="Eg. JohnDoe@company.com"
                           onChange={handleOnChange}
                     />
                </div>
                <div className="form-password">
                    <label>Password</label>
                    <input type="password"
                           name="password"
                           value={input.password}
                           onChange={handleOnChange}
                     />
                </div>
            </form>
            <h3>Have an account? <Link to={'/login'}>Log in</Link></h3>

            <button className="submit-signup" type="submit">Sign Up</button>

           </div>
        </div>
    )
}