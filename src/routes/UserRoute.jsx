import React from 'react'
import { Route, Routes } from "react-router-dom";
import UserHome from '../pages/userPages/UserHome'

const UserRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<UserHome />} />
    </Routes>
  )
}

export default UserRoute
