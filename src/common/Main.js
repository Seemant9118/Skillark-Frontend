import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Main() {
    // const location = useLocation();
    // console.log(location);

    return <>
        <Navbar />

        <Outlet />

        <Footer />
    </>
}
