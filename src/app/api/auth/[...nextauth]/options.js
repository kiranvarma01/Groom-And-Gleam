import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import Email from "next-auth/providers/email";
import User from "@/app/(models)/User";
import bcrypt from "bcrypt"

export const options = {
providers: [
    GoogleProvider({
        profile(profile){
            console.log("Profile Google: ", profile);
    
            return{
                ...profile,
                id: profile.sub,
                role: UserProfile,
            };
        },
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
    }),
    CredentialsProvider({
        name:"Credentials",
        credentials:{
            email:{
                label:"Email:",
                type: "text",
                placeholder:"your-email",
            },
            password:{
                label:"Password:",
                type: "password",
                placeholder:"your-password",
            },
        },
        async authorize(credentials){
            try{
                const foundUser = await User.findOne({email: credentials.email}).lean().exec();
                if (foundUser){
                    console.log("User Exists")
                    const match = await bcrypt.comapre(credentials.password, foundUser.password);

                    if(match){
                        console.log("Good Pass");
                        delete foundUser.password;

                        foundUser["role"] = "Unverified Email";
                        return foundUser;
                    }
                }
            }catch(error){
                console.log(error);
            }
            return null;
        }
    })
],
callbacks: {
    async jwt({token, user}) {
        if(user) token.role = user.role;
        return token;
    },
    async session ({session, token}){
        if(session?.user) session.user.role = token.role;
        return session;
    },
},
}