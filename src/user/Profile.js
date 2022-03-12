import React, { useState } from 'react';
import IMG from '../components/img/img.png'

export default function Profile() {


    const [details, setDetails] =
        useState({
            email: '',
            firstname: '',
            lastname: '',
            phone: '',
            password: '',
            password1: '',
        });
    const handleDetails = (e) => {
        // Axios.post(`${PrivateData.IP}/authentication/register`, details)
        //     .then((res) => {
        //         if (res.data === true) {
        //             navigate('/login')
        //         } else {
        //             alert('Sorry')
        //         }
        //     })
        e.preventDefault();
    };
    return <>
        <div className='h2 text-ska-primary my-3 mx-5'>My Profile</div>
        <div className='row align-items-center justify-content-center m-0'>
            <div className='col-md-2 col-4 mb-3'>
                <img className="img-fluid rounded-circle" src={IMG} alt='img' />
            </div>

            <hr />

            <div className='col-md-10'>
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
                    <div className="row mb-3">
                        <div className="col">
                            <input type="email" placeholder="Email address"
                                className="form-control form-control-lg border-ska-primary border-2 rounded-pill "
                                value={details.email} onChange={(event) => setDetails({
                                    ...details, email: event.target.value
                                })} required />
                        </div>
                        <div className="col">
                            <input type="tel" pattern="[5-9]{1}[0-9]{9}" placeholder="Phone"
                                className="form-control form-control-lg border-ska-primary border-2 rounded-pill"
                                value={details.phone} onChange={(event) => setDetails({
                                    ...details, phone: event.target.value
                                })} required />
                        </div>
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
                                className="form-control form-control-lg border-ska-primary border-2 rounded-pill"
                                value={details.password1} onChange={(event) => setDetails({
                                    ...details, password1: event.target.value
                                })} required />
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-4 m-2 mx-auto ">
                        <button type="submit" className="btn btn-ska-primary-dark rounded-pill "
                        >Save Change</button>
                    </div>
                </form>
            </div>
        </div>

    </>
}
