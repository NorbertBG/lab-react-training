import React from 'react';

function Greetings(props) {
    const { lang, children } = props;

    const getGreetingText = () => {
        switch (lang) {
            case 'de':
                return `Hallo ${children}!`;
            case 'en':
                return `Hello ${children}!`;
            case 'es':
                return `¡Hola ${children}!`;
            case 'fr':
                return `Bonjour ${children}!`;
            default:
                return `Hello ${children}!`; 
        }
    };

    return <div className='greetings'>{getGreetingText()}</div>;
}


export default Greetings;