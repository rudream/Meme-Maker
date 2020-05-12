import React from "react";

const Input = (props) => {
    return (
        <div>
            <input
                type='text'
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
        </div>
    );
};

export default Input;
