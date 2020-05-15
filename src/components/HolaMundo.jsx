import React from 'react';

const HolaMundo = () => {
    const IsTrue = false;
    return (
        <div className="Holamundo">
            <img src="https://www.tithink.com/wp-content/uploads/2018/11/React-Native-large.jpg" alt="imagen de react" />
            {IsTrue ? <h4>Es verdadero</h4> : <h5>Es falso</h5>}
            {IsTrue && <h4>Es verdadero</h4>}
        </div>
    )
}

export default HolaMundo;