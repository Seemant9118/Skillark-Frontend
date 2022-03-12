import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Main() {
    const student = ["/user",]

    const location = useLocation().pathname;
    console.log(location);
    console.log(student.includes(location));
    if(student.includes(location)){
        alert("shiva")
    }

    return <>
        <Navbar />

            <Outlet />

        <Footer />
    </>
}
