import React from 'react';

function Rating(props) {
    
    const randomNumber = Math.round(props.children);
    let stars = ""
    for (let i=0; i<randomNumber; i++) {
        stars += "★"
    }
    for (let j=randomNumber; j<5; j++) {
        stars += "☆"
    }
    return (
        <div>
        {stars}
        </div>
    )
}



export default Rating;
