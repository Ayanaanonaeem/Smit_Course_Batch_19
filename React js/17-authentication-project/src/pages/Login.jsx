import React, { useContext } from "react";
import { Input, Label, Button } from "@heroui/react";
import { auth,app } from "../utils/firebase";
import { useState } from "react";
import { signOut, createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { AuthContext } from "../Context/AuthContext";
const Login = () => {
  const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [user,setUser]=useContext(AuthContext)
    const provider = new GoogleAuthProvider();
  const handleSignInWithGoogle=()=>{
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
   setUsername("")
  setPassword("")
  setEmail("")
  }
  
  return (
    <div className="flex flex-col items-center justify-center h-[500px] ">
      <h1 className="my-4">login page</h1>
      <div className="flex w-80 flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Label htmlFor="input-type-email">Email</Label>
          <Input
            id="input-type-email"
            placeholder="jane@example.com"
            type="email"
            value={email}
             onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="input-type-password">Password</Label>
          <Input
            id="input-type-password"
            placeholder="••••••••"
            type="password"
             value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <Button>Login</Button>
         <Button onClick={handleSignInWithGoogle}>Login With Google</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
