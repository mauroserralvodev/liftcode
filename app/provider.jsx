"use client";
import React, { useState, useEffect } from 'react';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { MessagesContext } from '@/context/MessagesContext';
import { UserDetailContext } from '@/context/UserDetailContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import AppSideBar from '@/components/ui/custom/AppSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';


function Provider({children}) {
  const [messages,setMessages]=useState();
  const [userDetail,setUserDetail]=useState();
  const convex=useConvex();

  useEffect(()=>{
    IsAuthenticated();
  },[])
 
  const IsAuthenticated=async()=>{
    if(typeof window!==undefined){
      const user=JSON.parse(localStorage.getItem('user'))
      const result=await convex.query(api.users.GetUser,{
        email:user?.email
      })
      setUserDetail(result);
      console.log(result);
    }
  }

  return (
    <div>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID_KEY}>
        <PayPalScriptProvider options={{ clientId:process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }} style={{theme: "dark" }}>
          <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
            <MessagesContext.Provider value={{messages,setMessages}}>
              <NextThemesProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
              >
             
                  {children}
           
              </NextThemesProvider>
            </MessagesContext.Provider>
          </UserDetailContext.Provider>
        </PayPalScriptProvider>
      </GoogleOAuthProvider>
    </div>
  )
}

export default Provider