import React from "react";

const Upload = (props) => {
    return (
        <label id='file-upload'>
            Upload an image!
            <input
                type='file'
                accept='image/png, image/jpeg'
                onChange={props.onUpload}
            />
        </label>
    );
};

export default Upload;
