import React from 'react';
import { Link } from 'react-router-dom';
import SchoolData from './data/SchoolData';
import IMG from './img/style/bgbanner.jpg';
import Carousel from 'react-elastic-carousel';

export default function Cards(props) {
    return (
        <div style={{
            // background: `linear-gradient( 10deg,rgba(216, 221, 220, 0.349),rgba(1, 116, 96, 0.267)), url(${IMG}), no-repeat, 50%, 50%`,
            background: `url(${IMG}), no-repeat, 50%, 50%`,
            backgroundSize: 'cover',
            boaderRadius: '10px'
        }} className='p-5'>
            <Carousel>
                {SchoolData.map((item, index) =>
                    <>
                        <div className="card-body">
                            <img style={{ height: '200px', overflow: 'hidden' }} src={item.img} alt={item.img} />
                            <h5 className='card-title text-white'>{item.title}</h5>
                            <p className='card-text text-ska-secondary'>{item.desc}</p>
                            <p className='fw-bolder'>Price: ₹.{item.price}</p>
                            <Link className="btn btn-ska-secondary"
                                to={`/course/${item.id}`}>Enroll Now</Link>
                        </div>
                    </>
                )}
            </Carousel>
        </div>
    );
}
