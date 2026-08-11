// import React, { useState } from "react";
// import UserContext from "./UserContext";

// const UserContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserContextProvider;

import React,{useState} from "react";
import userContext from "./UserContext";

const userContextProvider=({children})=>{
    const [user,setUser]=useState(null)
  return(
    <userContext.Provider value={{user,setUser}}>
      {children}
    </userContext.Provider>
  )
  
}

export default userContextProvider
