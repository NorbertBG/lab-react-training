import React from 'react';

function Random(props) {
 const { min, max} = props;

 const getRandomInt = (min,max) => {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max-min +1)) + min;
 }
 return <div>Random Number between {min} and {max}: {getRandomInt(min, max)}</div>;
}


export default Random;