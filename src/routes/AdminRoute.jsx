import React from 'react'
import { Route, Routes } from "react-router-dom";
import AddProductPage from '../pages/adminPages/AddProductPage';
import DashboardPage from '../pages/adminPages/DashboardPage';

const AdminRoute = () => {
  return (
    <Routes>
    <Route path="/" element={<DashboardPage />} />
    <Route path="/addProduct" element={<AddProductPage />} />
  </Routes>
  )
}

export default AdminRoute
