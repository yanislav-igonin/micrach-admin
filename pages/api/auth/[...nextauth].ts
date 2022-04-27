import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUser, User } from "../../../storage/users";

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials): Promise<User | null> {
        console.log(credentials);
        if (!credentials) return null;
        const { username, password } = credentials;
        const user = await getUser(username);
        if (!user) return null;
        if (user.password !== password) return null;
        return user;
      }
    })
  ],
  pages: {
    signIn: '/auth/login',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  }
});
