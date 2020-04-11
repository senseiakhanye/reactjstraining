import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div className="clickablediv">
            <h1>I'm {props.name} and I am {props.age} years old</h1>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    )
};

export default Person;