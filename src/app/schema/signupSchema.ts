import {z} from 'zod'

const usernameValidation= z.
string()
.min(3 , "username should be of atleast 3 characters")
.max(10 , "username should be of more than only 10 charcaters")
.regex(/^[a-zA-Z0-9]{3,16}$/)

const passowrdValidation=z.
string()
.min(5 , "password should atleast of 5 characers")
.max(15 , "password should not atmost of 15 characters")
.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/)

const emailValidation = z.
string()
.email()

export const signupSchema = z.object({
    username :usernameValidation,
    email:emailValidation,
    password:passowrdValidation
})