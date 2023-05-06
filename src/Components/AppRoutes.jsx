import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './SignUp'
import Home from './Home'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    )
}

export default AppRoutes
