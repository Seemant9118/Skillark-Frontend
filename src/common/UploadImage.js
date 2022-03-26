import React, { useState } from 'react'
import ReactDOM from 'react-dom';
const popup = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '100vw',
    height: '100vh',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
}
const closeButton = {
    position: 'absolute',
    top: '10vh',
    right: '6vw',
    border: '2px solid #026c62',
    borderRadius: '20%',
    padding: '5px 10px',
    zIndex: 11,
}
export default function UploadImage() {
    const [imgLink, setImgLink] = useState('');
    console.log(imgLink);
    const handleSetImg = (e) => {
        setImgLink(e.target.value);
        const reader = new FileReader();
        document.querySelector("#display_image").style.backgroundImage = `url(${imgLink})`;
        e.preventDefault();
    }

    const handlePopup = () => {

    }
    return ReactDOM.createPortal(
        <>
            <div className='row align-items-center justify-content-center m-0' style={popup}>
                <div className='col-md-8 col-11'>
                    <div className='ska-box'
                        style={{ maxHeight: '90vh', overflow: 'auto' }}>
                        <button style={closeButton} onClick={handlePopup} ><i class="bi bi-x-lg" /></button>
                        <input type='file' value={imgLink} onChange={handleSetImg} />
                        {imgLink && <img src={imgLink}/>
                        // <div dangerouslySetInnerHTML={{ __html: `<img src=${imgLink}/>` }} />
                        }
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('popup')
    )
}
