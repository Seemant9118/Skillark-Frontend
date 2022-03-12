import { useState, useEffect } from "react";
import toastContext from "./toastContext";
import logo from '../components/img/style/logo.png'
import * as bootstrap from "bootstrap";

const Toast = (props) => {
    const [toastDetails, setToastDetails] = useState([
        // { message: 'Welcome To Skillark', type: 'warning', time: '' },
        // { message: 'Welcome To Skillark', type: 'success', time: '' },
        // { message: 'Welcome To Skillark', type: 'danger', time: '' }
    ]);

    const addNewMessage = (mess, type) => {
        // set time
        const d = new Date();
        let timing = d.getHours() + ":" + d.getMinutes();

        toastDetails.length === 2 ? handleRemove() : console.log()
        setToastDetails([...toastDetails, { message: mess, type: type, time: timing }])
    }
    const [toastStatus, setToastStatus] = useState(false)
    useEffect(() => {
        setToastStatus(true)
    }, [toastDetails])

    var option = {
        // animation: true,
        autohide: true,
        delay: 8000,
    };
    // add toast
    function toastAdd() {
        var toastLive = document.querySelectorAll('#liveToast');
        toastLive.forEach(function (value, index) {
            var toast = new bootstrap.Toast(toastLive[index], option);
            toast.show();
        })
    }


    const handleRemove = () => {
        setToastDetails(toastDetails.splice(0, 2))
    }

    setTimeout(toastAdd, 500);

    return (
        <toastContext.Provider value={{ toastDetails, addNewMessage }}>

            {props.children}


            <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: '10' }}>
                {toastStatus && <>
                    {toastDetails.map((items) => {
                        return <>
                            <div id="liveToast" className={`toast my-1 border-1 border-${items.type}`}
                             role="alert" aria-live="assertive" aria-atomic="true" style={{width:'250px'}}>
                                <div className="toast-header pb-1">
                                    <img src={logo} className="rounded" alt="logo" style={{ height: '20px' }} />
                                    {/* <strong>Skillark</strong> */}
                                    <small className="ms-auto">{items.time}</small>
                                    <button type="button" onClick={handleRemove} className="btn-close text-end"
                                        data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div className={`toast-body pt-1 text-bolder text-${items.type}`}>{items.message}</div>
                            </div>
                        </>
                    })}
                </>}
            </div>
        </toastContext.Provider>
    )
}

export default Toast;