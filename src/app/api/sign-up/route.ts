import dbConnect from "@/lib/db.connect";
import UserModel from "@/app/models/UserModel";
import bcrypt from "bcrypt"


export async function POST(request:Request){
  
    await dbConnect()
   

    try {
        
        const {username, email , password}= await request.json();
        const existingUser = await UserModel.findOne({email , username})
        if(existingUser){
            return Response.json({
                success:false,
                message:"user is already register try with another"
            })
        }
        
        const hashPssword =  await bcrypt.hash(password , 10);

        const user = new UserModel({
            username , 
            email,
            password:hashPssword
        })

        const response = await user.save();
        if(response){
            return Response.json({
                success:true,
                message:"User Registered Successfully"

            })
        }


        
    } catch (error) {
        console.error("Error is SignUp " , error);
        return Response.json({
            success:false,
            message:"Error in SignUp"
        })
        
    }
}

