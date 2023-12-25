import { createContext, useContext, useState } from "react";

//? 1. Login bilgilerini saklayacak bir context olusturduk.
 const LoginContext = createContext()

//? 2. sarmalama 
 const LoginProvider = (children) => {
    const [user, setUser] = useState({ email: "", password: "" });

    const values = {user, setUser}
   return (
     <LoginContext.Provider value={values}>
        {children}
     </LoginContext.Provider>
   )
 }

 //? Consuming icin bir custom hook yaziyoruz.
 export const useLoginContext = () => {
    return useContext(LoginContext)
 }
 
 export default LoginProvider

//  <Provider>  //? App privider in child (props.children)
//     <App/>
//  </Provider>