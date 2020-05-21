import React, { useRef, useEffect } from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

const Preview = (props) => {
    const image = useRef(null);
    const frame = useRef(null);
    const topText = useRef(null);
    const bottomText = useRef(null);

    useEffect(() => {
        if (image.current) {
            image.current.style.offsetWidth = "800px";
            frame.current.style.height = `${image.current.offsetHeight}px`;
            frame.current.style.width = `${image.current.offsetWidth}px`;
        }
        topText.current.innerHTML = `${topText.current.innerText}`.toUpperCase();
        bottomText.current.innerHTML = `${bottomText.current.innerText}`.toUpperCase();
        if (topText.current.innerText.length > 25) {
            topText.current.style.fontSize = `50px`;
        } else if (topText.current.innerText.length > 70) {
            topText.current.style.fontSize = `20px`;
        } else {
            topText.current.style.fontSize = `100px`;
        }
        if (bottomText.current.innerText.length > 25) {
            bottomText.current.style.fontSize = `50px`;
        } else if (bottomText.current.innerText.length > 70) {
            bottomText.current.style.fontSize = `20px`;
        } else {
            bottomText.current.style.fontSize = `100px`;
        }
    });

    const downloadImage = () => {
        domtoimage.toBlob(frame.current).then(function (blob) {
            saveAs(blob, "my-meme.png");
        });
    };

    return (
        <div className="output" ref={frame} onClick={downloadImage}>
            <h1 ref={topText}>{props.topText}</h1>
            <h1 ref={bottomText}>{props.bottomText}</h1>
            <img src={props.src} ref={image} />
        </div>
    );
};

export default Preview;
