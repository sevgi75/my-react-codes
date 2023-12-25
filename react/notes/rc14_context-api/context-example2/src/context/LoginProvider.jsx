import { createContext, useState } from "react";

//? 1. Login bilgilerini saklayacak bir context olusturduk.
 export const LoginContext = createContext()

//? 2. sarmalama 
 const LoginProvider = (children) => {
    const [user, setUser] = useState({ email: "", password: "" });
   return (
     <LoginContext.Provider value={{user, setUser}}>
        {children}
     </LoginContext.Provider>
   )
 }
 
 export default LoginProvider

//  <Provider>  //? App privider in child (props.children)
//     <App/>
//  </Provider>