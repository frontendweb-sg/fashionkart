import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
const handler = NextAuth({
  session: {
    maxAge: 60 * 60,
  },
  jwt: {
    maxAge: 60 * 60,
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {},
  pages: {
    signIn: "/signin",
  },
});

export { handler as GET, handler as POST };
