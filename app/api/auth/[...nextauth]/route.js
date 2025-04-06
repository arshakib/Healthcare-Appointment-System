// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import bcrypt from "bcrypt";
// import User from "@/models/user";
// import { connectToDatabase } from "@/app/lib/db";

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "email",
//           placeholder: "user@example.com",
//         },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         await connectToDatabase();

//         const user = await User.findOne({ email: credentials.email });
//         if (!user) {
//           throw new Error("User not found");
//         }

//         const isValid = await bcrypt.compare(
//           credentials.password,
//           user.password
//         );
//         if (!isValid) {
//           throw new Error("Invalid password");
//         }

//         return { id: user._id, name: user.name, email: user.email };
//       },
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],

//   callbacks: {
//     async signIn({ user, account }) {
//       console.log("🔥 User Info:", user);
//       console.log("🔥 Account Info:", account);

//       await connectToDatabase();

//       if (account.provider === "google") {
//         const { name, email, image } = user;
//         try {
//           // Check if the user already exists
//           const existingUser = await User.findOne({ email });

//           if (!existingUser) {
//             // If user doesn't exist, create new user
//             const res = await fetch("/api/register", {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({
//                 name,
//                 email,
//                 image,
//                 role: "patient", // Default role for Google users
//               }),
//             });

//             if (!res.ok) {
//               throw new Error("Failed to register user in MongoDB");
//             }

//             console.log("🚀 New Google User Registered!");
//           } else {
//             console.log("✅ User already exists in DB.");
//           }

//           return true; // Allow sign-in
//         } catch (error) {
//           console.log("❌ Error in sign-in callback:", error);
//           return false; // Prevent sign-in on error
//         }
//       }

//       return true; // Allow sign-in for other providers
//     },
//   },

//   secret: process.env.NEXTAUTH_SECRET,
//   // session: {
//   //     strategy: "jwt",
//   // },

//   pages: {
//     signIn: "/login",
//     error: "/auth/error", // Custom error page
//   },

//   secret: process.env.NEXTAUTH_SECRET,
//   // session: {
//   //     strategy: "jwt",
//   // },

//   pages: {
//     signIn: "/login",
//   },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import User from "@/models/user";
import { connectToDatabase } from "@/app/lib/db";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectToDatabase();
        const user = await User.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("User not found");
        }
        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) {
          throw new Error("Invalid password");
        }
        return { id: user.id, name: user.name, email: user.email };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        await connectToDatabase();
        const existingUser = await User.findOne({ email: user.email });
        if (!existingUser) {
          const newUser = new User({
            name: user.name,
            email: user.email,
            image: user.image,
            role: "patient",
          });
          await newUser.save();
        }
      }
      return true;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
