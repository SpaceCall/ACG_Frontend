import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Chat from '../components/main/Chat'
import Topics from '../components/main/Topics'

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Chat />} />
            <Route path='/topics' element={<Topics />} />
        </Routes>
    )
}
