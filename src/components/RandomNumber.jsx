import React, { useState } from 'react';

const RandomNumber = () => {
    const getRandomNumber = () => Math.floor(Math.random() * 100);

    const [number] = useState(getRandomNumber());

    return (
        <div>
            <div>{number}</div>
        </div>
    );
}

export default RandomNumber;
