// 'use client';

// import { useSession } from "next-auth/react";
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

// const Layout = ({ children }) => {
//   const { data: session, status } = useSession();
//   const router = useRouter();

//   useEffect(() => {
//     if ( session?.user === 'unauthenticated') {
//         console.log("redirect");
//       router.push('/login');
//     }
//   }, [session, router]);

//   if ( session?.user === 'loading') {
//     console.log("loading");
//     return <div>Loading...</div>; // or a spinner
//   }

//   if ( session?.user === 'authenticated') {
//     console.log("authenticated");
//     return (
//       <div>
//         {children}
//       </div>
//     );
//   }

//   return null;
// };

// export default Layout;

'use client';

import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const PrivateLayout = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      console.log("User not authenticated. Redirecting...");
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    console.log("Checking session...");
    return <div>Loading...</div>;
  }

  if (status === 'authenticated') {
    console.log("User authenticated:", session.user);
    return <div>{children}</div>;
  }

  return null;
};

export default PrivateLayout;

