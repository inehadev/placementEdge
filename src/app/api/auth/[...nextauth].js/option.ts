import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import Email from "next-auth/providers/email";
import dbConnect from "@/lib/db.connect";
import UserModel from "@/app/models/UserModel";
import bcrypt from "bcrypt"

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  throw new Error("Missing Google client ID or client secret.");
}

export const authOptions = {
  providers: [

    GoogleProvider({
      clientId: clientId as string,
      clientSecret: clientSecret as string,
    }),

    CredentialsProvider({
        id:"credentials",
        name:"credentials",
        credentials:{
            email:{label:"Email", type:"text"},
            password:{label:"Password" , type:"password"}
        },

        async authorize(credentials:any):Promise<any>{
            await dbConnect()
            try {
                const user = await UserModel.findOne({
                    email:credentials.email
                })
                
                if(!user){
                    console.log("User not found")
                    throw new Error("User not found");
                }

                const isCorrectpassword = await bcrypt.compare(credentials.password , user.password)

                if(isCorrectpassword){
                    return user
                 }else{
                    throw new Error('Incorrect password')
                 }

                 } catch (err:any) {
                    throw new Error(err)
                 }
            
        }

    })

  ],
  pages:{
    signIn:'/sign-in'

  }
};

export default NextAuth(authOptions);
