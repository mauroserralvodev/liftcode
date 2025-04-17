"use client";

import React, { useContext } from "react";
import { UserDetailContext } from "@/context/UserDetailContext";
import { useGoogleLogin } from "@react-oauth/google";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../button";
import axios from "axios";

function SignInDialog({ openDialog, closeDialog }) {
  const { setUserDetail } = useContext(UserDetailContext);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: "Bearer " + tokenResponse?.access_token },
      });

      const user = userInfo.data;

      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(user));
        window.dispatchEvent(new Event("storage")); // esto actualiza Provider
      }

      setUserDetail(user); // Esto es inmediato, para UX
      closeDialog(false);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <Dialog open={openDialog} onOpenChange={closeDialog}>
      <DialogContent className="p-12">
        <img src="logo.png" className="w-36 sm:w-36 mb-6" alt="Logo" />
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium">
            Sign in or create an account
          </DialogTitle>
          <DialogDescription>
            It will only take a few seconds. We'll save your projects and help you develop them
            without losing any information.
          </DialogDescription>
        </DialogHeader>
        <Button
          onClick={googleLogin}
          className="px-6 py-2 text-black bg-white rounded-lg mt-4 hover:bg-white/20 hover:text-white"
        >
          Sign in with Google
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default SignInDialog;
