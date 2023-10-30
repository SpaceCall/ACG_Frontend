import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../../../assets/icons/logo.svg'

export default function Logo() {
    return (
        <NavLink to='/'>
            <img src={logo} alt="ACG" />
        </NavLink>
    )
}
