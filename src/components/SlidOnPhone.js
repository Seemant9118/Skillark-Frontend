import React from 'react';
import IMG from './img/img.png'

export default function SlidOnPhone(props) {

    const removeActive = () => {
        var div = document.querySelectorAll(".sectionP");
        div.forEach((value, index) => {
            div[index].classList.remove('P_active')
        });
    }
    const addActive = (n) => {
        var div = document.querySelectorAll(".sectionP");
        removeActive();
        div[n].classList.add('P_active');
        addActiveboxdesc(n);
        addActivebox(n)
    }

    // description
    const removeActiveboxdesc = () => {
        var boxdesc = document.querySelectorAll(".boxdescP");
        boxdesc.forEach((value, index) => {
            boxdesc[index].classList.remove('boxdesc_activeP')
        });
    }
    const addActiveboxdesc = (n) => {
        var boxdesc = document.querySelectorAll(".boxdescP");
        removeActiveboxdesc();
        boxdesc[n].classList.add('boxdesc_activeP')
    }

    // box
    const removeActivebox = () => {
        var box = document.querySelectorAll(".boxP");
        box.forEach(function (value, index) {
            box[index].classList.remove('box_activeP')
        });
    }
    const addActivebox = (n) => {
        var box = document.querySelectorAll(".boxP");
        removeActivebox();
        box[n].classList.add('box_activeP')
    }


    // default Active
    setTimeout(() => addActive(1), 100)
    return (
        <div className=' d-sm-block d-lg-none mt-3 p-3'>
            <div className='row align-items-center justify-content-center m-0'>
                <div className='h1 text-center text-ska-primary'>Our Top Rated Instructors</div>
                <div className="col-md-8 col-sm-12">
                    {props.SlidData.data.map((item, index) => {
                        return (<div className={`sectionP sectionP${index}`} 
                        onMouseEnter={() => { addActive(index) }}>
                            <h2>{item.name}</h2>
                            <div className='boxP'>
                                <p>{item.title}<br />
                                    {item.profession}</p>
                                <button className="btn btn-primary">Enroll Now</button>
                            </div>
                            <div class="boxdescP">
                                {item.desc}
                            </div>
                            <img style={{borderTopLeftRadius:'20px'}}
                            className="inst_imgP" src={item.img} />
                        </div>)
                    })}
                </div>
            </div>
        </div>);
}
