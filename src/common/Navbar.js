import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoimage from '../components/img/style/logo.png';
import ScrollToTop from "react-scroll-to-top";


export default function Navbar() {
    const [skaCookies, setskaCookies] = useState('');
    // useEffect(() => {
    //     // document.cookie = `ska1234ska`
    //     document.cookie.split('ska').map((value) => {
    //         setskaCookies(value)
    //     })
    // }, [])
    return (
        <>
            <ScrollToTop width='20px' height='20px' />
            <nav className="navbar navbar-expand-lg navbar-light text-center fw-bold" style={{ backgroundColor: '#FCFCFC' }}>
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logoimage} className='img-fluid' alt='logo'
                            style={{ height: '40px' }} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbar-right" id="navbarNavAltMarkup">
                        <div className="nav navbar-nav ms-auto">
                            <ul className="navbar-nav mb-lg-0">
                                <li className="nav-item mx-1">
                                    <Link className="nav-link" to='/trainings'>Live Trainings</Link>
                                </li>
                                <li className="nav-item mx-1">
                                    <Link className="nav-link" to='/school'>School</Link>
                                </li>
                                <li className="nav-item mx-1">
                                    <Link className="nav-link" to='/counselling'>Career Counselling</Link>
                                </li>
                                <li className="nav-item mx-1">
                                    <Link className="nav-link" to='/careers'>Careers</Link>
                                </li>
                                <li className="nav-item mx-1">
                                    <Link className="nav-link" to='/contactus'>Contact Us</Link>
                                </li>
                                <li className="nav-item mx-1">
                                    <Link className="nav-link" to='/event'>Event</Link>
                                </li>
                                {skaCookies === '' &&
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/login'>Log In</Link>
                                    </li>}
                                {skaCookies && <li className="nav-item">
                                    <Link className="nav-link  rounded-circle bg-ska-secondary text-ska-primary" style={{ textDecoration: 'none', width: '40px' }}
                                        data-bs-toggle="offcanvas" to="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                        S
                                    </Link>
                                </li>
                                }
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>



            <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Setting</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        Shiva Singh
                    </div>
                    <div className='h1'>
                        We have your details we contact you soon
                    </div>
                    {/* <div class="d-grid gap-2 col-4">
                        <button type="submit" class="btn btn-ska-primary-dark"
                        >Enroll Now</button>
                    </div> */}
                </div>
            </div>
        </>
    );
}
