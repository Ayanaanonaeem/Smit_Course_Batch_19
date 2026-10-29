import { Spinner } from "@heroui/react";
import { createContext,useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";

export const AuthContext=createContext()

const AuthContextProvider=({children})=>{
  const [user,setUser]=useState({
    islogin:false,
    userinfo:{}
  })
  const [loading,setloading]=useState(true)
  function onAuthChanged(user) {
    console.log(user);
    
    if(user){
        setUser({islogin:true,userinfo:{username:user.displayName,email:user.email}})
    }else{
         setUser({islogin:false,userinfo:{}})
    }
   setloading(false);
  }
  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, onAuthChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
    return (
        <AuthContext.Provider value={[user,setUser]}>
            {
                loading?
                 <div className="w-full h-96 flex justify-center items-center">
                    <Spinner/> </div>
                 :
                
            children
            }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider