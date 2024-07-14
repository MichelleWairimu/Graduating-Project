import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import axios from "axios";
import './Profilepage.css'

interface UserProfile {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    persona:string;
}

export const Profilepage: React.FC = () => {
    const { id } = useParams<{id: string}>()
    const [user, setUser] = useState<UserProfile | null>(null)
    const [error, setError] = useState('')

    useEffect(()=> {
        const fetchProfile = async ()=> {
            try{
                const response = await axios.get(`http://localhost:5000/api/profile/${id}`)
                setUser(response.data)
            }catch (error) {
                setError('Error fetching user data')
                console.error(error)
            }
        }
        fetchProfile()
    }, [id])

    if (error) {
        return <div className="profile-error">{error}</div>
    }

    if (!user){
        return <div>Loading...</div>
    }
    return (
        <div>
            <h1>My Profile</h1>
            <h3>Name: {user.firstName} ${user.lastName}</h3>
            <p>Email: {user.email}</p>
            <p>Persona: {user.persona} </p>
        </div>
    )
}
