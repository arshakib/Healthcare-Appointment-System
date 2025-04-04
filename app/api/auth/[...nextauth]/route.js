// import { authOptions } from "@/app/lib/authOptions"
// import NextAuth from "next-auth"

// const handler = NextAuth(authOptions)

// export { handler as GET, handler as POST }

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";

import { connectToDatabase } from "@/app/lib/db";
import User from "@/models/user";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "user@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                await connectToDatabase();

                const user = await User.findOne({ email: credentials.email });
                if (!user) {
                    throw new Error("User not found");
                }

                const isValid = await bcrypt.compare(credentials.password, user.password);
                if (!isValid) {
                    throw new Error("Invalid password");
                }

                return { id: user._id, name: user.name, email: user.email };
            }
        }),
        GoogleProvider({
                         clientId: process.env.GOOGLE_CLIENT_ID,
                         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    // session: {
    //     strategy: "jwt",
    // },
    // callbacks: {
    //     async signIn({ user, account }) {
    //         await connectToDatabase();
    //         try {
    //             const existingUser = await User.findOne({ email: user.email });

    //             if (!existingUser) {
    //                 if (account.provider === 'google') {
    //                     const newUser = new User({
    //                         name: user.name,
    //                         email: user.email,
    //                         image: user.image,
    //                     });
    //                     await newUser.save();
    //                 }
    //             }
    //             return true;
    //         } catch (error) {
    //             console.error("Error saving user:", error);
    //             return false;
    //         }
    //     },
    //     async session({ session }) {
    //         await connectToDatabase();
    //         const dbUser = await User.findOne({ email: session.user.email });
    //         if (dbUser) {
    //             session.user.id = dbUser._id.toString();
    //         }
    //         return session;
    //     },
    // },
    pages: {
        signIn: "/login",
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };


// import { authOptions } from "@/app/lib/authOptions"
// import NextAuth from "next-auth"

// const handler = NextAuth(authOptions)

// export { handler as GET, handler as POST }

// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import bcrypt from "bcrypt";

// import { connectToDatabase } from "@/app/lib/db";
// import User from "@/models/user";

// export const authOptions = {
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 email: { label: "Email", type: "email", placeholder: "user@example.com" },
//                 password: { label: "Password", type: "password" }
//             },
//             async authorize(credentials) {
//                 await connectToDatabase();

//                 const user = await User.findOne({ email: credentials.email });
//                 if (!user) {
//                     throw new Error("User not found");
//                 }

//                 const isValid = await bcrypt.compare(credentials.password, user.password);
//                 if (!isValid) {
//                     throw new Error("Invalid password");
//                 }

//                 return { id: user._id, name: user.name, email: user.email };
//             }
//         }),
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         }),
//     ],
//     secret: process.env.NEXTAUTH_SECRET,
    // session: {
    //     strategy: "jwt",
    // },
    // callbacks: {
    //     async signIn({ user }) {
    //         await connectToDatabase();
    //         try {
    //             const existingUser = await User.findOne({ email: user.email });

    //             if (!existingUser) {
    //                 const newUser = new User({
    //                     name: user.name,
    //                     email: user.email,
    //                     image: user.image,
    //                 });
    //                 await newUser.save();
    //             }
    //             return true;
    //         } catch (error) {
    //             console.error("Error saving user:", error);
    //             return false;
    //         }
    //     },
    //     async session({ session }) {
    //         await connectToDatabase();
    //         const dbUser = await User.findOne({ email: session.user.email });
    //         session.user.id = dbUser._id;
    //         return session;
    //     },
    // },
    
//     pages: {
//         signIn: "/login",
//     }
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };



