import bcrypt from 'bcryptjs'
import User from '../Models/UserAuth'
import { Request, Response } from 'express'
import { IUser } from '../Types/UserAuthType'


export const Login = async (req:Request, res:Response) => {
    const {email, password} = req.body;

    const user: IUser | null = await User.findOne({email});

    if (!user) {
       throw new Error('Invalid Email or Password')
    }

    const isValid: boolean = await bcrypt.compare(password, user.password)
    
    if (!isValid) {
       throw new Error('Invalid Email or Password')
    }

    res.status(200).json({mssg: 'User logged in successfully', user})
}