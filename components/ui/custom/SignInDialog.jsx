import React, { useContext } from 'react'; // Importa useContext
import { UserDetailContext } from '@/context/UserDetailContext';
import { useGoogleLogin } from '@react-oauth/google';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '../button';
import axios from 'axios';
import { useMutation } from 'convex/react';
import uuid4 from 'uuid4';
import { api } from '@/convex/_generated/api';

function SignInDialog({ openDialog, closeDialog }) {
  const {userDetail,setUserDetail}=useContext(UserDetailContext);
  const CreateUser=useMutation(api.users.CreateUser);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const userInfo = await axios.get(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        { headers: { Authorization: 'Bearer' + tokenResponse?.access_token } },
      );

      console.log(userInfo);
        const user=userInfo.data;
        await CreateUser({
          name:user?.name,
          email:user?.email,
          picture:user?.picture,
          uid:uuid4()
        })

        if(typeof window!==undefined){
          localStorage.setItem('user',JSON.stringify(user))
        }

        setUserDetail(userInfo?.data);
        closeDialog(false);
    },
    onError: errorResponse => console.log(errorResponse),
  });

  return (
    <Dialog open={openDialog} onOpenChange={closeDialog}>
      <DialogContent className="p-12">
      <img src="logo.png" className='w-36 sm:w-36 mb-6' alt='Logo'/>
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium">Sign in or create an account</DialogTitle>
          <DialogDescription>
            It will only take a few seconds, we will save your projects and help you develop them without losing information.
          </DialogDescription>
        </DialogHeader>
        <Button onClick={googleLogin} className="px-6 py-2 text-black bg-white rounded-lg mt-4 hover:bg-white/20 hover:text-white">Sign in with Google</Button> 
      </DialogContent>
    </Dialog>
  )
}

export default SignInDialog;


