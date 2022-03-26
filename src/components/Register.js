import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from "axios";
import PrivateData from './data/PrivateData';

export default function Register() {
    const navigate = useNavigate();
    const [statusForm, setStatusForm] = useState("email");
    const [OTP, setOTP] = useState();
    const [enterOTP, setenterOTP] = useState();
    const [details, setDetails] =
        useState({
            email: '',
            firstname: '',
            lastname: '',
            phone: '',
            password: '',
            password1: '',
        });
    const [style, setStyle] = useState({ otpCSS: '', passwordCSS: '' })

    const handleEmail = (e) => {
        Axios.post(`${PrivateData.IP}/authentication/emailverification`, details)
            .then((res) => {
                if (res.data === true) {
                    alert('already exit')
                    navigate('/login')
                } else {
                    setOTP(res.data)
                    // console.log(res.data);
                    setStatusForm("OTP")
                }
            });
        e.preventDefault();
    }
    const handleOTP = (e) => {
        if (enterOTP == OTP) {
            // console.log(enterOTP + ' ' + OTP);
            setStatusForm("details")
        } else {
            setStyle({ otpCSS: 'border-danger is-invalid' })
            // console.log(enterOTP + ' ' + OTP);
            alert('otp Not Match')
        }
        e.preventDefault();
    }
    const handleDetails = (e) => {
        Axios.post(`${PrivateData.IP}/authentication/register`, details)
            .then((res) => {
                if (res.data === true) {
                    navigate('/login')
                } else {
                    alert('Sorry')
                    console.log(res.data);
                }
            })
        e.preventDefault();
    };

    // check box 
    const [agreeBtn, setAgreeBtn] = useState(true);
    const handleOnChange = () => {
        agreeBtn ? (setAgreeBtn(false)) : (setAgreeBtn(true));
    }
    return <div className='row justify-content-center'>
        <div className='col-md-8 col-sm-10'>
            <div className='m-3 fw-bolder display-4 text-ska-primary'>
                Register
            </div>
            <div className='d-grid gap-2 col-10  mx-auto'>
                <button type="button" className="btn btn-outline-ska-primary-dark border-2 rounded-pill ">
                    <i className=''></i>
                    Continue with Google</button>
                <div className='text-center h6 text-ska-primary'>OR</div>
            </div>
            {statusForm === 'email' &&
                // {/* email form */}
                <form method='POST' onSubmit={handleEmail}>
                    <div className="mb-3">
                        <input type="email" placeholder="Email address"
                            className="form-control form-control-lg border-ska-primary border-2 rounded-pill "
                            value={details.email} onChange={(event) => setDetails({
                                ...details, email: event.target.value
                            })} required />
                    </div>
                    <div className='row mb-3'>
                        <div className="col ms-3 form-check">
                            <input type="checkbox" className="form-check-input border-ska-primary"
                                id="exampleCheck1" onChange={handleOnChange} />
                            <label className="form-check-label" for="exampleCheck1" style={{ cursor: 'pointer' }}>
                                Agree to our Terms and Conditions</label>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-10 m-2 mx-auto ">
                        <button type="submit" className="btn btn-ska-primary-dark rounded-pill " disabled={agreeBtn}
                        >Send OTP</button>
                    </div>
                </form>}
            {statusForm === 'OTP' &&
                // {/* OTP form */}
                <form method='POST' onSubmit={handleOTP}>
                    <div className="mb-3">
                        <input type="text" placeholder="OTP"
                            className={`form-control form-control-lg border-ska-primary border-2 rounded-pill ${style.otpCSS}`}
                            value={enterOTP} onChange={(event) => setenterOTP(event.target.value)} required />
                    </div>
                    <div className="d-grid gap-2 col-10 m-2 mx-auto ">
                        <button type="submit" className="btn btn-ska-primary-dark rounded-pill "
                        >Confirm</button>
                    </div>
                </form>}
            {statusForm === 'details' &&
                // {/* details form */}
                <form method='POST' onSubmit={handleDetails}>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" placeholder="First Name" autoFocus
                                className="form-control form-control-lg border-ska-primary border-2 rounded-pill "
                                value={details.firstname} onChange={(event) => setDetails({
                                    ...details, firstname: event.target.value
                                })} required />
                        </div>
                        <div className="col">
                            <input type="text" placeholder="Last Name"
                                className="form-control form-control-lg border-ska-primary border-2 rounded-pill "
                                value={details.lastname} onChange={(event) => setDetails({
                                    ...details, lastname: event.target.value
                                })} required />
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input type="tel" pattern="[5-9]{1}[0-9]{9}" placeholder="Phone"
                            className="form-control form-control-lg border-ska-primary border-2 rounded-pill"
                            value={details.phone} onChange={(event) => setDetails({
                                ...details, phone: event.target.value
                            })} required />
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="password" placeholder="Password"
                                className="form-control form-control-lg border-ska-primary border-2 rounded-pill "
                                value={details.password} onChange={(event) => setDetails({
                                    ...details, password: event.target.value
                                })} required />
                        </div>
                        <div className="col">
                            <input type="password" placeholder="Password"
                                className="form-control form-control-lg border-ska-primary border-2 rounded-pill border-danger is-invalid"
                                value={details.password1} onChange={(event) => setDetails({
                                    ...details, password1: event.target.value
                                })} required />
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-10 m-2 mx-auto ">
                        <button type="submit" className="btn btn-ska-primary-dark rounded-pill "
                        >Register</button>
                    </div>
                </form>
            }
            <div className='text-center h6 m-2'>
                Already have a account? <Link to='/login'>Log In</Link>
            </div>
        </div>
    </div>
}