import express, { Express } from "express";
import { Register, Login , DeleteProfile, } from "../Controllers";
import { Schemas, ValidateSchema } from "../middlewares/Validation";

const router = express.Router()

//register a new user
router.post('/register', ValidateSchema(Schemas.user.register), Register)

//login a new user
router.post('/login', ValidateSchema(Schemas.user.login), Login)

//delete a profile
router.delete('/delete/:id', DeleteProfile)


export  = router