import React from "react";

const Preview = (props) => {
    return (
        <div className='output'>
            <h1>{props.topText}</h1>
            <h1>{props.bottomText}</h1>
            <img src='https://images.unsplash.com/photo-1589285874275-c5b16f4b3f8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80' />
        </div>
    );
};

export default Preview;
