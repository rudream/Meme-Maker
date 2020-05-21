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
        console.log(topText.current.innerText.length);
        topText.current.style.fontSize = `100px`;
        bottomText.current.style.fontSize = `100px`;
        if (topText.current.innerText.length > 25) {
            topText.current.style.fontSize = `70px`;
        }
        if (topText.current.innerText.length > 50) {
            topText.current.style.fontSize = `50px`;
        }
        if (bottomText.current.innerText.length > 25) {
            bottomText.current.style.fontSize = `70px`;
        }
        if (bottomText.current.innerText.length > 50) {
            bottomText.current.style.fontSize = `50px`;
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
