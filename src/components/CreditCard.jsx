import React from 'react';
import Visa from '../assets/images/visa.png'
import Mastercard from '../assets/images/mastercard.png'

function CreditCard(props) {
    const divStyle = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`
    };
    let image = "";
    switch (props.type) {
        case 'card-visa':
            image = Visa;
            break;
        default:
        case 'card-mastercard':
            image = Mastercard;
            break;
    }
    console.log(Visa)
    return (
        <div className='credit-card ' style={divStyle}>
            <div>
                <img src={image} alt="Card Brand" className='image' />
            </div>
            <div>
                <p className='number'> <b>···· ···· ····</b> {props.num} </p>
                <p> <b>Expires</b> {props.expirationMonth} {props.expirationYear}</p>
                <p className='bank'> {props.bank} </p>
                <p> {props.owner} </p>
            </div>
        </div>
    )
}

export default CreditCard;