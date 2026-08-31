import React from 'react'

import { Route } from 'react-router-dom'
import Login from '../pages/login/Login'

export default function MainRouter() {
  return [
    <Route key="login" path="/login" element={<Login />} />,
    <Route key="root" path="/" element={<Login />} />
  ];
}
