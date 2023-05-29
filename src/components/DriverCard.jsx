import React from 'react';
import Rating from './Rating';

function DriverCard(props) {

    return (
        <div className='driver-card'>
            <div>
                <img src={props.img} alt='' />
            </div>
            <div className='driver-text'>
            <span className='title'>{props.name}</span>
            <Rating className="rating">{props.rating}</Rating>
            <span className='model'>{props.car.model} - {props.car.licensePlate}</span>
            </div>
        </div>
    )
}


export default DriverCard;