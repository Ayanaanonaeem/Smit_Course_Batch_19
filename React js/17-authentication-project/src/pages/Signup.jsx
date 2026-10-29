import React, { useContext, useState } from "react";
import { Input, Label, Button } from "@heroui/react";
import { auth,app } from "../utils/firebase";
import { signOut, GoogleAuthProvider ,createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../Context/AuthContext";
import { log } from "firebase/firestore/lite/pipelines";
const Signup = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [username,setUsername]=useState("")
    const [user,setUser]=useContext(AuthContext)
    const provider = new GoogleAuthProvider();
   
    

const handleSignUp = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
      await updateProfile(userCredential.user, {
      displayName: username
    });
                
   console.log(user);
    

    console.log("User created:", userCredential.user);
  } catch (error) {
    console.error(error.message);
  }
  
  setUsername("")
  setPassword("")
  setEmail("")
};


console.log(user);
  return (
    <div className="flex flex-col items-center justify-center h-[600px] ">
      <h1 className="my-4">Signup page</h1>
      <div className="flex w-80 flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Label htmlFor="input-type-email">username</Label>
          <Input id="input-type-email" placeholder="jane" value={username} type="email" onChange={(e)=>setUsername(e.target.value)} />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="input-type-email">email</Label>
          <Input
            id="input-type-email"
            placeholder="jane@example.com"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="input-type-password">password</Label>
          <Input
            id="input-type-password"
            placeholder="••••••••"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <Button onClick={handleSignUp}>SignUp</Button>
          
        </div>
      </div>
    </div>
  );
};

export default Signup;
