import React from 'react';

export default function Slid(props) {

    const removeActive = () => {
        var div = document.querySelectorAll(".section");
        div.forEach((value, index) => {
            div[index].classList.remove('active')
        });
    }
    const addActive = (n) => {
        var div = document.querySelectorAll(".section");
        removeActive();
        div[n].classList.add('active');
        addActiveboxdesc(n);
        addActivebox(n)
    }

    // description
    const removeActiveboxdesc = () => {
        var boxdesc = document.querySelectorAll(".boxdesc");
        boxdesc.forEach((value, index) => {
            boxdesc[index].classList.remove('boxdesc_active')
        });
    }
    const addActiveboxdesc = (n) => {
        var boxdesc = document.querySelectorAll(".boxdesc");
        removeActiveboxdesc();
        boxdesc[n].classList.add('boxdesc_active')
    }

    // box
    const removeActivebox = () => {
        var box = document.querySelectorAll(".box");
        box.forEach(function (value, index) {
            box[index].classList.remove('box_active')
        });
    }
    const addActivebox = (n) => {
        var box = document.querySelectorAll(".box");
        removeActivebox();
        box[n].classList.add('box_active')
    }


    // default Active
    setTimeout(() => addActive(1), 100)
    return (
        <div className='d-none d-lg-block mt-3 p-3'>
            <div className='h1 text-center text-ska-primary'>Our Top Rated Instructors</div>
            <div className="main">
                {props.SlidData.data.map((item, index) => {
                    return (<div className={`section section${index}`} onMouseEnter={() => { addActive(index) }}>
                        <h2>{item.name}</h2>
                        <div className="box">
                            <p>{item.title}<br />
                                {item.profession}</p>
                            <button className="btn btn-ska-secondary">Enroll Now</button>
                        </div>
                        <div className="boxdesc">
                            {item.desc}
                        </div>
                        <img  style={{borderTopLeftRadius:'20px'}}
                        className="inst_img " src={item.img}  alt='img'/>
                    </div>)
                })}
            </div>
        </div>);
}
