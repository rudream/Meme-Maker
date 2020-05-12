import React from "react";

const Upload = () => {
    return (
        <label id='file-upload'>
            Upload an image!
            <input type='file' accept='image/png, image/jpeg' />
        </label>
    );
};

export default Upload;
