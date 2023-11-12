import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Chat from '../components/main/Chat'
import Topics from '../components/main/Topics'
import MainPage from '../components/main/MainPage'

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
        </Routes>
    )
}
