import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import ConnectDB from "../../../../../models/mongodb";
import User from "../../../../../models/Users";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        // Define the credentials you expect from users
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        try {
          await ConnectDB();
          const currentUser = await User.findOne({ email });
          if (!currentUser) {
            return null;
          }
          const currentPassword = await bcrypt.compare(password, currentUser.password);
          if (!currentPassword) {
            return null;
          }
          return currentUser;
        } catch (error) {
          console.error("Error during authentication:", error);
          return null; 
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signup",
  },
};

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;
