import NextAuth from "next-auth/next";
import CredentialsProvider  from "next-auth/providers/credentials";
import ConnectDB from "../../../../../models/mongodb";
import User from "../../../../../models/Users";
import bcrypt from "bcrypt"


const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
      },
      authorize: async (credentials) => {
      const {email, password}= credentials;
      try {
        await ConnectDB();
        const currentUser = await User.findOne({email})
        if (!currentUser) {
            return null;
        }
    const cuurentPassword = await bcrypt.compare(password, currentUser.password)
    if (!cuurentPassword) {
        return null;
    }
    return currentUser;
      } catch (error) {
        console.log(error);
      }
      },
    }),
  ],
   
  session:{
    strategy:"jwt",
  },
  secret: process.env.SECRET,
  pages:{
    signIn: "/signin",
  }
}
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
