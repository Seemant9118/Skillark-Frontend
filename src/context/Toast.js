import { useState, useEffect } from "react";
import toastContext from "./toastContext";
import logo from '../components/img/style/logo.png'
import * as bootstrap from "bootstrap";

const Toast = (props) => {
    const [toastDetails, setToastDetails] = useState([
        { message: 'Welcome To Skillark', type: 'warning', time: '' },
        { message: 'Welcome To Skillark', type: 'success', time: '' },
        { message: 'Welcome To Skillark', type: 'danger', time: '' }]);

    const addNewMessage = (mess, type,timing) => {
        // set defaulttime
        timing == null ? (timing = 'just now') : (timing = timing)
        setToastDetails([...toastDetails, { message: mess, type: type,time:timing }])
        toastDetails.length === 3 ? handleRemove() : console.log()
    }
    const [toastStatus, setToastStatus] = useState(false)
    useEffect(() => {
        setToastStatus(true)
    }, [toastDetails])

    var option = {
        animation: true,
        autohide: true,
        delay: 6000,
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
        setToastDetails(toastDetails.splice(1, 2))
    }
    console.log(toastDetails);

    setTimeout(toastAdd, 500);

    return (
        <toastContext.Provider value={{ toastDetails, addNewMessage }}>

            {props.children}


            <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: '10' }}>
                {toastStatus && <>
                    {toastDetails.map((items, index) => {
                        return <>
                            <div id="liveToast" className={`toast my-1 border-1 border-${items.type} bg-${items.type} bg-opacity-25`} role="alert" aria-live="assertive" aria-atomic="true">
                                <div className="toast-header">
                                    <img src={logo} className="rounded" alt="logo" style={{ height: '20px' }} />
                                    {/* <strong>Skillark</strong> */}
                                    <small className="ms-auto">{items.time}</small>
                                    <button type="button" onClick={handleRemove} className="btn-close text-end"
                                        data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div className="toast-body ">{items.message}</div>
                            </div>
                        </>
                    })}
                </>}
            </div>
        </toastContext.Provider>
    )
}

export default Toast;