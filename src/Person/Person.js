import React from 'react';

const Person = (props) => {
    return (
        <div onClick={props.click}>
            <h1>I'm {props.name} and I am {props.age} years old</h1>
            <p>{props.children}</p>
        </div>
    )
};

export default Person;