import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const PrivateRouter = () => {
  const {user} = useContext(AuthContext)
  return user ? (
    <>
    <Navbar />
    <Outlet />
    </>
  ) : (
    <Navigate />
  )
}

export default PrivateRouter