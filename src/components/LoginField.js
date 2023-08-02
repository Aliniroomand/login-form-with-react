import React from 'react';

const LoginField = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <input type={props.type} name={props.name} value={props.value} onChange={props.onChange}></input>
        </div>
    );
};

export default LoginField;