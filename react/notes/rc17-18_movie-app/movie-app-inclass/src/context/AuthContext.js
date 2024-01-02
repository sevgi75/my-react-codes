import React, { createContext, useContext } from 'react'
import { auth } from '../auth/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const AuthContext = createContext()
// const {Provider} = createContext()

//* with custom hook
export const useAuthContext = () => {
    return useContext(AuthContext)
}


const AuthContextProvider = ({children}) => {
    const createUser = async(email,password) => {
        try {
            //? yeni bir kullanici olusturmak icin kullanilan firebase metodu
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            console.log(userCredential); 
        } catch (error) {
            console.log(error);
        }
    }
    const values = {createUser}
  return (
    <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider