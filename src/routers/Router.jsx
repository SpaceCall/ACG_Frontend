import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Chat from '../components/main/Chat'
import Topics from '../components/main/Topics'
import MainPage from '../components/main/MainPage'
import Blogs from '../components/main/Blogs'
import BlogPage from '../components/main/BlogPage'
import ComingSoon from '../components/main/MainPage/ComingSoon'
import SignInPage from '../components/main/Login/signInPage';
import SignUpPage from '../components/main/Login/signUpPage';
import ConfirmMail from '../components/main/Login/ConfirmMail'

export default function Router() {
    // const { activeLang } = useContext(LangContext);

    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/comingsoon' element={<ComingSoon />} />
            <Route path='/login/:token' element={<ConfirmMail />} />
            <Route path={`/signIn`} element={<SignInPage />} />
            <Route path={`/signUp`} element={<SignUpPage />} />
            <Route path='/chat' element={<Chat />} />
            <Route path='/topics' element={<Topics />} />
        </Routes>
    );
}
