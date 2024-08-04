import mongoose ,{ Schema , Document}from "mongoose";

export interface User extends Document{
    username :string,
    email:string,
    password:string


}

const UserSchema : Schema <User> = new Schema({
    username:{
        type:String,
        required:[true , "username is required"]

    },
    email:{
        type:String,
        required:[true ," email is required"],
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , 'Please use a valid Email address']
    },
    password:{
        type:String,
        required:[true,"password is required"],
    }

})

const UserModel = (mongoose.models.User as mongoose.Model<User>)|| mongoose.model<User>("User" , UserSchema)

export default UserModel;