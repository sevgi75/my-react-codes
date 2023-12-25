import React from 'react'
import Navbar from '../components/Navbar'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
  return true ? (
    <>
    <Navbar />
    <Outlet />
    </>
  ) : (
    <Navigate />
  )
}

export default PrivateRouter