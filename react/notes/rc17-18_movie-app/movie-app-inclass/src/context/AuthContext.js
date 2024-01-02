import React, { Children, createContext, useContext } from 'react'

export const AuthContext = createContext()
// const {Provider} = createContext()

//* with custom hook
export const useAuthContext = () => {
    return useContext(AuthContext)
}


const AuthContextProvider = ({Children}) => {
    const values = {}
  return (
    <AuthContext.Provider value={values}>
        {Children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider