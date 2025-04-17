"use client";

import React, { useState, useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { MessagesContext } from "@/context/MessagesContext";
import { UserDetailContext } from "@/context/UserDetailContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import uuid4 from "uuid4";

function Provider({ children }) {
  const [messages, setMessages] = useState();
  const [userDetail, setUserDetail] = useState();
  const convex = useConvex();

  const fetchUser = async () => {
    try {
      if (typeof window === "undefined") return;

      const storedUser = localStorage.getItem("user");
      if (!storedUser) return;

      const parsedUser = JSON.parse(storedUser);
      if (!parsedUser?.email) return;

      // Consultar en la base de datos
      let result = await convex.query(api.users.GetUser, {
        email: parsedUser.email,
      });

      // Si no existe, lo creamos
      if (!result) {
        await convex.mutation(api.users.CreateUser, {
          name: parsedUser.name,
          email: parsedUser.email,
          picture: parsedUser.picture,
          uid: parsedUser.sub || parsedUser.uid || uuid4(),
        });

        // Volvemos a consultarlo
        result = await convex.query(api.users.GetUser, {
          email: parsedUser.email,
        });
      }

      if (result) {
        setUserDetail(result);
        console.log("Usuario cargado:", result);
      }
    } catch (error) {
      console.error("Error al cargar usuario:", error);
    }
  };

  useEffect(() => {
    fetchUser();

    const handleStorageChange = () => {
      fetchUser();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [convex]);

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID_KEY}>
      <PayPalScriptProvider
        options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}
        style={{ theme: "dark" }}
      >
        <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
          <MessagesContext.Provider value={{ messages, setMessages }}>
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
  );
}

export default Provider;
